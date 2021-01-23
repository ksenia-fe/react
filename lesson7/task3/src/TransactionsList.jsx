import React from 'react';
import Transaction from './Transaction.jsx';

class TransactionsList extends React.Component {
    render() {
        return(
            <ul className="transactions">
                {this.props.transactions
                    .map(tran => <Transaction key={tran.id} {...tran}/>)
                }
            </ul>
        )
    }
}

export default TransactionsList;