const initialState = {
  review: [],
  reviewById: [],
  loading: false,
};

export default function review(state = initialState, action) {
  switch (action.type) {
    case 'review/fetch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'review/fetch/fulfilled':
      return {
        ...state,
        loading: false,
        review: action.payload,
      };
    case 'tours/fetch/rejected':
      return {
        ...state,
        loading: false,
      };
    case 'review/fetchById/pending':
      return {
        ...state,
        loading: true,
      };
    case 'review/fetchById/fulfilled':
      return {
        ...state,
        loading: false,
        reviewById: action.payload,
      };
    case 'tours/fetchById/rejected':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const fetchReview = () => {
  return async (dispatch) => {
    dispatch({ type: 'review/fetch/pending' });
    try {
      const res = await fetch('http://localhost:3030/review');
      const json = await res.json();
      dispatch({ type: 'review/fetch/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'review/fetch/rejected' });
    }
  };
};

export const fetchByIdReview = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'review/fetchById/pending' });
    try {
      const res = await fetch(`http://localhost:3030/reviews/tours/${id}`);
      const json = await res.json();
      dispatch({ type: 'review/fetchById/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'review/fetchById/rejected' });
    }
  };
};

export function addReviewBooking(idTour, text) {
  return function (dispatch, getState) {
    const state = getState();
    dispatch({ type: 'review/addreview/pending' });
    fetch(`http://localhost:3030/reviews/${idTour}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.application.token}`,
      },
      body: JSON.stringify({ text }),
    })
      .then((responce) => responce.json())
      .then((json) => {
        dispatch({ type: 'review/addreview/fulfilled', payload: json });
      })
      .catch((error) => {
        dispatch({
          type: 'review/addreview/rejected',
          payload: error.toString(),
        });
      });
  };
}
