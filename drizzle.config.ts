import "dotenv/config"; // Ensure environment variables are loaded

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL ?? "", // Ensure the DB URL is provided
  },
});
