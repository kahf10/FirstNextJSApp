import { expenses, receipts, vendors } from "@/db/schema";
import db from "@/db/drizzle";
import { count, sql } from "drizzle-orm";
import { formatCurrency } from "../utils";

export async function fetchCardData() {
  try {
    const receiptCountPromise = db.select({ count: count() }).from(receipts);
    const customerCountPromise = db.select({ count: count() }).from(vendors);
    const receiptStatusPromise = db
      .select({
        paid: sql<number>`COALESCE(SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END), 0)`,
        pending: sql<number>`COALESCE(SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END), 0)`,
      })
      .from(receipts);

    const data = await Promise.all([
      receiptCountPromise,
      customerCountPromise,
      receiptStatusPromise,
    ]);

    const numberOfReceipts = Number(data[0][0].count ?? "0");
    const numberOfVendors = Number(data[1][0].count ?? "0");
    const totalPaidReceipts = formatCurrency(Number(data[2][0].paid ?? "0"));
    const totalPendingReceipts = formatCurrency(
      Number(data[2][0].pending ?? "0")
    );

    return {
      numberOfVendors,
      numberOfReceipts,
      totalPaidReceipts,
      totalPendingReceipts,
    };
  } catch (errorr) {
    console.error("Error fetching card data:", errorr);
    throw new Error("Failed to fetch card data");
  }
}

export async function fetchExpense() {
  try {
    const data = await db.select().from(expenses);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the expenses");
  }
}
