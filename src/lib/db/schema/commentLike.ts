import { pgTable, serial } from "drizzle-orm/pg-core";
import { User, Comment } from ".";

export const CommentLike = pgTable("CommentLike", {
    userId: serial("user_id")
        .notNull()
        .references(() => User.id),
    commentId: serial("comment_id")
        .notNull()
        .references(() => Comment.id),
});
