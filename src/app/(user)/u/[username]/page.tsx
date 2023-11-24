/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserMain } from "@/components";
// import { db } from "@/lib/db";
// import { Account } from "@/lib/db/schema";
// import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = params;

    // const session: string;

    // const user = await db.Account.findFirst({
    //     where: (Account: { slug: string }, { eq }: any) =>
    //         eq(Account.slug, slug),
    //     columns: {
    //         id: true,
    //         username: true,
    //         verified: true,
    //         slug: true,
    //         followers: true,
    //         user_id: true,
    //     },
    // });
    // if (!user) return notFound();

    return <UserMain />;
}
