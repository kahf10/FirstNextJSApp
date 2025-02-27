import "@/db/env-config";
import { users, vendors, receipts, expenses } from "@/lib/placeholder-data";
import db from "./drizzle";
import * as schema from "./schema";
import { exit } from "process";

const main = async () => {
  try {
    await db.transaction(async (tx) => {
      await tx.delete(schema.expenses);
      await tx.delete(schema.receipts);
      await tx.delete(schema.vendors);
      await tx.delete(schema.users);

      await tx.insert(schema.users).values(users);
      await tx.insert(schema.vendors).values(vendors);
      await tx.insert(schema.receipts).values(receipts);
      await tx.insert(schema.expenses).values(expenses);
    });

    console.log("Database seeded successfully");
    exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
