import { useContext } from "react";

import { CartContext } from "context/cart.context";

import {
  Container,
  Btn,
  Value,
  Price,
  Name,
  Arrow,
  Quantity,
  ImgContainer,
} from "./checkoutItem.style";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  ///////////////////////////////// cart maniputlate /////////////////////////////////////
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  ///////////////////////////////// UI /////////////////////////////////////
  return (
    <Container>
      <ImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImgContainer>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price> {price}</Price>
      <Btn onClick={clearItemHandler}>&#10005;</Btn>
    </Container>
  );
};

export default CheckoutItem;
