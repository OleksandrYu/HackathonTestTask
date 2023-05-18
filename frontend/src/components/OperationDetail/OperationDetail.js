import Card from "../../ui/Card";

const OperationDetail = ({ operation }) => {
  return (
    <Card>
      <h1>{operation.title}</h1>
      <p>{operation.amount}</p>
      <p>{operation.date}</p>
      <p>{operation.description}</p>
    </Card>
  );
};

export default OperationDetail;
