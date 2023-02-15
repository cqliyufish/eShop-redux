import { useEffect } from "react";

import CheckoutItem from "components/checkoutItem/CheckoutItem";
import { Container, Total, Block, Header } from "./checkout.style";
import {
  selectCartItems,
  selectIsCartOpen,
  selectCartTotal,
} from "redux/cart/cartSlector";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "redux/cart/cartReducer";
const Checkout = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  // const setCartOpen = useSelector(selectIsCartOpen);

  useEffect(() => {
    dispatch(setIsCartOpen(false));
  }, []);
  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantity</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </Container>
  );
};

export default Checkout;
