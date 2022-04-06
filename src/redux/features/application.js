const initialState = {
  signinIn: false,
  signinUp: false,
  error: null,
  token: localStorage.getItem('token'),
  role: localStorage.getItem('role'),
  id: null,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    //регистрация
    case 'application/registration/pending':
      return {
        ...state,
        signinUp: true,
      };
    case 'application/registration/fulfilled':
      return {
        ...state,
        signinUp: false,
      };
    case 'application/registration/rejected':
      return {
        ...state,
        signinUp: false,
        error: action.error,
      };
    //авторизация
    case 'application/login/pending':
      return {
        ...state,
        signinIn: true,
      };
    case 'application/login/fulfilled':
      return {
        ...state,
        signinIn: false,
        token: action.payload.token,
        role: action.payload.role,
        id: action.payload.id,
      };
    case 'application/login/rejected':
      return {
        ...state,
        signinIn: false,
        error: action.error,
      };
    //выход
    case 'application/exit/fulfilled':
      return {
        ...state,
        token: null,
        id: null,
      };
    default:
      return state;
  }
}

export const registration = (login, password, firstName, lastName) => {
  return async (dispatch) => {
    dispatch({ type: 'application/registration/pending' });
    try {
      const res = await fetch('http://localhost:3030/registration', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ login, password, firstName, lastName }),
      });
      const json = await res.json();
      dispatch({ type: 'application/registration/fulfilled', payload: json });
    } catch (e) {
      dispatch({
        type: 'application/registration/rejected',
        error: e.toString(),
      });
    }
  };
};

export const authorization = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: 'application/login/pending' });
    try {
      const res = await fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json();
      console.log(json.id);
      dispatch({ type: 'application/login/fulfilled', payload: json });
      localStorage.setItem('token', json.token);
      localStorage.setItem('role', json.role);
    } catch (e) {
      dispatch({ type: 'application/login/rejected' });
    }
  };
};

export const exit = () => {
  return async (dispatch) => {
    dispatch({ type: 'application/exit/fulfilled' });
    localStorage.clear();
  };
};
