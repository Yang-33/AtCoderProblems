import React from "react";
import { Row } from "reactstrap";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";
import { formatMoment, parseSecond } from "../../utils/DateUtil";

const ClimbingLineChart = (props: {
  climbingData: { dateSecond: number; count: number }[];
}) => (
  <Row className="my-3">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={props.climbingData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="dateSecond"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickFormatter={(dateSecond: number) =>
            formatMoment(parseSecond(dateSecond))
          }
        />
        <YAxis />
        <Tooltip
          labelFormatter={(dateSecond: any) =>
            formatMoment(parseSecond(dateSecond))
          }
        />
        <Line dataKey="count" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </Row>
);
export default ClimbingLineChart;
