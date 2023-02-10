import React, { useContext } from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  SearchContainer,
  Language,
  Input,
  Logo,
  MenuItem,
  Search,
  LinkTo,
} from "./navigation.style";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Outlet } from "react-router-dom";
import { UserContext } from "context/user.context";
import { signOutUser } from "utils/firebase/auth";
import CartIcon from "components/cartIcon/CartIcon";
import CartDropdown from "components/cartDropdown/CartDropdown";
import { CartContext } from "context/cart.context";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  ///////////////////////////////////////////////////////////
  return (
    <Container>
      <Wrapper>
        <Left>
          <LinkTo to="/">
            <Logo>BeeShop.</Logo>
          </LinkTo>
        </Left>
        <Right>
          <MenuItem>
            <LinkTo to="/shop">
              <MenuItem>SHOP</MenuItem>
            </LinkTo>
          </MenuItem>
          {currentUser ? (
            <MenuItem onClick={signOutUser}>SIGN OUT</MenuItem>
          ) : (
            <LinkTo to="/auth">
              <MenuItem>SIGN IN</MenuItem>
            </LinkTo>
          )}

          <MenuItem>
            <CartIcon />
          </MenuItem>
        </Right>
        {isCartOpen && <CartDropdown />}
      </Wrapper>
      <Outlet />
    </Container>
  );
}
