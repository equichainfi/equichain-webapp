import {
    boolean,
    json,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { Account } from ".";
import { PostCategoryEnum, PostEnum } from "./enums";

/// @OlivierKobialka: post id is IPFS hash

export const Post = pgTable("post", {
    id: text("id").primaryKey(),
    slug: varchar("slug", { length: 256 }).notNull(),
    status: PostEnum("status").notNull().default("pending"),
    images: text("images").array().notNull(),
    isVerified: boolean("is_verified").notNull(),
    createdAt: timestamp("created_at").notNull(),
    category: PostCategoryEnum("category").notNull(),

    metadata: json("metadata").notNull(),
    authorId: text("author_id")
        .references(() => Account.id)
        .notNull(),
});

/**
 * METADATA => {
 * price,
 * title,
 * description,
 * timestamp,
 * updated_at,
 * category,
 * images: [ipfs_hash],
 * is_frozen,
 * }
 */
