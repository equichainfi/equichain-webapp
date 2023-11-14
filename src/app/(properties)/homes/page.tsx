/* eslint-disable indent */
"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
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
import { p_types, regions, status } from "@/lib/static/data";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

interface MinMax {
    min?: string;
    max?: string;
}

export default function Page() {
    const [open, setOpen] = useState<boolean>(false);
    const [showFilters, setShowFilters] = useState<boolean>(true);
    const [value, setValue] = useState<string>("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedPostStatus, setSelectedPostStatus] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<MinMax>();
    const [selectedYearBuilt, setSelectedYearBuilt] = useState<MinMax>();

    console.log(
        selectedTypes,
        selectedPostStatus,
        selectedPrice,
        selectedYearBuilt,
    );

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
                        className="text-black p-0"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? "Hide" : "Show"} filters
                    </Button>
                    <p className="text-secondary">67,234 results</p>
                </header>
                <main className="grid gap-3 w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5">
                    {showFilters && (
                        <nav
                            className={clsx(
                                "col-span-1",
                                showFilters ? "col-span-1" : "hidden",
                            )}
                        >
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        PROPERTY TYPE
                                    </AccordionTrigger>
                                    <AccordionContent>
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
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>STATUS</AccordionTrigger>
                                    <AccordionContent>
                                        <section className="flex items-start justify-start flex-col gap-2">
                                            {status.map((stat) => (
                                                <div
                                                    key={stat.value}
                                                    className="flex items-center justify-start gap-1"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name={stat.value}
                                                        id={stat.value}
                                                        onClick={() =>
                                                            setSelectedPostStatus(
                                                                selectedPostStatus.includes(
                                                                    stat.value,
                                                                )
                                                                    ? selectedPostStatus.filter(
                                                                          (
                                                                              status,
                                                                          ) =>
                                                                              status !==
                                                                              stat.value,
                                                                      )
                                                                    : [
                                                                          ...selectedPostStatus,
                                                                          stat.value,
                                                                      ],
                                                            )
                                                        }
                                                        className="w-4 h-4 cursor-pointer"
                                                    />
                                                    <label>{stat.label}</label>
                                                </div>
                                            ))}
                                        </section>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>PRICE</AccordionTrigger>
                                    <AccordionContent>
                                        <section className="flex items-start justify-start gap-1 p-1 border w-min mb-2">
                                            <label htmlFor="">$</label>
                                            <input
                                                type="number"
                                                name="min"
                                                id="min"
                                                placeholder="Min"
                                                min={0}
                                                step={0.0001}
                                                className="h-5"
                                                onChange={(e) => {
                                                    setSelectedPrice({
                                                        ...selectedPrice,
                                                        min: e.target.value,
                                                    });
                                                }}
                                            />
                                        </section>
                                        <section className="flex items-start justify-start gap-1 p-1 border w-min">
                                            <label htmlFor="">$</label>
                                            <input
                                                type="number"
                                                name="max"
                                                id="max"
                                                placeholder="Max"
                                                className="h-5"
                                                min={selectedPrice?.min}
                                                step={0.0001}
                                                onChange={(e) => {
                                                    setSelectedPrice({
                                                        ...selectedPrice,
                                                        max: e.target.value,
                                                    });
                                                }}
                                            />
                                        </section>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        YEAR BUILT
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <section className="flex items-start justify-start gap-1 p-1 border w-min mb-2">
                                            <label htmlFor="">$</label>
                                            <input
                                                type="number"
                                                name="min"
                                                id="min"
                                                placeholder="Min"
                                                min={0}
                                                step={0.0001}
                                                className="h-5"
                                                onChange={(e) => {
                                                    setSelectedYearBuilt({
                                                        ...selectedYearBuilt,
                                                        min: e.target.value,
                                                    });
                                                }}
                                            />
                                        </section>
                                        <section className="flex items-start justify-start gap-1 p-1 border w-min">
                                            <label htmlFor="">$</label>
                                            <input
                                                type="number"
                                                name="max"
                                                id="max"
                                                placeholder="Max"
                                                className="h-5"
                                                min={selectedYearBuilt?.min}
                                                step={0.0001}
                                                onChange={(e) => {
                                                    setSelectedYearBuilt({
                                                        ...selectedYearBuilt,
                                                        max: e.target.value,
                                                    });
                                                }}
                                            />
                                        </section>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
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
                            status={selectedPostStatus}
                        />
                    </div>
                </main>
            </section>
        </main>
    );
}
