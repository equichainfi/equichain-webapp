import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { Post, User } from ".";

export const Comment = pgTable("Comment", {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    createdAt: timestamp("created_at").notNull(),
    // author: User.object().notNull(),
    authorId: serial("author_id")
        .references(() => User.id)
        .notNull(),
    // post: Post.object().notNull(),
    postId: serial("post_id")
        .references(() => Post.id)
        .notNull(),

    replyToId: text("reply_to_id"),
    // replyTo: Comment.object().nullable(),
    // replies: Comment.array().notNull(),

    // likes: CommentLike.array().notNull(),
    commentId: serial("comment_id"),
});
