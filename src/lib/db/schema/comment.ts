import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { User, Post } from ".";

export const Comment = pgTable("comment", {
    id: text("id").primaryKey(),
    text: text("text").notNull(),
    createdAt: timestamp("created_at").notNull(),
    userId: text("user_id")
        .references(() => User.id)
        .notNull(),
    postId: text("post_id")
        .references(() => Post.id)
        .notNull(),

    // replyTo: Comment.references(() => Comment, "reply_to_id", "id", "reply_to"),
    // replies: Comment.array().references(
    //     () => Comment,
    //     "reply_to_id",
    //     "id",
    //     "replies",
    // ),
});
