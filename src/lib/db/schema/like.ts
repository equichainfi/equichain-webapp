import { pgTable, serial } from "drizzle-orm/pg-core";
import { Post, User } from ".";

export const Like = pgTable("Like", {
    userId: serial("user_id")
        .notNull()
        .references(() => User.id),
    postId: serial("post_id")
        .notNull()
        .references(() => Post.id),
});
