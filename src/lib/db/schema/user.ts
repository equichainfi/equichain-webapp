import {
    boolean,
    pgTable,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const User = pgTable("user", {
    id: serial("id").primaryKey(),
    first_name: varchar("name", { length: 32 }).notNull(),
    last_name: varchar("last_name", { length: 64 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    email_verified: boolean("email_verified").notNull(),

    image: varchar("image", { length: 256 }).notNull(),
    created_at: timestamp("created_at").notNull(),

    country: varchar("country", { length: 64 }).notNull(),
    city: varchar("city", { length: 64 }).notNull(),
    address: varchar("address", { length: 256 }).notNull(),
    zip: varchar("zip", { length: 16 }).notNull(),
    phone: varchar("phone", { length: 16 }).notNull(),
    phone_verified: boolean("phone_verified").notNull(),
});
