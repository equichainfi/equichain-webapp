import {
    boolean,
    pgTable,
    real,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { postCategoryEnum, postEnum } from ".";

export const Post = pgTable("Post", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: varchar("slug", { length: 256 }).notNull(),
    description: text("description").notNull(),
    status: postEnum("status").notNull(),
    images: text("images").array().notNull(),

    isVerified: boolean("is_verified").notNull(),
    createdAt: timestamp("created_at").notNull(), //todo add default value if possible
    updatedAt: timestamp("updated_at").notNull(),

    // author: User.object().notNull(),
    // authorId: serial("author_id")
    //     .references(() => User.id)
    //     .notNull(),

    price: real("price").notNull(),

    // comments: Comment.array().notNull(),
    // likes: Like.array().notNull(),
    category: postCategoryEnum("category").notNull(),
});
