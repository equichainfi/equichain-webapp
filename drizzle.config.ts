import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default {
    driver: "pg",
    schema: "src/lib/db/schema/*",
    dbCredentials: {
        connectionString: process.env.DRIZZLE_DATABASE_URL!,
        host: process.env.PG_HOST!,
        password: process.env.PG_PASSWORD!,
        user: process.env.PG_USER!,
        database: process.env.PG_DATABASE!,
    },
    out: "src/lib/db/generated",
} satisfies Config;
