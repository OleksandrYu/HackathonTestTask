import OperationItem from "./OperationItem";

import classes from "./InDayOperations.module.css";

const InDayOperations = ({ iDO }) => {
  return (
    <li className={classes["inday-list"]}>
      <h2>{iDO.day}</h2>
      <ul>
        {iDO.operations.map((op) => (
          <OperationItem key={op.id} operation={op} />
        ))}
      </ul>
    </li>
  );
};

export default InDayOperations;
