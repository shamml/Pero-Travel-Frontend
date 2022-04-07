const initialState = {
  tours: [],
  booking: [],
  loading: false,
};

export default function tours(state = initialState, action) {
  switch (action.type) {
    case 'tours/fetch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'tours/fetch/fulfilled':
      return {
        ...state,
        loading: false,
        tours: action.payload,
      };
    case 'tours/fetch/rejected':
      return {
        ...state,
        loading: false,
      };
    case 'delete/tour/pending':
      return {
        ...state,
        loading: true,
      };
    case 'delete/tour/fulfilled':
      return {
        ...state,
        loading: false,
        tours: [
          ...state.tours.filter((tour) => tour._id !== action.payload._id),
        ],
      };
    case 'delete/tour/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case 'fulfilled/tours':
      return {
        ...state,
        booking: action.payload,
      };
    default:
      return state;
  }
}

export const fetchTours = () => {
  return async (dispatch) => {
    dispatch({ type: 'tours/fetch/pending' });
    try {
      const res = await fetch('http://localhost:3030/tours');
      const json = await res.json();
      dispatch({ type: 'tours/fetch/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'tours/fetch/rejected' });
    }
  };
};

export const booking = (data) => {
  return async (dispatch) => {
    dispatch({ type: 'pending/tours' });
    try {
      dispatch({ type: 'fulfilled/tours', payload: data });
    } catch (e) {
      dispatch({ type: 'rejected/tours' });
    }
  };
};

export const deleteTour = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'delete/tour/pending' });
    try {
      const res = await fetch(`http://localhost:3030/admin/tours/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = res.json();
      console.log(json);
      dispatch({ type: 'delete/tour/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'delete/tour/rejected', error: e.toString() });
    }
  };
};
