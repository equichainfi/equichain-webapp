import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { Session, Account, Post } from ".";

export const User = pgTable("User", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    emailVerified: date("email_verified").notNull(),

    username: varchar("username", { length: 64 }).notNull().unique(),
    image: varchar("image", { length: 256 }).notNull(),

    accounts: Account.array().notNull(),
    sessions: Session.array().notNull(),
    post: Post.array().notNull(),
    // savedPost:
    // comment:
    // likedComment:
});
