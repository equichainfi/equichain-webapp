import {
    boolean,
    pgEnum,
    pgTable,
    text,
    varchar,
    serial,
} from "drizzle-orm/pg-core";

const postEnum = pgEnum("post_status", [
    "pending",
    "active",
    "sold",
    "inactive",
]);

export const post = pgTable("post", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: varchar("slug", { length: 256 }).notNull(),
    description: text("description").notNull(),
    status: postEnum("status").notNull(),
    images: text("images").array().notNull(),

    isVerified: boolean("is_verified").notNull(),
});
