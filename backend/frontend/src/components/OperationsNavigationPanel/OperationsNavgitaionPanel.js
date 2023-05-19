import React, { useState, useEffect } from "react";

import Card from "../../ui/Card";
import Input from "../../ui/Input";

import classes from "./OperationsNavigationPanel.module.css";

const [minNumber, maxNumber] = [-1000000000, 1000000000];

const OperationsNavigationPanel = ({ changeFilter }) => {
  const [titleSearch, setTitleSearch] = useState("");
  const [[minBound, maxBound], setAmountSearchBounds] = useState([
    minNumber,
    maxNumber,
  ]);
  const [[minDate, maxDate], setDateSearchBounds] = useState([
    new Date("0000-01-01"),
    new Date(),
  ]);

  useEffect(() => {
    changeFilter(() => {
      console.log(minDate, maxDate);
      return (iDO) => {
        return iDO
          .map((dayOp) => ({
            day: dayOp.day,
            operations: dayOp.operations.filter(
              (op) =>
                op.title.includes(titleSearch) &&
                op.amount >= minBound &&
                op.amount <= maxBound &&
                new Date(op.date) >= minDate &&
                new Date(op.date) <= maxDate
            ),
          }))
          .filter((iDO) => iDO.operations.length > 0);
      };
    });
  }, [titleSearch, minBound, maxBound, minDate, maxDate]);

  return (
    <div className={classes.panel}>
      <Input placeholder="Title" onChange={(value) => setTitleSearch(value)} />
      <div className={classes["amount-container"]}>
        <Input
          placeholder="Amount from"
          onChange={(value) =>
            setAmountSearchBounds((prev) => [
              +(value == "" ? minBound : value),
              prev[1],
            ])
          }
        />
        <Input
          placeholder="Amount to"
          onChange={(value) =>
            setAmountSearchBounds((prev) => [
              prev[0],
              +(value == "" ? maxBound : value),
            ])
          }
        />
      </div>
      <div className={classes["date-container"]}>
        <label>Date from</label>
        <label>Date to</label>
        <input
          type="date"
          onChange={(event) =>
            setDateSearchBounds((prev) => [
              new Date(event.target.value),
              prev[1],
            ])
          }
        ></input>
        <input
          type="date"
          onChange={(event) =>
            setDateSearchBounds((prev) => [
              prev[0],
              new Date(event.target.value),
            ])
          }
        ></input>
      </div>
    </div>
  );
};

export default OperationsNavigationPanel;
