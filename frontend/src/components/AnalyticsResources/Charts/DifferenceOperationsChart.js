import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DiffernceOperationsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        // width={500}
        // height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" padding="no-gap" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="earning_amount" fill="#82ca9d" />
        <Bar dataKey="spending_amount" fill="#ed476e" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DiffernceOperationsChart;
