import { useLoaderData } from "react-router-dom";

import SingleOperationsChart from "./Charts/SingleOperationsChart";
import DiffernceOperationsChart from "./Charts/DifferenceOperationsChart";

import classes from "./AnalyticsResources.module.css";
import GoalOperationsChart from "./Charts/GoalOperationsChart";

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

  //додати зівпадіння за ціллю(тут хз)
  // const dataForRadarChart = inDaysOperations.map((iDO) => ({
  //   goal: iDO.operations.map((operation) => {operation.goal}),
  //   amount: iDO.operations.reduce((accum, operation) => {
  //     if(operation.amount > 0){
  //       return accum + +operation.amount;
  //     }
  //     return accum
  //   }, 0)
  // }));

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

  //  <GoalOperationsChart data = {dataForRadarChart} strokeColor="#8884d8" color ="#8884d8"></GoalOperationsChart>
  //вставити в ретурн, коли будуть дані для витрат за категорією
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