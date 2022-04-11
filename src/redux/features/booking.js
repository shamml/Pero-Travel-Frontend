const initialState = {
  answer: null,
  booking: [],
  loading: true,
  error: null,
};

export const booking = (state = initialState, action) => {
  switch (action.type) {
    //////// ************ Добавление бронирования в личный кабинет ************ //////// {*}
    case 'booking/add/pending':
      return {
        ...state,
        loading: true,
      };
    case 'booking/add/fulfilled':
      return {
        ...state,
        loading: false,
        answer: action.payload,
      };
    case 'booking/add/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    //////// ************ Просмотр броней относящиеся к пользователю (в личном кабинете) ************ //////// {*}
    case 'booking/fetchUser/pending':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'booking/fetchUser/fulfilled':
      return {
        ...state,
        loading: false,
        booking: action.payload,
      };
    case 'booking/fetchUser/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    //////// ************ Отменить бронирование (в личном кабинете) ************ //////// {*}
    case 'booking/cancelbooking/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'booking/cancelbooking/fulfilled':
      return {
        ...state,
        loading: false,
        booking: [
          ...state.booking.filter((item) => item._id !== action.payload._id),
        ],
      };
    case 'booking/cancelbooking/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

//////// ************ Добавление бронирования в личный кабинет ************ //////// {*}

export const addBooking = (id, day, timeInformation, people, total) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'booking/add/pending' });
    try {
      const res = await fetch('http://localhost:3030/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({
          tour: id,
          timeInformation: timeInformation,
          day: day,
          people: people,
          total: total,
        }),
      });
      const json = await res.json();
      dispatch({ type: 'booking/add/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'booking/add/rejected', error: e.toString() });
    }
  };
};

//////// ************ Просмотр броней относящиеся к пользователю (в личном кабинете) ************ //////// {*}

export function fetchBookingUser() {
  return function (dispatch, getState) {
    const state = getState();
    dispatch({ type: 'booking/fetchUser/pending' });
    fetch('http://localhost:3030/bookings/user', {
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((booking) => {
        dispatch({ type: 'booking/fetchUser/fulfilled', payload: booking });
      })
      .catch((error) => {
        dispatch({
          type: 'booking/fetchUser/rejected',
          error: error.toString(),
        });
      });
  };
}

//////// ************ Отменить бронирование (в личном кабинете) ************ //////// {*}

export function cancelBooking(id) {
  return function (dispatch, getState) {
    const state = getState();
    dispatch({ type: 'booking/cancelbooking/pending' });
    fetch(`http://localhost:3030/bookings/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    })
      .then((responce) => responce.json())
      .then((booking) => {
        dispatch({ type: 'booking/cancelbooking/fulfilled', payload: booking });
      })
      .catch((error) => {
        dispatch({
          type: 'booking/cancelbooking/rejected',
          error: error.toString(),
        });
      });
  };
}
