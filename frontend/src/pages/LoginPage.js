import LoginForm from "../components/LoginForm/LoginForm";

import { redirect } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h1>Login page</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;

export async function action({ request }) {
  const data = await request.formData();
  const user = {
    login: data.get("login"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  const token = (await response.json()).token;
  localStorage.setItem("token", token);
  return redirect("/");
}
