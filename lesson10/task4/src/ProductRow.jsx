import React from 'react';

const ProductRow = ({ product }) => {
  const { stocked, name, price } = product;
  const name1 = stocked ? name : <span style={{ color: 'red' }}>{name}</span>;

  return (
    <tr>
      <td>{name1}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
