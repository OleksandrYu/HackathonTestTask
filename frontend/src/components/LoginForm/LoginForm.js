import Input from "../../ui/Input";
import Button from "../../ui/Button";

import { Form, Link } from "react-router-dom";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Form className={classes.form} method="post">
      <Input placeholder="Email" name="email" />
      <Input placeholder="login" name="login" />
      <Input placeholder="Password" name="password" />
      <div className={classes.actions}>
        <Link to="/registration">
          <Button>Sign up</Button>
        </Link>
        <Button type="submit">Login</Button>
      </div>
    </Form>
  );
};

export default LoginForm;
