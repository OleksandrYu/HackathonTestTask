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

  useEffect(() => {
    changeFilter(() => {
      return (iDO) => {
        return iDO
          .map((dayOp) => ({
            day: dayOp.day,
            operations: dayOp.operations.filter(
              (op) =>
                op.title.includes(titleSearch) &&
                op.amount >= minBound &&
                op.amount <= maxBound
            ),
          }))
          .filter((iDO) => iDO.operations.length > 0);
      };
    });
  }, [titleSearch, minBound, maxBound]);

  return (
    <div className={classes.panel}>
      <Input placeholder="Title" onChange={(value) => setTitleSearch(value)} />
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
  );
};

export default OperationsNavigationPanel;
