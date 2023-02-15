import React from "react";
import Button from "components/button/Button";
import { Container, Price, Name, Footer } from "./productCard.style";

import { useDispatch } from "react-redux";
import { addItemToCart } from "redux/cart/cartReducer";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  ////////////////////////////////////////////////////////////////
  const addProductToCart = () => dispatch(addItemToCart(product));
  ///////////////////////////////// UI ///////////////////////////////
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
