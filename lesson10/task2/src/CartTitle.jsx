import React from 'react';

const UserMenu = ({ userName, userLastName, count }) => {
  return (
    <div className="cart-title">
      {userName} {userLastName}, you added {count} items
    </div>
  );
};

export default UserMenu;
