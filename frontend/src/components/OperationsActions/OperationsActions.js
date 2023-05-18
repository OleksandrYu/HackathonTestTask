import { Link } from "react-router-dom";
import Button from "../../ui/Button";

import classes from "./OperationsActions.module.css";

const OperationActions = (props) => {
  return (
    <div className={classes.actions}>
      <Link to="new">
        <Button>New</Button>
      </Link>
      <Button onClick={props.filtersController}>Filters</Button>
    </div>
  );
};

export default OperationActions;
