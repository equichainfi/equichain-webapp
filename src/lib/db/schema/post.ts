import { serial } from "drizzle-orm/mysql-core";
import { pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";

const postEnum = pgEnum("post_status", [
    "pending",
    "active",
    "sold",
    "inactive",
]);

export const post = pgTable("post", {
    // @ts-expect-error ts-migrate(2554)
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: varchar("slug", { length: 256 }).notNull(),
    description: text("description").notNull(),
    status: postEnum("status").notNull(),
    images: text("images").array().notNull(),
});
