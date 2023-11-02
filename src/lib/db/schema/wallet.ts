import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Wallet = pgTable("wallet", {
    id: serial("id").primaryKey(),
    address: varchar("address", { length: 42 }).notNull(),
    balance: varchar("balance", { length: 64 }).notNull(),
    name: varchar("name", { length: 50 }),
    image: text("image"),
});
