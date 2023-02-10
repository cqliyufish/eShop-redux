import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import React, { useContext } from "react";

import { CartContext } from "context/cart.context";

export default function CartIcon() {
  const { setCartOpen, cartCount } = useContext(CartContext);
  return (
    <Badge badgeContent={cartCount} color="primary">
      <ShoppingCartOutlinedIcon onClick={() => setCartOpen((prev) => !prev)} />
    </Badge>
  );
}
