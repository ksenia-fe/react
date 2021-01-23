import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time}) => {
    const amountFormat = new Intl.NumberFormat('en-GB').format(amount);
    const formattedTime = moment(time).format('HH:mm');
    const date = moment(time).format('DD MMM')

    return (
        <li className="transaction">
            <span className="transaction__date">{date}</span>
            <span className="transaction__time">{formattedTime}</span>
            <span className="transaction__assets">{`${from} → ${to}`}</span>
            <span className="transaction__rate">{rate}</span>
            <span className="transaction__amount">{amountFormat}</span>
        </li>
    )
}

export default Transaction;