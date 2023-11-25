import {
    boolean,
    json,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { User } from ".";
// import { PostCategoryEnum, PostEnum } from "./enums";

/// @OlivierKobialka: post id is IPFS hash

export const Post = pgTable("post", {
    id: text("id").primaryKey(),
    slug: varchar("slug", { length: 256 }).notNull(),
    status: text("status").notNull().default("pending"),
    images: text("images").array().notNull(),
    isVerified: boolean("is_verified").notNull(),
    createdAt: timestamp("created_at").notNull(),
    category: text("category").notNull(),

    metadata: json("metadata").notNull(),
    userId: text("user_id")
        .references(() => User.id)
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
