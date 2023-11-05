"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, ScanBarcode } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "..";

export default function PostBlockchainDetails() {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const features = [
        {
            feature: "Contract Address",
            value: (
                <Link
                    href="https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-primary duration-300"
                >
                    {"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d".slice(0, 6) +
                        "..." +
                        "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d".slice(-4)}
                </Link>
            ),
        }, // link to etherscan
        {
            feature: "Token ID",
            value: (
                <Link
                    href="https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-primary duration-300"
                >
                    00001
                </Link>
            ),
        }, // link to ipfs
        { feature: "Token Standard", value: "ERC-721" },
        { feature: "Chain", value: "Ethereum" },
        {
            feature: "Metadata",
            value: (
                <>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link
                                    href="https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-400 hover:text-primary duration-300"
                                >
                                    Frozen
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent
                                side="right"
                                className="bg-white flex flex-col items-center"
                            >
                                <span>
                                    This item&apos;s metadata was permanently
                                    locked
                                </span>
                                <span>
                                    and stored in decentralized file storage.
                                </span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </>
            ),
        }, // link to ipfs
        { feature: "Creator Earnings", value: "3.5%" },
    ];
    return (
        <main className="border-t">
            {isHidden && (
                <button
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                    className={clsx(
                        "flex items-center justify-between gap-x-2 h-12 p-3 w-full text-black",
                        {
                            "border-b-0": isHidden,
                        },
                    )}
                >
                    <div className="flex items-center justify-start gap-x-2">
                        <ScanBarcode size={19} />
                        <p>Details</p>
                    </div>
                    {isHidden ? <ChevronUp /> : <ChevronDown />}
                </button>
            )}

            {!isHidden && (
                <>
                    <button
                        onClick={() => {
                            setIsHidden(!isHidden);
                        }}
                        className={clsx(
                            "flex items-center justify-between gap-x-2 h-12 border-b p-3 w-full text-black",
                            {
                                "border-b-0": isHidden,
                            },
                        )}
                    >
                        <div className="flex items-center justify-start gap-x-2">
                            <ScanBarcode size={19} />
                            <p>Details</p>
                        </div>
                        {isHidden ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <section
                        className={clsx("p-3 flex flex-col gap-3", {
                            "opacity-0 h-0": isHidden,
                            "opacity-100 h-auto": !isHidden,
                            "transition-all duration-500 ease-in-out": true,
                        })}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between"
                            >
                                <p className="text-sm text-zinc-500">
                                    {feature.feature}
                                </p>
                                {feature.value}
                            </div>
                        ))}
                    </section>
                </>
            )}
        </main>
    );
}
