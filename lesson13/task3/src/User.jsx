import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
  // const { userId } = match.params;
  const { userId } = useParams();

  // inp: init state
  // out: array (state value, func to update state)
  const [userData, setUserData] = useState({
    avatar: null,
    location: null,
    name: null,
  });

  // UseEffect
  // inp: func,array
  // out: undef

  // callback inp: none
  // callback out: undef OR func
  useEffect(() => {
    // inp: user id - string
    // out: promise
    fetch(`https://api.github.com/users/${userId}`).then((response) =>
      response.json().then((data) => setUserData(data))
    );

    return;
  }, [userId]);

  const { name, location, avatar_url } = userData;

  if (!name || !location || !avatar_url) {
    return null;
  }

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
