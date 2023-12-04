import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const User = pgTable("user", {
    id: text("id").primaryKey(),
    firstName: varchar("name", { length: 32 }),
    lastName: varchar("last_name", { length: 64 }),

    username: varchar("username", { length: 64 }).notNull().unique(),
    bio: varchar("bio", { length: 256 }).notNull().default("No bio yet."),
    followers: integer("followers").notNull().default(0),
    profileImage: text("profile_image").default(
        "https://ipfs.io/ipfs/QmUoRqGsQzgLWpuWX8wqh3NLDqM1vqrJNJbmaS7UEr6TPj?filename=equichain_default_profile_img.png",
    ),

    profileBanner: text("image").notNull(),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true })
        .notNull()
        .defaultNow(),

    // country: varchar("country", { length: 64 }).notNull(),
    // city: varchar("city", { length: 64 }).notNull(),
    // address: varchar("address", { length: 256 }).notNull(),
    // zip: varchar("zip", { length: 16 }).notNull(),

    userVerified: boolean("user_verified").notNull().default(false),
    email: varchar("email", { length: 256 }).unique(),
    emailVerified: boolean("email_verified").notNull().default(false),
    phone: varchar("phone", { length: 16 }).notNull(),
    phoneVerified: boolean("phone_verified").notNull().default(false),

    // provider: text("provider").notNull(),
    // providerAccountId: text("provider_account_id").notNull(),
    // refreshToken: text("refresh_token"),
    // accessToken: text("access_token"),
    // expiresAt: timestamp("expires_at", { precision: 6, withTimezone: false })
    //     .notNull()
    //     .defaultNow(),
    // tokenType: text("token_type"),
    // scope: text("scope"),
    // idToken: text("id_token"),
    // sessionState: text("session_state"),
    // lastSignInAt: timestamp("last_sign_in_at").notNull().defaultNow(),
});
