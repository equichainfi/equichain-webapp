"use client";

import { Dot, HomeIcon, LandPlot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "..";
import { FullWhite } from "../../../public";

export default function Header() {
    const navOptions = [
        { value: "Buy Properties", icon: <HomeIcon />, link: "/homes" },
        { value: "Buy Land", icon: <LandPlot />, link: "/lands" },
        { value: "Sell", icon: <LandPlot />, link: "/sell" },
    ];

    return (
        <div className="container-flex border-b-2 border-primary items-center justify-between bg-white w-screen">
            <option className="flex items-center">
                {/* Need logo resolution fix */}
                <Link href="/">
                    <Image
                        src={FullWhite}
                        className="cursor-pointer w-56 sm:w-72"
                        alt="logo"
                        width={1}
                    />
                </Link>

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
            </option>

            <section className="flex items-center justify-between">
                <Button className="xl:p-0 pr-3 hidden md:flex">Log in</Button>
                <Dot className="hidden xl:flex" />
                <Button className="bg-black rounded-full text-white font-semibold">
                    Sign up
                </Button>
            </section>
        </div>
    );
}
