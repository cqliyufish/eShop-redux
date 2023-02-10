import LoginForm from "components/loginForm/LoginForm";
import RegisterForm from "components/registerForm/RegisterForm";
import React from "react";
import { Container } from "./authentication.style";
export default function Authentication() {
  return (
    <Container>
      <LoginForm />
      <RegisterForm />
    </Container>
  );
}
