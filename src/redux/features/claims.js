const initialState = {
  claims: [],
  loading: true,
  error: null,
};

export const claims = (state = initialState, action) => {
  switch (action.type) {
    case 'add/claims/pending':
      return {
        ...state,
        loading: true,
      };
    case 'add/claims/fulfilled':
      return {
        ...state,
        loading: false,
        claims: [action.payload, ...state.claims],
      };
    case 'add/claims/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const addClaims = (email, text, phone) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'add/claims/pending' });
    try {
      const res = await fetch('http://localhost:3030/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({ email, text, phone }),
      });
      const json = await res.json();
      console.log(json);
      dispatch({ type: 'add/claims/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'add/claims/rejected', error: e.toString() });
    }
  };
};
