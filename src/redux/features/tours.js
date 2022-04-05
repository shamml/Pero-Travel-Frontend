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
      dispatch({ type: 'tours/fetch/rejected'});
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
