import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminProfile from './AdminProfile';
import { fetchIdUser } from '../../../redux/features/user';
import UserProfile from './UserProfile';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchIdUser());
  }, [dispatch]);

  const dataUser = useSelector((state) => state.user.data);
  const role = useSelector((state) => state.application.role);

  const tours = useSelector((state) => state.tours.tours[0]);

  if (role === 'admin') {
    return <AdminProfile />;
  }

  return (
    <>
      {dataUser.map((user) => {
        return <UserProfile user={user} key={user._id} tours={tours} />;
      })}
    </>
  );
};

export default Profile;
