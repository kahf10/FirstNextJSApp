import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const sql = postgres(process.env.POSTGRES_URL!);

const db = drizzle(sql, {
  schema,
});

export default db;
