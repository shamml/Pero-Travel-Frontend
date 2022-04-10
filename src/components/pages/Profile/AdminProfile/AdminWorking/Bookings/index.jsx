import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../../../../../redux/features/admin';
import styles from './styles.module.css';

const Bookings = () => {
  const dispatch = useDispatch();

  const bookings = useSelector((state) => state.admin.bookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <div className={styles.bookingsPage}>Здесь будут забронированные туры</div>
  );
};

export default Bookings;
