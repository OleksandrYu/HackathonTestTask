import React, { useState } from "react";
import { Link, redirect, Form } from "react-router-dom";

import classes from "./RegistrationForm.module.css";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const formSubmitHandler = async (event) => {
  //   event.preventDefault();

  //   const user = {
  //     email: email,
  //     login: login,
  //     password: password,
  //     name: name,
  //   };

  //   console.log(user);

  //   const result = await fetch(`http://localhost:3001/api/register`, {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((data) => data.json())
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   localStorage.setItem("token", result.token);
  //   return redirect("/");
  // };

  return (
    <Form className={classes.form} method="post">
      <Input
        placeholder="Name"
        onChange={(value) => setName(value)}
        name="name"
      />
      <Input
        placeholder="Email"
        onChange={(value) => setEmail(value)}
        name="email"
      />
      <Input
        placeholder="login"
        onChange={(value) => setLogin(value)}
        name="login"
      />
      <Input
        placeholder="Password"
        onChange={(value) => setPassword(value)}
        name="password"
      />
      <div className={classes.actions}>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Button type="submit">Register</Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
