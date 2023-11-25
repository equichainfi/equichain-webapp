import { pgTable, text } from "drizzle-orm/pg-core";
import { User, Comment } from ".";

export const CommentLike = pgTable("comment_like", {
    userId: text("user_id")
        .notNull()
        .references(() => User.id),
    commentId: text("comment_id")
        .notNull()
        .references(() => Comment.id),
});
