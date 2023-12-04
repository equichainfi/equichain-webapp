"use client";

import clsx from "clsx";
import Link from "next/link";
import {
    ArrowRightLeft,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    ShoppingCart,
} from "lucide-react";
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
import { PostNftActivity } from "@/types/post";

export default function PostItemActivity({
    itemActivity,
}: {
    itemActivity: PostNftActivity[];
}) {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("" as string);
    const [searchingFilters, setSearchingFilters] = useState<string[]>([]);
    const filters = [
        {
            value: "sales",
            label: "Sales",
        },
        {
            value: "deal-accepted",
            label: "Deals accepted",
        },
        {
            value: "listings",
            label: "Listings",
        },
        {
            value: "deal-offers",
            label: "Deal offers",
        },
        {
            value: "transfers",
            label: "Transfers",
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
                        <ArrowRightLeft size={19} />
                        <p>NFT Activity</p>
                    </div>
                    {isHidden ? <ChevronUp /> : <ChevronDown />}
                </button>
            )}

            {!isHidden &&
                itemActivity.map((activity: PostNftActivity, index: number) => (
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
                                <ArrowRightLeft size={19} />
                                <p>NFT Activity</p>
                            </div>
                            {isHidden ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        <section
                            className={clsx(
                                "flex p-3 flex-col items-start justify-start",
                                {
                                    "opacity-0 h-0": isHidden,
                                    "opacity-100 h-auto": !isHidden,
                                    "transition-all duration-500 ease-in-out":
                                        true,
                                },
                            )}
                        >
                            <input
                                className="w-full h-10 border rounded-xl p-3"
                                placeholder="Filter"
                                type="text"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    filters.filter((filter) => {
                                        return filter.value
                                            .toLowerCase()
                                            .includes(
                                                e.target.value.toLowerCase(),
                                            );
                                    });
                                    setOpen(true);
                                }}
                                onClick={() => setOpen(!open)}
                            />
                            {open && (
                                <div className="w-full mt-2 p-2 border rounded-lg">
                                    <div className="w-full overflow-y-scroll flex flex-col gap-y-1 rounded-lg">
                                        {filters
                                            .filter((filter) => {
                                                return filter.value
                                                    .toLowerCase()
                                                    .includes(
                                                        value.toLowerCase(),
                                                    );
                                            })
                                            .map((filter, index) => (
                                                <Button
                                                    key={index}
                                                    className="flex items-center justify-between p-3 text-black w-full hover:bg-zinc-100 cursor-pointer"
                                                    onClick={() => {
                                                        if (
                                                            searchingFilters.includes(
                                                                filter.value,
                                                            )
                                                        ) {
                                                            setSearchingFilters(
                                                                searchingFilters.filter(
                                                                    (
                                                                        searchingFilter,
                                                                    ) => {
                                                                        return (
                                                                            searchingFilter !==
                                                                            filter.label
                                                                        );
                                                                    },
                                                                ),
                                                            );
                                                        } else {
                                                            setSearchingFilters(
                                                                [
                                                                    ...searchingFilters,
                                                                    filter.label,
                                                                ],
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <p className="font-semibold">
                                                        {filter.label}
                                                    </p>
                                                </Button>
                                            ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex items-start justify-start gap-x-2 mt-2">
                                {searchingFilters.length > 0 &&
                                    searchingFilters.map((filter, index) => (
                                        <div
                                            className="bg-zinc-100 px-3 py-1 rounded-2xl"
                                            key={index}
                                        >
                                            {filter}
                                        </div>
                                    ))}
                                {searchingFilters.length > 0 && (
                                    <button
                                        className="text-blue-400 hover:text-primary duration-300 flex items-center justify-center px-3 py-1"
                                        onClick={() => {
                                            setSearchingFilters([]);
                                        }}
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>
                        </section>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Event</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>From</TableHead>
                                    <TableHead>To</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="w-full">
                                    <TableCell className="flex gap-x-1">
                                        <ShoppingCart size={19} />{" "}
                                        {activity.event}
                                    </TableCell>
                                    <TableCell className="font-semibold">
                                        {activity.price} ETH
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            className="text-blue-400 hover:text-primary duration-300"
                                            href={`/u/${activity.from}`}
                                        >
                                            {activity.from}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            className="text-blue-400 hover:text-primary duration-300"
                                            href={`/u/${activity.to}`}
                                        >
                                            {activity.to}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link
                                            className="text-blue-400 hover:text-primary duration-300 flex gap-x-1"
                                            href={`/u/${activity.date}`}
                                        >
                                            {activity.date}{" "}
                                            <ExternalLink size={19} />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                ))}
        </main>
    );
}
