import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export default async function Home() {
    const result = await db.select().from(users);
    return (
        <main>
            {result.map((user) => (
                <div key={user.id}>{user.fullName}</div>
            ))}
        </main>
    );
}
