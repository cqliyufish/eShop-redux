import React from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

const BtnObj = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

const getButton = (buttonType = "base") => BtnObj[buttonType];

// buttonType:google
export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
