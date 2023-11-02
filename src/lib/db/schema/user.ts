import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { Account } from "./account";

export const User = pgTable("user", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 32 }).notNull(),
    lastName: varchar("last_name", { length: 64 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    emailVerified: date("email_verified").notNull(),

    username: varchar("username", { length: 64 }).notNull().unique(),
    image: varchar("image", { length: 256 }).notNull(),

    accounts: serial("accounts").references(() => Account.id),
});
