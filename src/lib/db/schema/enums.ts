import { pgEnum } from "drizzle-orm/pg-core";

export const postEnum = pgEnum("post_status", [
    "pending",
    "active",
    "sold",
    "inactive",
]);

export const postCategoryEnum = pgEnum("post_category", [
    "house",
    "plot",
    "commercial",
    "farm",
    "industrial",
    "other",
]);
