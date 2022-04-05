import React, { useEffect } from 'react';
import HeaderTours from './HeaderTours';
import DescriptionTours from './DescriptionTours';
import CalendarTravel from './CalendarTravel';
import BookingTour from './BookingTour';
import Gallery from './Gallery/Gallery';
import ReviewsTour from './ReviewsTour';
import AdditionalExpenses from './AdditionalExpenses';
import RouteDescription from './RouteDescription';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchTours } from '../../../redux/features/tours'

const Tours = () => {
  
  const dispatch = useDispatch()

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTours())
  }, [dispatch])

  const tour = useSelector((state) =>
    state.tours.tours.filter((tour) => {
      if (!id) return true
      return tour._id === id
    }),
  );

  return (
    <>
      {tour.map(item => {
        return (
          <div>
            <HeaderTours tour={item}/>
            <DescriptionTours tour={item} />
            <CalendarTravel />
            <RouteDescription />
            <AdditionalExpenses />
            <Gallery />
            <ReviewsTour />
            <BookingTour />
          </div>
        )
      })}
    </>
  );
};

export default Tours;
