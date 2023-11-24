"use client";

import {
    ScrollArea,
    ScrollBar,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components";
import {
    Copy,
    Flag,
    HeartHandshake,
    MoreHorizontal,
    Share,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function UserMain() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const userOptions: string[] = [
        "Collected",
        "Offers made",
        "Offers received",
        "Deals",
        "Created",
        "Favorites",
        "Activity",
    ];

    return (
        <main className="w-screen">
            <header className="w-full">
                <section className="flex flex-col">
                    <Image
                        src="/images/full_black.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-screen min-h-[120px] max-h-[330px] object-center object-cover"
                    />
                    <div className="ml-2 my-5 flex sm:ml-10 lg:ml-16 xl:ml-20 2xl:ml-24 items-start justify-start absolute top-24 md:top-36 lg:top-44 xl:top-58 2xl:top-64 3xl:top-72 bg-white rounded-full">
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="object-contain rounded-full border-4 border-gray-300 h-28 sm:h-36 lg:h-36 2xl:h-40 w-auto relative z-10"
                        />
                    </div>
                    <section>
                        <div className="container-flex pb-0 flex gap-3 items-center justify-between">
                            <h1 className="font-semibold text-3xl">Olivier</h1>
                            <section>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="h-auto w-auto rounded-lg text-center p-2">
                                            <HeartHandshake size={30} />
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white">
                                            <p>Make a deal</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="h-auto w-auto text-center p-2">
                                            <Share size={30} />
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white">
                                            <p>Share</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <button
                                    onClick={() => setIsVisible(!isVisible)}
                                    className="h-auto w-auto text-center p-2"
                                >
                                    <MoreHorizontal size={30} />
                                </button>
                                {isVisible && (
                                    <div className="bg-white rounded-xl border py-5 px-2 absolute top-70 right-3 sm:right-10 md:right-16 lg:right-20 2xl:right-24 w-[220px] h-[210px] md:h-[125px] flex flex-col gap-y-5">
                                        <div className="md:hidden block bg-white">
                                            <h3 className="font-semibold text-zinc-700 text-sm pb-5 pl-3">
                                                ADRESSES
                                            </h3>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger className="h-auto w-auto bg-white text-center pl-3">
                                                        <p className="font-semibold flex-nowrap flex items-center gap-2">
                                                            Ξ 0x23ds...sdf2
                                                            <Copy size={20} />
                                                        </p>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white">
                                                        <p>Copy</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold text-zinc-700 text-sm pb-5 pl-3">
                                                MORE
                                            </h3>
                                            <button className="w-full h-14 rounded-xl hover:bg-zinc-100 flex items-center justify-start gap-2 pl-3">
                                                <Flag size={20} />
                                                <p className="font-semibold">
                                                    Report
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </section>
                        </div>
                        <div className="container-flex pt-0 items-center justify-start gap-2">
                            <p className="font-medium hidden md:block">
                                Ξ 0x234...324
                            </p>
                            <p className="text-zinc-400">Joined April 2021</p>
                        </div>
                    </section>
                </section>
                <section className="container-flex pt-0">
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex w-max space-x-4">
                            {userOptions.map(
                                (option: string, index: number) => (
                                    <button
                                        key={index}
                                        className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg"
                                    >
                                        {option}
                                    </button>
                                ),
                            )}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </section>
            </header>
        </main>
    );
}
