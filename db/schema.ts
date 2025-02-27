import {
  pgTable,
  uuid,
  varchar,
  unique,
  integer,
  text,
  date,
  numeric,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";
import { table } from "console";

export const vendors = pgTable("vendors", {
  id: uuid("id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  image_url: varchar("image_url", { length: 255 }).notNull(),
});

export const expenses = pgTable(
  "expenses",
  {
    month: varchar("month", { length: 4 }).notNull(),
    expense: integer("expense").notNull(),
  },
  (table) => {
    return {
      expense_month_key: unique("expense_month_key").on(table.month),
    };
  }
);

export const users = pgTable(
  "users",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`uuid_generate_v4()`)
      .notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
  },
  (table) => {
    return {
      users_email_key: unique("users_email_key").on(table.email),
    };
  }
);

export const receipts = pgTable("receipts", {
  id: uuid("id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`)
    .notNull(),
  vendor_id: uuid("vendor_id")
    .references(() => vendors.id, { onDelete: "cascade" })
    .notNull(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  date: date("date").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
});
