import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import * as schema from "@/db/schema";

export async function GET() {
  try {
    const users = await db.select().from(schema.users);
    const vendors = await db.select().from(schema.vendors);
    const receipts = await db.select().from(schema.receipts);
    const expenses = await db.select().from(schema.expenses);

    return NextResponse.json({
      success: true,
      data: {
        users,
        vendors,
        receipts,
        expenses,
      },
    });
  } catch (error) {
    console.error("Database Query Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error), // Ensures a proper error message
        fullError: error, // Logs full error object for debugging
      },
      { status: 500 }
    );
  }
}
