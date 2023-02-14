import React, { useContext } from "react";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  MenuItem,
  LinkTo,
} from "./navigation.style";
import { Outlet } from "react-router-dom";
import { UserContext } from "context/user.context";
import { signOutUser } from "utils/firebase/auth";
import CartIcon from "components/cartIcon/CartIcon";
import CartDropdown from "components/cartDropdown/CartDropdown";

import { selectCurrentUser } from "redux/user/userSlector";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "redux/cart/cartSlector";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
