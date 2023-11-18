import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { User } from ".";

export const Account = pgTable("account", {
    id: serial("id").primaryKey(),
    user_id: serial("user_id")
        .references(() => User.id)
        .notNull(),
    verified: boolean("verified").notNull().default(false),
    username: varchar("username", { length: 64 }).notNull().unique(),
    slug: varchar("slug", { length: 64 }),
    followers: integer("followers").notNull().default(0),

    provider: text("provider").notNull(),
    provider_account_id: text("provider_account_id").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
    last_sign_in_at: timestamp("last_sign_in_at").notNull(),
});
