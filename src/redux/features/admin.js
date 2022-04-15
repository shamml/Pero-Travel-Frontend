const initialState = {
  tours: [],
  bookings: [],
  loading: false,
  loadingFetch: false,
  loadingDelete: false,
  loadingFetchBookings: false,
  loadingClearArchive: false,
  error: null,
};

export default function admin(state = initialState, action) {
  switch (action.type) {
    // Добавление тура с админки //
    case 'admin/addtour/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'admin/addtour/fulfilled':
      return {
        ...state,
        tours: [action.payload, ...state.tours],
        loading: false,
      };
    case 'admin/addtour/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // Просмотр всех туров //
    case 'admin/fetchtour/pending':
      return {
        ...state,
        loadingFetch: true,
        error: null,
      };
    case 'admin/fetchtour/fulfilled':
      return {
        ...state,
        loadingFetch: false,
        tours: action.payload,
      };
    case 'admin/fetchtour/rejected':
      return {
        ...state,
        loadingFetch: false,
        error: action.error,
      };
    // Удаление тура //
    case 'admin/deletetour/pending':
      return {
        ...state,
        loadingDelete: true,
        error: null,
      };
    case 'admin/deletetour/fulfilled':
      return {
        ...state,
        loadingDelete: false,
        tours: [
          ...state.tours.filter((tour) => tour._id !== action.payload._id),
        ],
      };
    case 'admin/deletetour/rejected':
      return {
        ...state,
        loadingDelete: false,
        error: action.error,
      };
    // Изменение тура //
    case 'admin/edittour/pending':
      return {
        ...state,
        loadingEdit: true,
        error: null,
      };
    case 'admin/edittour/fulfilled':
      return {
        ...state,
        loadingEdit: false,
        tours: state.tours.map((tour) => {
          if (tour._id === action.payload._id) {
            tour.typeTour = action.payload.typeTour;
            tour.place = action.payload.place;
            tour.title = action.payload.title;
            tour.desc = action.payload.desc;
            tour.price = action.payload.price;
            tour.priceForChild = action.payload.priceForChild;
            tour.duration = action.payload.duration;
            tour.bgImage = action.payload.bgImage;
          }
          return tour;
        }),
      };
    case 'admin/edittour/rejected':
      return {
        ...state,
        loadingEdit: false,
        error: action.error,
      };
    // Просмотр букингов
    case 'admin/fetchbookings/pending':
      return {
        ...state,
        loadingFetchBookings: true,
        error: null,
      };
    case 'admin/fetchbookings/fulfilled':
      return {
        ...state,
        loadingFetchBookings: false,
        bookings: action.payload,
      };
    case 'admin/fetchbookings/rejected':
      return {
        ...state,
        loadingFetchBookings: false,
        error: action.error,
      };
    //////// ************ В архив ************ //////// {*}
    case 'admin/cleararchive/pending':
      return {
        ...state,
        loadingClearArchive: true,
        error: null,
      };
    case 'admin/cleararchive/fulfilled':
      return {
        ...state,
        loadingClearArchive: false,
        bookings: [
          ...state.bookings.filter(
            (booking) => booking._id !== action.payload._id,
          ),
        ],
      };
    case 'admin/cleararchive/rejected':
      return {
        ...state,
        loadingClearArchive: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function addTour(
  tour,
  place,
  title,
  desc,
  price,
  priceForChild,
  duration,
  bgImage,
  tickets,
) {
  return function (dispatch) {
    dispatch({ type: 'admin/addtour/pending' });
    const data = new FormData();
    data.append('typeTour', tour);
    data.append('place', place);
    data.append('title', title);
    data.append('desc', desc);
    data.append('price', price);
    data.append('tickets', tickets);
    data.append('priceForChild', priceForChild);
    data.append('duration', duration);
    data.append('bgImage', bgImage);
    fetch('http://localhost:3030/admin/tours', {
      method: 'POST',
      body: data,
    })
      .then((responce) => responce.json())
      .then((data) => {
        dispatch({ type: 'admin/addtour/fulfilled', payload: data });
        console.log(data);
      })
      .catch((error) => {
        dispatch({ type: 'admin/addtour/rejected', error: error.toString() });
      });
  };
}

export function fetchTours() {
  return function (dispatch) {
    dispatch({ type: 'admin/fetchtour/pending' });
    fetch('http://localhost:3030/tours')
      .then((responce) => responce.json())
      .then((tours) => {
        dispatch({ type: 'admin/fetchtour/fulfilled', payload: tours });
      })
      .catch((error) => {
        dispatch({ type: 'admin/fetchtour/rejected', error: error.toString() });
      });
  };
}

export function deleteTour(id) {
  return function (dispatch) {
    dispatch({ type: 'admin/deletetour/pending' });
    fetch(`http://localhost:3030/admin/tours/${id}`, {
      method: 'DELETE',
    })
      .then((responce) => responce.json())
      .then((tour) => {
        dispatch({ type: 'admin/deletetour/fulfilled', payload: tour });
      })
      .catch((error) => {
        dispatch({
          type: 'admin/deletetour/rejected',
          error: error.toString(),
        });
      });
  };
}

export function editTour(
  id,
  tourEdit,
  placeEdit,
  titleEdit,
  descEdit,
  bgImageEdit,
  priceEdit,
  priceForChildEdit,
  durationEdit,
) {
  return function (dispatch) {
    dispatch({ type: 'admin/edittour/pending' });
    const data = new FormData();
    data.append('typeTour', tourEdit);
    data.append('place', placeEdit);
    data.append('title', titleEdit);
    data.append('desc', descEdit);
    data.append('price', priceEdit);
    data.append('priceForChild', priceForChildEdit);
    data.append('duration', durationEdit);
    data.append('bgImage', bgImageEdit);

    fetch(`http://localhost:3030/admin/tours/${id}`, {
      method: 'PATCH',
      body: data,
    })
      .then((responce) => responce.json())
      .then((tour) => {
        dispatch({ type: 'admin/edittour/fulfilled', payload: tour });
      })
      .catch((error) => {
        dispatch({ type: 'admin/edittour/rejected', error: error.toString() });
      });
  };
}

export function addOptionalToTour(
  idTourOptional,
  optionalTitle,
  optionalPrice,
) {
  return function (dispatch) {
    console.log(idTourOptional, optionalTitle, optionalPrice);
    dispatch({ type: 'admin/addoptional/pending' });
    fetch('http://localhost:3030/admin/optionals', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tour: idTourOptional,
        title: optionalTitle,
        price: optionalPrice,
      }),
    })
      .then((responce) => responce.json())
      .then((optional) => {
        dispatch({ type: 'admin/addoptional/fulfilled', payload: optional });
      })
      .catch((error) => {
        dispatch({
          type: 'admin/addoptional/rejected',
          error: error.toString(),
        });
      });
  };
}

