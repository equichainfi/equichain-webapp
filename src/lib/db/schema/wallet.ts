import { pgTable, text } from "drizzle-orm/pg-core";
import { User } from ".";

export const Wallet = pgTable("wallet", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .references(() => User.id)
        .notNull(),
    address: text("address").notNull().unique(),
    walletType: text("wallet_type").notNull().default("metamask"),
});
