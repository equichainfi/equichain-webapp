"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, List } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "..";

interface IOffer {
    price: string;
    usdPrice: string;
    floorDifference: string;
    expiration: string;
    from: string;
}

export default function PostOffers() {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const offers: IOffer[] = [
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "6% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "5% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
        {
            price: "28,3849 WETH",
            usdPrice: "$52 281,01",
            floorDifference: "1% below",
            expiration: "12 hours ago",
            from: "50B056",
        },
    ];

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
                        {offers.length === 0 ? (
                            <h1 className="w-full text-center p-3">
                                No offers at the moment
                            </h1>
                        ) : (
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
                                    {offers.slice(0, 5).map((offer, index) => (
                                        <TableRow
                                            key={index}
                                            className="w-full"
                                        >
                                            <TableCell className="font-medium flex-nowrap whitespace-nowrap">
                                                {offer.price}
                                            </TableCell>
                                            <TableCell>
                                                {offer.usdPrice}
                                            </TableCell>
                                            <TableCell>
                                                {offer.floorDifference}
                                            </TableCell>
                                            <TableCell>
                                                {offer.expiration}
                                            </TableCell>
                                            <TableCell>
                                                <Link
                                                    className="text-blue-400 hover:text-primary duration-300"
                                                    href="/u/Satoshi Nakamoto"
                                                >
                                                    {offer.from}
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </section>
                </>
            )}
        </main>
    );
}
