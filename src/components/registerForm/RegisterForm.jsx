import React, { useState, useEffect, useContext } from "react";

import FormInput from "components/formInput/FormInput";
import Button from "components/button/Button";

import { createAuthUserWithEmailAndPassword } from "utils/firebase/auth";
import { createUserDocumentFromAuth } from "utils/firebase/database";
import { selectCurrentUser } from "redux/user/userSlector";
import { useSelector } from "react-redux";
import { Container, Title, Span, Form } from "./registerForm.style";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const nav = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
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
      <Title>Don't have an account?</Title>
      <Span>Sign up with your email and password</Span>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          otherProps={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

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

        <FormInput
          label="Confirm Password"
          otherProps={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
