import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const Account = pgTable("Account", {
    id: serial("id").primaryKey(),
    // userId: serial("user_id")
    //     .references(() => User.id)
    //     .notNull()
    //     .unique(),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: integer("expires_at"),
    tokenType: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    sessionState: text("session_state"),

    // user: User.object().notNull(),
});
