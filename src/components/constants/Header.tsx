"use client";

import {
    Bitcoin,
    Dot,
    HeartHandshake,
    Hotel,
    LandPlot,
    LifeBuoy,
    ShieldCheck,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, LeftSidebar, Logo } from "..";
import { SmallLogoPlain } from "../../../public";

export const navOptions: NavOptions = [
    { value: "Buy Properties", link: "/homes", icon: <Hotel /> },
    { value: "Buy Land", link: "/lands", icon: <LandPlot /> },
    { value: "Sell", link: "/sell", icon: <Bitcoin /> },
    { value: "Dashboard", link: "/dashboard", icon: <User /> },
    { value: "Safety", link: "/w/safety", icon: <ShieldCheck /> },
    { value: "Contact", link: "/w/contact", icon: <LifeBuoy /> },
    { value: "Terms of Policy", link: "/w/terms", icon: <HeartHandshake /> },
];

export default function Header() {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    return (
        <div className="px-2 py-5 flex sm:px-10 lg:px-16 xl:px-20 2xl:px-24 justify-between bg-white w-screen">
            <Button
                className="p-0 sm:hidden"
                variant={"default"}
                onClick={() => setShowSidebar(!showSidebar)}
            >
                <Image
                    src={SmallLogoPlain}
                    className="cursor-pointer w-10"
                    alt="equichain logo"
                    width={1}
                    height={1}
                />
            </Button>

            <section className="sm:hidden block">
                {showSidebar && (
                    <nav className="fixed top-0 left-0 w-full h-full z-50 flex">
                        <LeftSidebar />
                        <button
                            className="w-1/2 h-full bg-white bg-opacity-25 blur-lg"
                            onClick={() => setShowSidebar(!showSidebar)}
                        />
                    </nav>
                )}
            </section>

            <option className="flex 2xl:hidden items-center">
                <Logo showOn="sm:" hideOn="2xl:" />
                <div className="hidden sm:flex">
                    {navOptions.slice(0, 3).map((btn, index) => (
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

            {/*  */}
            <div className="hidden 2xl:flex items-center justify-start">
                {navOptions.slice(0, 3).map((btn, index) => (
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

            <Logo hideOn="" showOn="2xl:" />

            <section className="flex items-center justify-end">
                <Link href="/sign-in" className="xl:p-0 pr-3 hidden md:flex">
                    Log in
                </Link>
                <Dot className="hidden xl:flex" />
                <Link
                    href="/sign-up"
                    className="bg-black rounded-full text-white font-semibold text-center flex-nowrap whitespace-nowrap px-4 py-2 hover:opacity-60 duration-500 transition ease-in-out"
                >
                    Sign up
                </Link>
            </section>
        </div>
    );
}
