import React, { useState, useEffect } from "react";

import Card from "../../ui/Card";

import classes from "./OperationsNavigationPanel.module.css";

const OperationsNavigationPanel = ({ changeFilter }) => {
  const [titleSearch, setTitleSearch] = useState("");

  useEffect(() => {
    changeFilter(() => {
      return (options) => {
        return options.filter((option) => option.title.includes(titleSearch));
      };
    });
  }, [titleSearch]);

  return (
    <Card className={classes.panel}>
      <h2>Search panel</h2>
      <input onChange={(e) => setTitleSearch(e.target.value)}></input>
    </Card>
  );
};

export default OperationsNavigationPanel;
