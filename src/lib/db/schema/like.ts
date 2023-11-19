import { pgTable, text } from "drizzle-orm/pg-core";
import { Post, Account } from ".";

export const Like = pgTable("like", {
    accountId: text("account_id")
        .notNull()
        .references(() => Account.id),
    postId: text("post_id")
        .notNull()
        .references(() => Post.id),
});
