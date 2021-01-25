import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">MESSAGES</span>
      {unreadMessages.length > 0 && (
        <span className="mailbox__count">{unreadMessages.length}</span>
      )}
    </div>
  ); // условный рендеринг(тут): срабатывает, если unreadMessages.length === true.если false, то этот блок вообще игнорируется
  // и ничего из этого блока не рендерится
};

export default Mailbox;
