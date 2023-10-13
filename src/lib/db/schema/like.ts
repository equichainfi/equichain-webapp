import { pgTable } from "drizzle-orm/pg-core";
import { Post, User } from ".";

export const Like = pgTable("Like", {
    user: User.object().notNull(),
    userId: User.id.notNull(),
    post: Post.object().notNull(),
    postId: Post.id.notNull(),
});
