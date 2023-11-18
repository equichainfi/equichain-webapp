import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default {
    driver: "pg",
    schema: "src/lib/db/schema/*",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
        user: process.env.DATABASE_USER!,
        host: process.env.DATABASE_HOST!,
        database: process.env.DATABASE_NAME!,
        password: process.env.DATABASE_PASSWORD!,
        ssl: process.env.DATABASE_SSL === "true",
    },
    out: "src/lib/db/generated",
} satisfies Config;
