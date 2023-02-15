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
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "redux/cart/cartReducer";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  ///////////////////////////////// cart maniputlate /////////////////////////////////////
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

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
