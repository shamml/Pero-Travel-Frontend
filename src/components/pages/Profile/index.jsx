import React from 'react';
import CardBooking from './CardBooking';
import TestProfile from './TestProfile';

const Profile = () => {
  return (
    <div className="row" style={{ width: '1300px',margin: '150px auto' }}>
      <TestProfile />
      <CardBooking />
    </div>
  );
};

export default Profile;
