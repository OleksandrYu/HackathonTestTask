import { Link } from "react-router-dom";

import Card from "../../ui/Card";

import classes from "./OperationItem.module.css";

const OperationItem = ({ operation }) => {
  return (
    <li className={classes.item}>
      <Link to={`${operation.id}`} className={classes["operation-link"]}>
        <Card className={classes["operation-container"]}>
          <div>
            <h2 className={classes["operation-title"]}>{operation.title}</h2>
            <p className={classes["operation-date"]}>{operation.date}</p>
          </div>
          <span>{operation.amount}</span>
        </Card>
      </Link>
    </li>
  );
};

export default OperationItem;
