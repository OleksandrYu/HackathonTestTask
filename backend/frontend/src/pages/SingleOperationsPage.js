import OperationsList from "../components/Operations/OperationsList";
import { Link, useLoaderData } from "react-router-dom";
import OperationsNavigationPanel from "../components/OperationsNavigationPanel/OperationsNavgitaionPanel";
import React, { useEffect, useState } from "react";

import classes from "./OperationsPage.module.css";
import Button from "../ui/Button";
import OperationActions from "../components/OperationsActions/OperationsActions";

// const dummyOperations = [
//   {
//     id: 1,
//     title: "operation 1",
//     date: new Date("2004-03-29"),
//     amount: 23,
//   },
//   {
//     id: 2,
//     title: "operation 2",
//     date: new Date("2014-04-18"),
//     amount: -100,
//   },
//   {
//     id: 3,
//     title: "operation 3",
//     date: new Date("2021-06-17"),
//     amount: 153,
//   },
// ];

const SingleOperationsPage = () => {
  const [inDaysOperations] = useState(useLoaderData());
  const [isFiltersOn, setIsFiltersOn] = useState(false);
  const [filter, setFilter] = useState(() => {
    return (obj) => obj;
  });

  useEffect(() => {
    setFilter(() => {
      return (obj) => obj;
    });
  }, [isFiltersOn]);

  const filteredInDaysOperations = filter(inDaysOperations);

  return (
    <>
      <h1>Operations page</h1>
      <OperationActions
        filtersController={() => setIsFiltersOn((prev) => !prev)}
      />
      {/* <div className={classes["operations-content"]}> */}
      {isFiltersOn && <OperationsNavigationPanel changeFilter={setFilter} />}
      <OperationsList inDaysOperations={filteredInDaysOperations} />
      {/* </div> */}
    </>
  );
};

export default SingleOperationsPage;

export const load = async () => {
  const operations = await fetch("http://localhost:3001/api/operations").then(
    (data) => data.json()
  );
  //console.log(operations);
  return operations;
};
