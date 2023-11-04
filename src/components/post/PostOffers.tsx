"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, List } from "lucide-react";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "..";
import Link from "next/link";

export default function PostOffers() {
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
                        <List size={19} />
                        <p>Offers</p>
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
                            <List size={19} />
                            <p>Offers</p>
                        </div>
                        {isHidden ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <section
                        className={clsx(
                            "flex flex-col items-start justify-start",
                            {
                                "opacity-0 h-0": isHidden,
                                "opacity-100 h-auto": !isHidden,
                                "transition-all duration-500 ease-in-out": true,
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
                                    <TableHead>Floor Difference</TableHead>
                                    <TableHead>Expiration</TableHead>
                                    <TableHead>From</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium flex-nowrap whitespace-nowrap">
                                        28,3849 WETH
                                    </TableCell>
                                    <TableCell>$52 281,01</TableCell>
                                    <TableCell>5% below</TableCell>
                                    <TableCell>12 hours ago</TableCell>
                                    <TableCell>
                                        <Link
                                            className="text-blue-400 hover:text-primary duration-300"
                                            href="/u/Satoshi Nakamoto"
                                        >
                                            50B056
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </section>
                </>
            )}
        </main>
    );
}
