import React from "react";
import { Container, Label, Input } from "./formInput.style";
export default function FormInput({ label, otherProps }) {
  return (
    <Container>
      <Input {...otherProps} />
      {label && <Label shrink={otherProps.value.length}>{label}</Label>}
    </Container>
  );
}
