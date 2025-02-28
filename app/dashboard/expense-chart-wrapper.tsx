import { roboto } from "@/components/shared/fonts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ExpenseChart from "./expense-chart";
import { fetchExpense } from "@/lib/actions/receipt.actions";

export default async function ExpenseChartWrapper() {
  const expense = await fetchExpense();
  return (
    <Card className="w-full md:col-span-4">
      <CardHeader>
        <h2 className={`${roboto.className} mb-4 text-xl md:text-2xl`}>
          Recent Expenses
        </h2>
      </CardHeader>

      <CardContent className="p-0">
        <ExpenseChart expenseForMonth={expense} />
      </CardContent>
    </Card>
  );
}
