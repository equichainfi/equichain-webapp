import {
    boolean,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const User = pgTable("user", {
    id: text("id").primaryKey(),
    firstName: varchar("name", { length: 32 }).notNull(),
    lastName: varchar("last_name", { length: 64 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    emailVerified: boolean("email_verified").notNull(),

    image: varchar("image", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),

    country: varchar("country", { length: 64 }).notNull(),
    city: varchar("city", { length: 64 }).notNull(),
    address: varchar("address", { length: 256 }).notNull(),
    zip: varchar("zip", { length: 16 }).notNull(),
    phone: varchar("phone", { length: 16 }).notNull(),
    phoneVerified: boolean("phone_verified").notNull(),
});
