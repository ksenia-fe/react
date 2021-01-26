import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, onChangeHandler }) => {
  return (
    <div className="column">
      <UserForm userData={userData} onChangeHandler={onChangeHandler} />
    </div>
  );
};

export default Profile;
