import { Container, Item } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <Item>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </Item>
    </Container>
  );
};

export default CartItem;
