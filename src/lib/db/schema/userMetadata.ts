import { boolean, pgTable, text } from "drizzle-orm/pg-core";
import { User } from ".";

export const UserMetadata = pgTable("user_metadata", {
    userId: text("user_id")
        .references(() => User.id)
        .notNull(),
    twitter: text("twitter"),
    instagram: text("instagram"),
    facebook: text("facebook"),
    linkedin: text("linkedin"),
    website: text("website"),

    isBanned: boolean("is_banned").notNull().default(false),
    isDisabled: boolean("is_disabled").notNull().default(false),
});
