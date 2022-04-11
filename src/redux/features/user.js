const initialState = {
  data: [],
  users: [],
  loading: false,
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'user/fetchAllUser/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'user/fetchAllUser/fulfilled':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'user/fetchAllUser/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
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
        data: action.payload,
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
        data: { ...state.data, image: action.payload.image },
      };
    case 'user/editavatar/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'user/deleteavatar/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'user/deleteavatar/fulfilled':
      return {
        ...state,
        loading: false,
        data: { ...state.data, image: action.payload.image },
      };
    case 'user/deleteavatar/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function fetchAllUser() {
  return function (dispatch) {
    dispatch({ type: 'user/fetchAllUser/pending' });
    fetch('http://localhost:3030/users')
      .then((responce) => responce.json())
      .then((json) => {
        dispatch({ type: 'user/fetchAllUser/fulfilled', payload: json });
      })
      .catch((error) => {
        dispatch({ type: 'user/fetchAllUser/rejected', error: error.toString() });
      });
  };
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
      .then((user) => {
        dispatch({ type: 'user/fetchuser/fulfilled', payload: user });
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

export function deleteAvatar() {
  return function (dispatch, getState) {
    const state = getState();
    dispatch({ type: 'user/deleteavatar/pending' });
    fetch('http://localhost:3030/users/profile/photo', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((user) => {
        dispatch({ type: 'user/deleteavatar/fulfilled', payload: user });
      })
      .catch((error) => {
        dispatch({
          type: 'user/deleteavatar/rejected',
          error: error.toString(),
        });
      });
  };
}
