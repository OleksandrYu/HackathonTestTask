import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation/MainNavigation";

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
