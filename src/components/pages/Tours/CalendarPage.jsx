import React from 'react';
import styles from './styles.module.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useSelector } from 'react-redux'

const CalendarPage = () => {

  const booking = useSelector(state => state.tours.booking)

  // const number = 28;
  //
  // const dateValue: Date = new Date(
  //   new Date().getFullYear(),
  //   new Date().getMonth(),
  //   number,
  // );

  return (
    <div className={styles.calendar}>
      <CalendarComponent/>
    </div>
  );
};

export default CalendarPage;
