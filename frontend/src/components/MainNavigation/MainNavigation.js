import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
