import { useLoaderData } from "react-router-dom";

import SingleOperationsChart from "./Charts/SingleOperationsChart";
import DiffernceOperationsChart from "./Charts/DifferenceOperationsChart";

import classes from "./AnalyticsResources.module.css";

const AnalyticsResources = () => {
  const inDaysOperations = useLoaderData().reverse();

  const dataForEarningChart = inDaysOperations.map((iDO) => ({
    day: iDO.day,
    amount: iDO.operations.reduce((accum, op) => {
      if (op.amount > 0) {
        return accum + +op.amount;
      }
      return accum;
    }, 0),
  }));

  const dataForSpendingChart = inDaysOperations.map((iDO) => ({
    day: iDO.day,
    amount: iDO.operations.reduce((accum, op) => {
      if (op.amount < 0) {
        return accum - +op.amount;
      }
      return accum;
    }, 0),
  }));

  const dataForChartOfDifference = inDaysOperations.map((iDO) => ({
    day: iDO.day,
    earning_amount: iDO.operations.reduce((accum, op) => {
      if (op.amount > 0) {
        return accum + +op.amount;
      }
      return accum;
    }, 0),
    spending_amount: iDO.operations.reduce((accum, op) => {
      if (op.amount < 0) {
        return accum + +op.amount;
      }
      return accum;
    }, 0),
  }));

  return (
    <>
      <div className={classes.container}>
        <SingleOperationsChart data={dataForEarningChart} color="#82ca9d" />
        <SingleOperationsChart data={dataForSpendingChart} color="#ed476e" />

        <DiffernceOperationsChart data={dataForChartOfDifference} />
      </div>
    </>
  );
};

export default AnalyticsResources;
