import React from 'react';
import HeaderTours from './HeaderTours';
import DescriptionTours from './DescriptionTours'
import CalendarTravel from './CalendarTravel'
import BookingTour from './BookingTour'
import Gallery from './Gallery/Gallery'
import ReviewsTour from './ReviewsTour'
import AdditionalExpenses from './AdditionalExpenses'
import RouteDescription from './RouteDescription'

const Tours = () => {
  return (
    <div>
      <HeaderTours />
      <DescriptionTours/>
      <CalendarTravel/>
      <RouteDescription/>
      <AdditionalExpenses/>
      <Gallery/>
      <ReviewsTour/>
      <BookingTour/>
    </div>
  );
};

export default Tours;
