import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/button/Button";
import CartItem from "components/cartItem/CartItem";
import { CartContext } from "context/cart.context";
import { EmptyMessage, Container, CartItems } from "./cartDropdown.style";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </Container>
  );
};

export default CartDropdown;
