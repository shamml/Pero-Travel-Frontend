const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'user/fetchuser/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'user/fetchuser/fulfilled':
      return {
        ...state,
        loading: false,
        data: [action.payload],
      };
    case 'user/fetchuser/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'user/editavatar/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'user/editavatar/fulfilled':
      return {
        ...state,
        loading: false,
        data: state.data.map((item) => {
          console.log(item);
          console.log(action.payload);
          if (item._id === action.payload._id) {
            item.image = action.payload.image;
          }
          return item;
        }),
      };
    case 'user/editavatar/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function fetchIdUser() {
  return function (dispatch, getState) {
    const state = getState();
    dispatch({ type: 'user/fetchuser/pending' });
    fetch('http://localhost:3030/users/profile', {
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((info) => {
        dispatch({ type: 'user/fetchuser/fulfilled', payload: info });
      })
      .catch((error) => {
        dispatch({ type: 'user/fetchuser/rejected', error: error.toString() });
      });
  };
}

export function editAvatar(image) {
  return function (dispatch, getState) {
    const state = getState();
    const data = new FormData();

    data.append('image', image);
    dispatch({ type: 'user/editavatar/pending' });
    fetch('http://localhost:3030/users/image', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
      body: data,
    })
      .then((responce) => responce.json())
      .then((user) => {
        dispatch({ type: 'user/editavatar/fulfilled', payload: user });
      })
      .catch((error) => {
        dispatch({ type: 'user/editavatar/rejected', error: error.toString() });
      });
  };
}
