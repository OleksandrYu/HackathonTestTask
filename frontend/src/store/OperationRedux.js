import { createStore } from "redux";

const operationsReducer = (state = { operations: [] }, action) => {
  if (action.type == "ADD_OPERATION") {
    const temp = [...state.operations];
    temp.unshift(action.operation);
    return {
      operations: temp,
    };
  }
  return {
    operations: state.operations,
  };
};

const store = createStore(operationsReducer);

export default store;
