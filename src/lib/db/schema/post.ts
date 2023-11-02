import {
    boolean,
    pgTable,
    real,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
// import { PostCategoryEnum, PostEnum } from ".";

export const Post = pgTable("post", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: varchar("slug", { length: 256 }).notNull(),
    description: text("description").notNull(),
    status: text("status").notNull(), // change text with enum
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
    category: text("category").notNull(), // change text with enum
});
