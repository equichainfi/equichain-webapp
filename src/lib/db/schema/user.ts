import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { Wallet } from ".";

export const User = pgTable("User", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    emailVerified: date("email_verified").notNull(),

    username: varchar("username", { length: 64 }).notNull().unique(),
    image: varchar("image", { length: 256 }).notNull(),

    walletsAddress: varchar("wallets_address", { length: 42 })
        .references(() => Wallet.address)
        .array()
        .notNull(),
});
