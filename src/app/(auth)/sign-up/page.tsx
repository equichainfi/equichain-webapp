"use client";

import { SignInPoster } from "@/components";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <main className="signing-page">
            <SignInPoster />
            <section className="flex items-center justify-center xl:justify-start xl:pl-32 2xl:pl-60 h-screen w-screen lg:w-1/2 xl:w-2/3 2xl:w-3/4 md:bg-white">
                <SignUp />
            </section>
        </main>
    );
}
