import { date, pgTable, text } from "drizzle-orm/pg-core";

export const Session = pgTable("session", {
    id: text("id").primaryKey(),
    sessionToken: text("session_token").notNull().unique(),
    expires: date("expires").notNull(),
});
