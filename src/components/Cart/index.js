import React from 'react';
import { CartWrapper } from './styles';
import { FaShoppingBag } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export function Cart() {
  const { checkout } = React.useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }
  return (
    <CartWrapper>
      <FaShoppingBag size="1.2em" />
      <div>
        {totalQuantity} ${checkout?.totalPrice || '0.00'}
      </div>
    </CartWrapper>
  );
}
