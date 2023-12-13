import { pgTable, varchar } from "drizzle-orm/pg-core";

export const UserDashboardOptions = pgTable("user_dashboard_options", {
    name: varchar("name", { length: 64 }).notNull().unique(),
});
