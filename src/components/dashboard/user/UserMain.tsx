"use client";

import {
    ScrollArea,
    ScrollBar,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components";
import clsx from "clsx";
import {
    Copy,
    Flag,
    HeartHandshake,
    MoreHorizontal,
    Share,
    Twitter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SmallLogoPlain } from "../../../../public";
import copy from "clipboard-copy";
import { usePathname } from "next/navigation";

export default function UserMain() {
    const [isVisibleOptions, setIsVisibleOptions] = useState<boolean>(false);
    const [isVisibleShare, setIsVisibleShare] = useState<boolean>(false);
    const userOptions: string[] = [
        "Collected",
        "Offers made",
        "Offers received",
        "Deals",
        "Created",
        "Favorites",
        "Activity",
    ];
    const [selectedOption, setSelectedOption] = useState<string>(
        userOptions[0],
    );
    const pathname: string = usePathname();
    const [profileBanner, setProfileBanner] = useState<string>(
        "/images/full_black.svg",
    );
    return (
        <main className="w-screen">
            <header className="w-full">
                <section className="flex flex-col">
                    <Image
                        src={profileBanner}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-screen min-h-[120px] max-h-[160px] md:max-h-[200px] lg:max-h-[225px] xl:max-h-[325px] object-center object-cover cursor-pointer"
                        onClick={() => {
                            const input: HTMLInputElement =
                                document.createElement("input");
                            input.type = "file";
                            input.accept = ".jpg, .png";
                            input.onchange = (e) => {
                                const file: File | undefined = (
                                    e.target as HTMLInputElement
                                )?.files?.[0];
                                const reader: FileReader = new FileReader();
                                reader.onloadend = () =>
                                    setProfileBanner(reader.result as string);
                                if (file) reader.readAsDataURL(file);
                            };
                            input.click();
                        }}
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
                            <section
                                className={
                                    (clsx(""),
                                    pathname === "/account"
                                        ? "hidden"
                                        : "block")
                                }
                            >
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
                                            <button
                                                onClick={() => {
                                                    setIsVisibleShare(
                                                        !isVisibleShare,
                                                    );
                                                    setIsVisibleOptions(false);
                                                }}
                                            >
                                                <Share size={30} />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white">
                                            <p>Share</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                {isVisibleShare && (
                                    <div className="bg-white rounded-xl border py-4 px-2 absolute top-70 right-3 sm:right-10 md:right-16 lg:right-20 2xl:right-24 w-[220px] h-[210px] md:h-[140px] flex flex-col gap-y-5 z-50">
                                        <div className="flex flex-col items-center justify-start">
                                            <button
                                                className="w-full h-14 rounded-xl hover:bg-zinc-100 flex items-center justify-start gap-2 pl-3"
                                                onClick={() =>
                                                    copy(
                                                        `www.equichain.fi${pathname}`,
                                                    )
                                                }
                                            >
                                                <Image
                                                    src={SmallLogoPlain}
                                                    alt="Logo"
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                                <p className="font-semibold">
                                                    Copy link
                                                </p>
                                            </button>
                                            <button className="w-full h-14 rounded-xl hover:bg-zinc-100 flex items-center justify-start gap-2 pl-3">
                                                <Twitter size={20} />
                                                <p className="font-semibold">
                                                    Share on Twitter
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={() => {
                                        setIsVisibleOptions(!isVisibleOptions);
                                        setIsVisibleShare(false);
                                    }}
                                    className="h-auto w-auto text-center p-2"
                                >
                                    <MoreHorizontal size={30} />
                                </button>
                                {isVisibleOptions && (
                                    <div className="bg-white rounded-xl border py-5 px-2 absolute top-70 right-3 sm:right-10 md:right-16 lg:right-20 2xl:right-24 w-[220px] h-[210px] md:h-[125px] flex flex-col gap-y-5 z-50">
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
                                        className={clsx(
                                            "px-3 sm:px-4 py-2 sm:py-3 hover:bg-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg",
                                            selectedOption === option
                                                ? "bg-zinc-100"
                                                : "bg-white",
                                        )}
                                        onClick={() => {
                                            setSelectedOption(option);
                                        }}
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
