import { useContext, useEffect } from "react";

import { CartContext } from "context/cart.context";

import CheckoutItem from "components/checkoutItem/CheckoutItem";
import { Container, Total, Block, Header } from "./checkout.style";

const Checkout = () => {
  const { cartItems, cartTotal, setCartOpen } = useContext(CartContext);
  useEffect(() => {
    setCartOpen(false);
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
