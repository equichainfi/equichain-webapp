/* eslint-disable no-unused-vars */
"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, Tag } from "lucide-react";
import { useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "..";
import Link from "next/link";
import { PostListings } from "@/types/post";

export default function PostListings({
    listings,
}: {
    listings: PostListings[];
}) {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    return (
        <main className="rounded-xl border">
            {isHidden && (
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
                        <Tag size={19} />
                        <p>Listing</p>
                    </div>
                    {isHidden ? <ChevronUp /> : <ChevronDown />}
                </button>
            )}

            {!isHidden &&
                listings.map((listing: PostListings, index: number) => (
                    <div key={index}>
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
                                <Tag size={19} />
                                <p>Listings</p>
                            </div>
                            {isHidden ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        <section
                            className={clsx(
                                "p-0 flex flex-col items-start justify-start",
                                {
                                    "opacity-0 h-0": isHidden,
                                    "opacity-100 h-auto": !isHidden,
                                    "transition-all duration-500 ease-in-out":
                                        true,
                                },
                            )}
                        >
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">
                                            Price
                                        </TableHead>
                                        <TableHead>USD Price</TableHead>
                                        <TableHead>Expiration</TableHead>
                                        <TableHead>From</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium flex-nowrap whitespace-nowrap">
                                            {listing.price}
                                        </TableCell>
                                        <TableCell>
                                            {listing.usdPrice}
                                        </TableCell>
                                        <TableCell>
                                            {listing.expiration}
                                        </TableCell>
                                        <TableCell>
                                            <Link
                                                className="text-blue-400 hover:text-primary duration-300"
                                                href="/u/Satoshi Nakamoto"
                                            >
                                                {listing.from}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Button className="bg-primary rounded-xl">
                                                Buy
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </section>
                    </div>
                ))}
        </main>
    );
}
