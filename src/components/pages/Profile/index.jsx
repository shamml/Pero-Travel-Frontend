import React from 'react';
import UserInfo from './UserInfo';
import BookingInfo from './BookingInfo';

const Profile = () => {
  return (
    <div className="row" style={{ width: '1300px', margin: '150px auto' }}>
      <UserInfo />
      <BookingInfo />
    </div>
  );
};

export default Profile;
