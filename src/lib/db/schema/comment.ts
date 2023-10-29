import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { User } from ".";

export const Comment = pgTable("Comment", {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    createdAt: timestamp("created_at").notNull(),
    author: User.references(() => User, "author_id", "id", "author").notNull(),
    authorId: text("author_id").notNull(),
    post: User.references(() => User, "post_id", "id", "post").notNull(),
    postId: text("post_id").notNull(),

    replyToId: text("reply_to_id"),
    replyTo: Comment.references(() => Comment, "reply_to_id", "id", "reply_to"),
    replies: Comment.array().references(
        () => Comment,
        "reply_to_id",
        "id",
        "replies",
    ),

    // likes:
    commentId: text("comment_id"),
});
