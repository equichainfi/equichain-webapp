// import { db } from "@/lib/db";
// import { User } from "@/lib/db/schema";
// import { FullQueryResults } from "@neondatabase/serverless";
// import { sql } from "drizzle-orm";
// import { notFound } from "next/navigation";
// import { NextResponse } from "next/server";

// export async function GET() {
//     // const { username } = req.query;
//     // console.log(username);

//     try {
//         const user: FullQueryResults<boolean> = await db.execute(
//             sql`select * from ${User} where username = olivier`,
//         );
//         console.log(user);
//         if (!user) return notFound();

//         return new NextResponse(JSON.stringify(user), { status: 200 });
//     } catch (error) {
//         return new NextResponse(JSON.stringify({}), { status: 500 });
//     }
// }
