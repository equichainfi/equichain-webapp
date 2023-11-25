/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from "next/server";

/* eslint-disable no-unused-vars */
export async function GET(req: Request): Promise<NextResponse> {
    const url: URL = new URL(req.url);
    const session = true;

    let followedTags: string[] = [];

    if (session) {
        return new NextResponse(JSON.stringify({}), { status: 200 });
    }
    try {
        // const posts = await db.query.post.findMany();

        return new NextResponse(JSON.stringify({}), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 });
    }
}
