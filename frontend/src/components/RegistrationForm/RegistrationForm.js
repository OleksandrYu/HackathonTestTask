import React, { useState } from "react";

import classes from "./RegistrationForm.module.css";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (event) => {
    event.target.preventDefault();

    const user = {
      email: email,
      nickname: nickname,
      password: password,
    };

    const result = await fetch(`http://${process.env.CONNECTION_HOST}:${process.env.PORT}/api/registration`, {
      method: "POST",
      body: JSON.stringify(user),
    });
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input placeholder="Email" onChange={(value) => setEmail(value)} />
      <Input placeholder="Nickname" onChange={(value) => setNickname(value)} />
      <Input placeholder="Password" onChange={(value) => setPassword(value)} />
      <div className={classes.actions}>
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
