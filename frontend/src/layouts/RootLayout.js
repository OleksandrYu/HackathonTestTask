import { Outlet, redirect, useNavigate } from "react-router-dom";

import MainNavigation from "../components/MainNavigation/MainNavigation";
import getToken from "../util/GetToken";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes["main-content"]}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

export function loader() {
  const token = getToken();
  if (!token) {
    console.log(".........");
    return redirect("/registration");
  }
  return null;
}
