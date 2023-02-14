import React from "react";
import Button from "components/button/Button";
import { Container, Price, Name, Footer } from "./productCard.style";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "redux/cart/cartAction";
import { selectCartItems } from "redux/cart/cartSlector";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </Container>
  );
}
