import React, { useEffect, useState } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const ConnectionStatus = () => {
  const [isOnline, setStatus] = useState(true);

  useEffect =
    (() => {
      offlineStatus = () => setStatus(false);

      window.addEventListener('ofline', offlineStatus);

      return window.removeEventListener('offline', offlineStatus);
    },
    []);

  return isOnline ? <Online /> : <Offline />;
};

export default ConnectionStatus;
