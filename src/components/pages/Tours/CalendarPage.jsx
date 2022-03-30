import React from 'react';
import styles from './styles.module.css'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

const CalendarPage = () => {
  const number = 28

  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), number)

  return (
    <div className={styles.calendar}>
      <CalendarComponent value={dateValue}></CalendarComponent>
    </div>
  );
};

export default CalendarPage;