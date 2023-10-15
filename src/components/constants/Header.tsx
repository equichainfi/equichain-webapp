"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Button,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "..";
import { FullWhite } from "../../../public";

export default function Header() {
    const router = useRouter();

    return (
        <div className="container-flex header">
            {/* Need logo resolution fix */}
            <Image
                src={FullWhite}
                className="cursor-pointer w-56 sm:w-72"
                onClick={() => router.push("/")}
                alt="logo"
                width={1}
            />

            <Sheet>
                <SheetTrigger className="flex md:hidden">
                    <Menu
                        size={30}
                        className="hover:text-primary transition ease-in-out"
                    />
                </SheetTrigger>
                <SheetContent
                    className="w-screen h-screen bg-white"
                    side={"top"}
                >
                    <SheetHeader>
                        <SheetTitle>
                            <Image
                                src={FullWhite}
                                className="cursor-pointer"
                                onClick={() => router.push("/")}
                                alt="logo"
                                width={220}
                            />
                        </SheetTitle>
                        <SheetDescription className="grid grid-cols-2 sm:grid-cols-2 place-content-start">
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                            <Button>Button x</Button>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <section className="hidden md:flex items-center justify-between gap-x-16 lg:gap-x-20">
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </section>
            <h1 className="hidden md:flex">Account</h1>
        </div>
    );
}
