"use client";

import { Dot } from "lucide-react";
import Link from "next/link";
import { Button, Logo } from "..";

export default function Header() {
    const navOptions: NavOptions = [
        { value: "Buy Properties", link: "/homes" },
        { value: "Buy Land", link: "/lands" },
        { value: "Sell", link: "/sell" },
    ];

    return (
        <div className="container-flex 2xl:grid 2xl:grid-cols-3 items-center justify-between bg-white w-screen">
            <option className="flex 2xl:hidden items-center">
                <Logo showOn="" hideOn="2xl:" />
                <div className="hidden sm:flex">
                    {navOptions.map((btn, index) => (
                        <Link href={btn.link} key={index}>
                            <Button
                                className="text-black hover:opacity-60 duration-300 transition ease-in-out"
                                variant={"default"}
                            >
                                {btn.value}
                            </Button>
                        </Link>
                    ))}
                </div>
            </option>

            <div className="hidden 2xl:flex items-center justify-start">
                {navOptions.map((btn, index) => (
                    <Link href={btn.link} key={index}>
                        <Button
                            className="text-black hover:opacity-60 duration-300 transition ease-in-out"
                            variant={"default"}
                        >
                            {btn.value}
                        </Button>
                    </Link>
                ))}
            </div>

            <Logo showOn="2xl:" hideOn="" />

            <section className="flex items-center justify-end">
                <Button className="xl:p-0 pr-3 hidden md:flex">Log in</Button>
                <Dot className="hidden xl:flex" />
                <Button className="bg-black rounded-full text-white font-semibold text-center flex-nowrap whitespace-nowrap px-4 py-2 hover:opacity-60 duration-500 transition ease-in-out">
                    Sign up
                </Button>
            </section>
        </div>
    );
}
