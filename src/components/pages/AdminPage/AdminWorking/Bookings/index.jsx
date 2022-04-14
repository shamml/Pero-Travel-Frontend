import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, fetchTours } from '../../../../../redux/features/admin';
import styles from './styles.module.css';
import { fetchAllUser } from '../../../../../redux/features/user';

const Bookings = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.admin.tours);
  const bookings = useSelector((state) => state.admin.bookings);
  const users = useSelector((state) => state.user.users);
  console.log(tours)
  console.log(users)

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  if (!bookings.length) {
    return (
      <div>Забронированных туров нет</div>
    )
  }

  return (
    <div className={styles.bookingsPage}>
      {bookings.map((booking) => {
        return (
          <div>
            {users.map((user) => {
              if (booking.user === user._id) {
                return (
                  <div className={styles.bookingsWrapper}>
                    <h3>{user.firstName} {user.lastName} {user.age} лет</h3>
                    {tours.map((tour) => {
                      if (booking.tour === tour._id) {
                        return <div>{tour.title} ({tour.typeTour})</div>;
                      }
                    })}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Bookings;
