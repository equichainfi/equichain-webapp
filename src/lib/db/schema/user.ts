import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const User = pgTable("User", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    emailVerified: date("email_verified").notNull(),

    username: varchar("username", { length: 64 }).notNull().unique(),
    image: varchar("image", { length: 256 }).notNull(),

    // session: Session.array().notNull(),
    // likePosts: Like.array().notNull(),
});
