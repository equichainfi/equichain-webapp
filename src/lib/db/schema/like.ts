import { pgTable, text } from "drizzle-orm/pg-core";
import { Post, User } from ".";

export const Like = pgTable("like", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => User.id),
    postId: text("post_id")
        .notNull()
        .references(() => Post.id),
});
