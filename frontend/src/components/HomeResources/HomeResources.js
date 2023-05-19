import { Link } from "react-router-dom";

import classes from "./HomeResources.module.css";

const HomeResources = () => {
  return (
    <div className={classes["container"]}>
      <Link to="operations/single" className={classes["single-operations"]}>
        <h2>Single Operations</h2>
        <div className={classes["description"]}>
          <div>
            <p>Some description...</p>
          </div>
        </div>
      </Link>
      <Link className={classes["longterm-operations"]}>
        <h2>Longterm Operations</h2>
        <div className={classes["description"]}>
          <div>
            <p>Some description...</p>
          </div>
        </div>
      </Link>
      <Link className={classes["analytics"]}>
        <h2>Analytics</h2>
        <div className={classes["description"]}>
          <div>
            <p>Some description...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeResources;
