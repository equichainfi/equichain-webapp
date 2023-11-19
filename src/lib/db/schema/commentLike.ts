import { pgTable, text } from "drizzle-orm/pg-core";
import { Account, Comment } from ".";

export const CommentLike = pgTable("comment_like", {
    accountId: text("account_id")
        .notNull()
        .references(() => Account.id),
    commentId: text("comment_id")
        .notNull()
        .references(() => Comment.id),
});
