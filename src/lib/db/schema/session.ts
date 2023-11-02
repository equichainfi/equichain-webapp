import { date, pgTable, serial, text } from "drizzle-orm/pg-core";

export const Session = pgTable("session", {
    id: serial("id").primaryKey(),
    sessionToken: text("session_token").notNull().unique(),
    expires: date("expires").notNull(),
});
