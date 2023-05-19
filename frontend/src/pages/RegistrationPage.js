import { redirect } from "react-router-dom";

import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <>
      <h1>Registartion page</h1>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;

export async function action({ request }) {
  const data = await request.formData();
  const user = {
    name: data.get("name"),
    login: data.get("login"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:3001/api/register", {
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
