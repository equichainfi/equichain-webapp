import { pgTable, serial } from "drizzle-orm/pg-core";
import { Comment, User } from ".";

export const CommentLike = pgTable("CommentLike", {
    userId: serial("user_id")
        .notNull()
        .references(() => User.id),
    comment: Comment.object().notNull(),
    commentId: Comment.id.notNull(),
});
