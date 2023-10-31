import { randomImage } from "@/hooks/images";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPoster() {
    return (
        <section className="h-screen w-screen lg:block hidden lg:w-1/2 xl:w-1/3 rounded-r-3xl 2xl:w-1/4">
            <Image
                alt={randomImage()}
                src={randomImage()}
                width={1000}
                height={1000}
                className="object-cover object-center h-full w-full p-0 m-0"
            />
            <Link
                className="absolute bottom-0 px-2 py-1 rounded-xl m-5 bg-gray-400 bg-opacity-25 hover:bg-opacity-70 duration-300 transition ease-in"
                href="/"
            >
                <p className="text-white text-sm font-light flex items-center justify-between text-center gap-x-2 hover:font-normal">
                    Go back <Undo2 size={14} />
                </p>
            </Link>
        </section>
    );
}
