import React from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const Clock = (props) => {
    const time = getTimeWithOffset(props.offset);
    return(
        <div className="clock">
            <div className="clock__location">{props.location}</div>
            <div className="clock__time">{`${moment(time).format('h:mm:ss A')}`}</div>
        </div>
    )
}

export default Clock