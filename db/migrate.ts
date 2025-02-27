import { migrate } from "drizzle-orm/postgres-js/migrator";
import db from "./drizzle";

async function runMigrations() {
  try {
    console.log("🚀 Running migrations...");
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("✅ Migrations applied successfully.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

runMigrations();
