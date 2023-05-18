import InDayOperations from "./InDayOperations";

import classes from "./OperationsList.module.css";

const OperationsList = ({ inDaysOperations }) => {
  // const days = operations
  //   .map((op) => op.date)
  //   .reduce((accum, date) => {
  //     const temp = accum;
  //     if (!temp.includes(date)) {
  //       temp.push(date);
  //     }
  //     return temp;
  //   }, []);

  // const inDaysOperations = [];
  // for (var day of days) {
  //   inDaysOperations.push({
  //     day: day,
  //     operations: operations.filter((op) => op.date == day),
  //   });
  // }

  return (
    <div>
      <ul className={classes["operations-list"]}>
        {inDaysOperations.map((iDO) => (
          <InDayOperations key={iDO.day} iDO={iDO} />
        ))}
      </ul>
    </div>
  );
};

export default OperationsList;
