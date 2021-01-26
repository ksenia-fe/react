import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map((tran) => (
        <Transaction key={tran.id} {...tran} />
      ))}
    </ul>
  );
};

export default TransactionsList;
