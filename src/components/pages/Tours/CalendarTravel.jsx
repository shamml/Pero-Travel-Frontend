import React from 'react'
import styles from './styles.module.css'
import pic2 from '../../../assets/headerTours/изобр2.svg'
import cal from '../../../assets/headerTours/cal.png'
import CalendarPage from './CalendarPage'

const CalendarTravel = () => {
  return (
    <div className={styles.calendar}>
      <div className={styles.calendarBlock}>
        <div className={styles.calendarImage}>
          <img src={pic2} alt="#" />
        </div>
        <div className={styles.calendarTrip}>
          <div className={styles.getCalendarName}>
            <img src={cal} alt="#" />
          </div>
          <div className={styles.mainCalendar}>
            <CalendarPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarTravel