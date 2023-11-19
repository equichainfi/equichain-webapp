import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { User } from ".";

export const Account = pgTable("account", {
    id: text("id")
        .references(() => User.id)
        .primaryKey(),
    verified: boolean("verified").notNull().default(false),
    username: varchar("username", { length: 64 }).notNull().unique(),
    slug: varchar("slug", { length: 64 }),
    followers: integer("followers").notNull().default(0),

    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: integer("expires_at"),
    tokenType: text("token_type"),
    scope: text("scope"),
    idToken: text("id_token"),
    sessionState: text("session_state"),
    lastSignInAt: timestamp("last_sign_in_at").notNull(),
});
