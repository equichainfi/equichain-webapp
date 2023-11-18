import { pgEnum } from "drizzle-orm/pg-core";

export const PostEnum = pgEnum("post_status", [
    "pending",
    "active",
    "sold",
    "inactive",
]);

export const PostCategoryEnum = pgEnum("post_category", [
    "single_family",
    "condo",
    "townhouse",
    "multi_family",
    "mobile",
    "apartment",
    "farm",
    "other",
]);
