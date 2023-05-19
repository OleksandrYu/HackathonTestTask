import Input from "../../ui/Input";
import Button from "../../ui/Button";

import { Form } from "react-router-dom";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Form className={classes.form} method="post">
      <Input placeholder="Email" name="email" />
      <Input placeholder="login" name="login" />
      <Input placeholder="Password" name="password" />
      <div className={classes.actions}>
        <Button type="submit">Register</Button>
      </div>
    </Form>
  );
};

export default LoginForm;