export function fetchBookings() {
  return function (dispatch) {
    dispatch({ type: 'admin/fetchbookings/pending' });
    fetch('http://localhost:3030/admin/bookings')
      .then((responce) => responce.json())
      .then((bookings) => {
        dispatch({ type: 'admin/fetchbookings/fulfilled', payload: bookings });
      })
      .catch((error) => {
        dispatch({
          type: 'admin/fetchbookings/rejected',
          error: error.toString(),
        });
      });
  };
}

export function editTourGallery(id, gallery) {
  return function (dispatch) {
    console.log(id);
    console.log(gallery);
    dispatch({ type: 'admin/editgallery/pending' });
    const data = new FormData();
    for (let i = 0; i < gallery.length; i++) {
      data.append('gallery', gallery[i]);
    }
    fetch(`http://localhost:3030/admin/tours/gallery/${id}`, {
      method: 'PATCH',
      /* headers: {
        'Content-Type': 'multipart/form-data',
      }, */
      body: data,
    })
      .then((responce) => responce.json())
      .then((tour) => {
        dispatch({ type: 'admin/editgallery/fulfilled', payload: tour });
      })
      .catch((error) => {
        dispatch({
          type: 'admin/editgallery/rejected',
          error: error.toString(),
        });
      });
  };
}

//////// ************ В архив ************ //////// {*}

export function clearArchive(id) {
  return function (dispatch) {
    dispatch({ type: 'admin/cleararchive/pending' });
    fetch(`http://localhost:3030/bookings/archive/${id}`, {
      method: 'DELETE',
    })
      .then((responce) => responce.json())
      .then((booking) => {
        dispatch({ type: 'admin/cleararchive/fulfilled', payload: booking });
      })
      .catch((error) => {
        dispatch({
          type: 'admin/cleararchive/rejected',
          error: error.toString(),
        });
      });
  };
}
