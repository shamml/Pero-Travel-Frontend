import React from 'react';
import styles from './styles.module.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useSelector } from 'react-redux';

const CalendarPage = () => {
  const booking = useSelector((state) => state.tours.booking);

  const dateValue: Date = new Date(booking);

  return (
    <div className={styles.calendar}>
      <CalendarComponent value={dateValue} />
    </div>
  );
};

export default CalendarPage;
