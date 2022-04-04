const initialState = {
  booking: [],
  loading: false
}

export default function tours(state = initialState, action) {
  switch (action.type) {
    case 'fulfilled/tours':
      return {
        ...state,
        booking: action.payload
      }
    default:
      return state
  }
}

export const booking = (data) => {
  return async (dispatch) => {
    dispatch({type: 'pending/tours'})
    try {
      dispatch({type: 'fulfilled/tours', payload: data})
    } catch (e) {
      dispatch({type: 'rejected/tours'})
    }
  }
}