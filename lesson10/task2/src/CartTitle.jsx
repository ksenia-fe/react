import React from 'react';

const UserMenu = ({ userName, count }) => {
  return (
    <div className="cart-title">
      {userName}, you added {count} items
    </div>
  );
};

export default UserMenu;
