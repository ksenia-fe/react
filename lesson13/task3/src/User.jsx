import React, { useState, useEffect } from 'react';

const User = ({ match }) => {
  const { userId } = match.params;
  function fetchUser(userId) {
    return fetch(`https://api.github.com/users/${userId}`).then((response) =>
      response.json().then((data) => setUserData(data))
    );
  }

  const [userData, setUserData] = useState('');

  useEffect(() => {
    fetchUser(userId);
  }, []);

  const { name, location, avatar_url } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};
export default User;
