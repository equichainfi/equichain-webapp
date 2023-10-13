import { pgTable } from "drizzle-orm/pg-core";
import { Comment, User } from ".";

export const CommentLike = pgTable("CommentLike", {
    user: User.object().notNull(),
    userId: User.id.notNull(),
    comment: Comment.object().notNull(),
    commentId: Comment.id.notNull(),
});
