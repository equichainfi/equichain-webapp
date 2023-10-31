"use client";

import { randomImage } from "@/lib/api/images";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <main className="signing-page">
            <section className="h-screen w-screen lg:block hidden lg:w-1/2 xl:w-1/3 rounded-r-3xl 2xl:w-1/4">
                <Image
                    alt={randomImage()}
                    src={randomImage()}
                    width={1000}
                    height={1000}
                    className="object-cover object-center h-full w-full p-0 m-0"
                />
            </section>
            <section className="flex items-center justify-center xl:justify-start xl:pl-32 2xl:pl-60 h-screen w-screen lg:w-1/2 xl:w-2/3 2xl:w-3/4 md:bg-white">
                <SignUp />
            </section>
        </main>
    );
}
