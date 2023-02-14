import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import React from "react";

import { setIsCartOpen } from "redux/cart/cartAction";
import { selectCartCount, selectIsCartOpen } from "redux/cart/cartSlector";
import { useDispatch, useSelector } from "react-redux";

export default function CartIcon() {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <Badge badgeContent={cartCount} color="primary">
      <ShoppingCartOutlinedIcon onClick={toggleIsCartOpen} />
    </Badge>
  );
}
