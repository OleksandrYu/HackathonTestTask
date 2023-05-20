import UserInfo from "../components/UserInfo/UserInfo";

import { useLoaderData } from "react-router-dom";
import getToken from "../util/GetToken";

const UserPage = () => {
  const { user } = useLoaderData();

  const operations = user.single_operations;
  const spendings = operations
    .filter((op) => op.amount < 0)
    .reduce((accum, op) => accum - op.amount, 0);

  const income = operations
    .filter((op) => op.amount > 0)
    .reduce((accum, op) => accum + op.amount, 0);

  return (
    <>
      <h1>User page</h1>
      <UserInfo
        username={user.login}
        mail={user.email}
        spendings={spendings}
        income={income}
      />
    </>
  );
};

export default UserPage;

export async function loader() {
  const result = await fetch("/api/userinfo", {
    headers: {
      Authorization: "Barer " + getToken(),
    },
  });
  return result;
}
