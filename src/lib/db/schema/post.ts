// import {
//     boolean,
//     pgTable,
//     real,
//     serial,
//     text,
//     timestamp,
//     varchar,
// } from "drizzle-orm/pg-core";

// export const Post = pgTable("post", {
//     id: serial("id").primaryKey(),
//     title: text("title").notNull(),
//     slug: varchar("slug", { length: 256 }).notNull(),
//     description: text("description").notNull(),
//     status: text("status").notNull(),
//     images: text("images").array().notNull(),
//     isVerified: boolean("is_verified").notNull(),
//     createdAt: timestamp("created_at").notNull(),
//     updatedAt: timestamp("updated_at").notNull(),
//     price: real("price").notNull(),
//     category: text("category").notNull(),
// });
