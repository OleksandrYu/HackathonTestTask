import Input from "../../ui/Input";
import Button from "../../ui/Button";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes.form}>
      <Input placeholder="Email/Nickname" />
      <Input placeholder="Password" />
      <div className={classes.actions}>
        <Button>Log in</Button>
      </div>
    </form>
  );
};

export default LoginForm;
