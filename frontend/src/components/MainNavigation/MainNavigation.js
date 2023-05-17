import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
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
          >
            Operations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
