import db from "@/db/drizzle";
import * as schema from "@/db/schema";

async function testDatabase() {
  try {
    const users = await db.select().from(schema.users);
    const vendors = await db.select().from(schema.vendors);
    const receipts = await db.select().from(schema.receipts);
    const expenses = await db.select().from(schema.expenses);

    console.log("✅ Users Data:", users);
    console.log("✅ Vendors Data:", vendors);
    console.log("✅ Receipts Data:", receipts);
    console.log("✅ Expenses Data:", expenses);

    if (
      !users.length ||
      !vendors.length ||
      !receipts.length ||
      !expenses.length
    ) {
      console.error("❌ Some tables are empty. Check your seed script.");
    } else {
      console.log("🎉 All tables have data!");
    }
  } catch (error) {
    console.error("❌ Error fetching data:", error);
  }
}

testDatabase();
