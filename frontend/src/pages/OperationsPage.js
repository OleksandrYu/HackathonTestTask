import OperationsList from "../components/Operations/OperationsList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

const OperationsPage = () => {
  const operations = useSelector((store) => store.operations);

  return (
    <>
      <h1>Operations page</h1>
      <Link to="new">New</Link>
      <OperationsList operations={operations} />
    </>
  );
};

export default OperationsPage;
