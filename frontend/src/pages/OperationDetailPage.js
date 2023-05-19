import OperationDetail from "../components/OperationDetail/OperationDetail";
import { useLoaderData } from "react-router-dom";
import getToken from "../util/GetToken";

const OperationDetailPage = () => {
  const operation = useLoaderData();

  return (
    <>
      <h1>Operation detail page</h1>
      <OperationDetail operation={operation} />
    </>
  );
};

export default OperationDetailPage;

export const load = async ({ params }) => {
  const operation = await fetch(
    `http://localhost:3001/api/operations/${params.id}`,
    {
      headers: {
        Authorization: "Barer " + getToken(),
        "Content-Type": "application/json",
      },
    }
  ).then((data) => {
    console.log(data);
    return data.json();
  });

  return operation;
};
