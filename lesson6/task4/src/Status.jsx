import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = ({isOnline}) => {
    return (
        isOnline === false ? <Offline/> : <Online/>
    )
}

export default Status;