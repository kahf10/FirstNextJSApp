"use client";

import {
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ExpenseChart({
  expenseForMonth,
}: {
  expenseForMonth: { month: string; expense: number }[];
}) {
  if (!expenseForMonth || expenseForMonth.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={expenseForMonth}>
        <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={true} />
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={true}
          tickFormatter={(value: number) => `$${value}`}
        />
        <Bar
          dataKey="expense"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
          minPointSize={4}
        />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
