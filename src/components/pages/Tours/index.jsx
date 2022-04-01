import React from 'react';
import HeaderTours from './HeaderTours';
import DescriptionTours from './DescriptionTours'
import CalendarTravel from './CalendarTravel'
import BookingTour from './BookingTour'
import Gallery from './Gallery/Gallery'

const Tours = () => {
  return (
    <div>
      <HeaderTours />
      <DescriptionTours/>
      <CalendarTravel/>
      <Gallery/>
      <BookingTour/>
    </div>
  );
};

export default Tours;
