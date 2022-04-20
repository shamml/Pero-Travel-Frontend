const initialState = {
  optionals: [],
  loading: false,
  error: null,
};

export default function optional(state = initialState, action) {
  switch (action.type) {
    case 'optional/fetchoptionals/pending':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'optional/fetchoptionals/fulfilled':
      return {
        ...state,
        loading: false,
        optionals: action.payload,
      };
    case 'optional/fetchoptionals/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function fetchOptionals() {
  return function (dispatch) {
    dispatch({ type: 'optional/fetchoptionals/pending' });
    fetch('http://localhost:3030/optionals')
      .then((responce) => responce.json())
      .then((optionals) => {
        dispatch({
          type: 'optional/fetchoptionals/fulfilled',
          payload: optionals,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'optional/fetchoptionals/rejected',
          error: error.toString(),
        });
      });
  };
}
