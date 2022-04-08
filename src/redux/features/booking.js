const initialState = {
  booking: [],
  loading: true,
  error: null,
};

export const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'booking/add/pending':
      return {
        ...state,
        loading: true,
      };
    case 'booking/add/fulfilled':
      return {
        ...state,
        loading: false,
        booking: [
          state.booking.map((item) => {
            if (item._id === action.payload._id) {
              item.booking = action.payload.booking;
            }
            return item;
          }),
        ],
      };
    case 'booking/add/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addBooking = (tour, day, people) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'booking/add/pending' });
    try {
      const res = await fetch('http://localhost:3030/bookings', {
       method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({ tour, day, people }),
      });
      const json = await res.json();
      dispatch({ type: 'booking/add/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'booking/add/rejected', error: e.toString() });
    }
  };
};
