import React, { useState } from "react";

import OperationItem from "./OperationItem";

import classes from "./InDayOperations.module.css";

const InDayOperations = ({ iDO }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li
      className={`${classes["inday-list"]} ${
        isOpened ? classes["active"] : ""
      }`}
      onClick={() => {
        setIsOpened((prev) => !prev);
      }}
    >
      <h2>{iDO.day}</h2>
      <div>
        <ul>
          {iDO.operations.map((op) => (
            <OperationItem key={op.id} operation={op} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default InDayOperations;
