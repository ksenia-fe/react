import React from 'react';

const UserForm = ({ userData, onChangeHandler }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default UserForm;
