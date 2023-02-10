import React from "react";
import Button from "components/button/Button";
import { Container, Price, Name, Footer } from "./productCard.style";
import { CartContext } from "context/cart.context";
import { useContext } from "react";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to card
      </Button>
    </Container>
  );
}
