import { Link } from "react-router-dom";

import classes from "./OperationsResources.module.css";

const OperationsResources = () => {
  return (
    <div className={classes["container"]}>
      <Link to="single">
        <h2>Single Operations</h2>
        <div className={classes["description"]}>
          <div>
            <p>Some description...</p>
          </div>
        </div>
      </Link>
      <Link>
        <h2>Longterm Operations</h2>
        <div className={classes["description"]}>
          <div>
            <p>Some description...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OperationsResources;
