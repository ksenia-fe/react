import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad',
        price: 799,
      },
    ],
  };
  render() {
    const count = this.state.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
