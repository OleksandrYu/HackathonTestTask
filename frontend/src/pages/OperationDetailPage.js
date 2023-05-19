import OperationDetail from "../components/OperationDetail/OperationDetail";
import { useLoaderData } from "react-router-dom";

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
    `/api/operations/${params.id}`
  ).then((data) => data.json());

  return operation;
};
