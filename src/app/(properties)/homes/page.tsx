/* eslint-disable indent */
"use client";

import {
    Button,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    GeneralFeed,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const regions = [
    {
        value: "new_york_ny",
        label: "New York / New Jersey, NY",
    },
    {
        value: "atlanta_ga",
        label: "Atlanta, GA",
    },
];

export default function Page() {
    const [open, setOpen] = useState<boolean>(false);
    const [showFilters, setShowFilters] = useState<boolean>(true);
    const [value, setValue] = useState<string>("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const p_types = [
        {
            value: "single_family",
            label: "Single Family",
        },
        {
            value: "condo",
            label: "Condo",
        },
        {
            value: "townhome",
            label: "Townhome",
        },
        {
            value: "multi_family",
            label: "Multi Family",
        },
        {
            value: "land",
            label: "Land",
        },
        {
            value: "mobile",
            label: "Mobile",
        },
        {
            value: "apartment",
            label: "Apartment",
        },
        {
            value: "farm",
            label: "Farm",
        },
        {
            value: "other",
            label: "Other",
        },
    ];
    console.log(selectedTypes);
    return (
        <main className="px-2 py-5 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
            <section className="flex flex-col my-20">
                <header className="mb-10">
                    <p>Buy with euichain.fi</p>
                    <h1 className="text-6xl font-semibold">
                        Everything to buy a
                    </h1>
                    <h1 className="text-6xl font-semibold">
                        home all in one place
                    </h1>
                </header>
                <div className="flex flex-col">
                    <span>Find homes</span>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[300px] justify-between bg-white border-none"
                            >
                                {value
                                    ? regions.find(
                                          (region) => region.value === value,
                                      )?.label
                                    : "Pick your city or region"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0 bg-white">
                            <Command>
                                <CommandInput placeholder="Pick your city or region" />
                                <CommandEmpty>No region found.</CommandEmpty>
                                <CommandGroup>
                                    {regions.map((region) => (
                                        <CommandItem
                                            className="hover:border duration-300 transition ease-in-out rounded-xl mb-1"
                                            key={region.value}
                                            value={region.value}
                                            onSelect={(currentValue) => {
                                                setValue(
                                                    currentValue === value
                                                        ? ""
                                                        : currentValue,
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === region.value
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                )}
                                            />
                                            {region.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </section>
            <section className="flex flex-col items-center justify-between w-full">
                <header className="flex items-center justify-between w-full pb-4">
                    <Button
                        className="text-black"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? "Hide" : "Show"} filters
                    </Button>
                    <p className="text-secondary">67,234 results</p>
                </header>
                <main className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5">
                    {showFilters && (
                        <nav
                            className={clsx(
                                "col-span-1",
                                showFilters ? "col-span-1" : "hidden",
                            )}
                        >
                            <div>
                                <h1 className="mb-5 text-secondary">
                                    PROPERTY TYPE
                                </h1>
                                <section className="flex items-center justify-start flex-wrap gap-2">
                                    {p_types.map((p_type) => (
                                        <button
                                            onClick={() => {
                                                if (
                                                    selectedTypes.includes(
                                                        p_type.value,
                                                    )
                                                ) {
                                                    setSelectedTypes(
                                                        selectedTypes.filter(
                                                            (type) =>
                                                                type !==
                                                                p_type.value,
                                                        ),
                                                    );
                                                } else {
                                                    setSelectedTypes([
                                                        ...selectedTypes,
                                                        p_type.value,
                                                    ]);
                                                }
                                            }}
                                            key={p_type.value}
                                            className={clsx(
                                                "flex items-center justify-center border border-zinc-200 rounded-full hover:border-zinc-300 duration-300 ease-in-out px-2 py-1",
                                                selectedTypes.includes(
                                                    p_type.value,
                                                ) && "bg-zinc-200",
                                            )}
                                        >
                                            {p_type.label}
                                        </button>
                                    ))}
                                </section>
                            </div>
                        </nav>
                    )}
                    <div
                        className={clsx(
                            showFilters &&
                                "md:col-span-2 lg:col-span-2 2xl:col-span-4",
                            !showFilters &&
                                "col-span-1 md:col-span-3 lg:col-span-3 2xl:col-span-5",
                        )}
                    >
                        <GeneralFeed
                            region={value}
                            propertyTypes={selectedTypes}
                            filtersAreVisible={showFilters}
                        />
                    </div>
                </main>
            </section>
        </main>
    );
}
