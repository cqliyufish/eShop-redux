import React, { useEffect, useState } from "react";

import FormInput from "components/formInput/FormInput";
import Button from "components/button/Button";
import { selectCurrentUser } from "redux/user/userSlector";
import { useSelector } from "react-redux";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "utils/firebase/auth";
import { Container, Form, Title, Span, BtnContainer } from "./loginForm.style";
import { useNavigate } from "react-router-dom";
const defaultFormFields = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const currentUser = useSelector(selectCurrentUser);
  const nav = useNavigate();
  ////////////////////////////  input change /////////////////////////////////////

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //////////////////////////// reset input /////////////////////////////////////
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //////////////////////////// google sign in /////////////////////////////////////

  const signInWithGoogle = async () => {
    await signInWithGooglePopup(); //get uid
  };

  //////////////////////////// password sign in /////////////////////////////////////

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  ////////////////////////////  nav to home page after sign in /////////////////////////////////////
  useEffect(() => {
    if (currentUser) {
      nav("/");
    }
  }, [currentUser]);
  ////////////////////////////  UI /////////////////////////////////////

  return (
    <Container>
      <Title>Already have an account?</Title>
      <Span>Sign in with your email and password</Span>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          otherProps={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          otherProps={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <BtnContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </BtnContainer>
      </Form>
    </Container>
  );
}
