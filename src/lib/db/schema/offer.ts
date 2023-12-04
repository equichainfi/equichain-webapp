import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const Offer = pgTable("offer", {
    id: text("id").primaryKey(),
    price: integer("price").notNull().default(0),
    floorDifference: integer("floor_difference").notNull().default(0),
    expiration: timestamp("expiration").notNull(),
});
