import OperationItem from "./OperationItem";

import classes from "./OperationsList.module.css";

const OperationsList = ({ operations }) => {
  return (
    <div>
      <ul className={classes["operations-list"]}>
        {operations.map((operation) => (
          <OperationItem key={operation.id} operation={operation} />
        ))}
      </ul>
    </div>
  );
};

export default OperationsList;
