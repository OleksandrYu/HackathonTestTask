import { NavLink, useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Button from "../../ui/Button";

const MainNavigation = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={classes["main-header"]}>
      <nav className={classes["main-nav"]}>
        <ul>
          <li className={classes["main-nav-li"]}>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? `${classes.link} ${classes.active}`
                  : classes.link;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li className={classes["main-nav-li"]}>
            <NavLink
              to="/operations"
              className={({ isActive }) => {
                return isActive
                  ? `${classes.link} ${classes.active}`
                  : classes.link;
              }}
              end
            >
              Operations
            </NavLink>
          </li>
          <li className={classes["main-nav-li"]}>
            <NavLink
              to="/analytics"
              className={({ isActive }) => {
                return isActive
                  ? `${classes.link} ${classes.active}`
                  : classes.link;
              }}
              end
            >
              Analytics
            </NavLink>
          </li>
          <li className={classes["main-nav-li"]}>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? `${classes.link} ${classes.active}`
                  : classes.link;
              }}
              end
            >
              About
            </NavLink>
          </li>
          <li className={classes["main-nav-li"]}>
            <NavLink
              to="/user"
              className={({ isActive }) => {
                return isActive
                  ? `${classes.link} ${classes.active}`
                  : classes.link;
              }}
              end
            >
              User
            </NavLink>
          </li>
        </ul>
        <Button onClick={logoutHandler}>Log out</Button>
      </nav>
    </header>
  );
};

export default MainNavigation;
