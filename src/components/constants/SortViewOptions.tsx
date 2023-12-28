"use client";

import clsx from "clsx";
import {
    ArrowUpDown,
    ChevronUp,
    Grid2X2,
    Grid3X3,
    LayoutPanelLeft,
    List,
    Search,
    X,
} from "lucide-react";
import { useState } from "react";
import {
    Checkbox,
    Content,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "..";

const SortViewOptions = () => {
    const [view, setView] = useState<string>("grid");
    const [sort, setSort] = useState<string>("recently_added");
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [status, setStatus] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [viewModal, setViewModal] = useState<boolean>(false);
    const [sortModal, setSortModal] = useState<boolean>(false);
    const statusOptions: string[] = ["Listed", "On Auction", "Sold", "New"];
    const viewes = [
        { value: "list", label: "List", icon: <List size={20} /> },
        {
            value: "small_grid",
            label: "Small Grid",
            icon: <Grid3X3 size={20} />,
        },
        { value: "grid", label: "Grid", icon: <Grid2X2 size={20} /> },
        {
            value: "layout",
            label: "Layout",
            icon: <LayoutPanelLeft size={20} />,
        },
    ];
    const sortBys = [
        { value: "recently_added", label: "Recently Added" },
        { value: "oldest", label: "Oldest" },
        { value: "price_low_to_high", label: "Price low to high" },
        { value: "price_high_to_low", label: "Price high to low" },
    ];
    return (
        <>
            <div className="container-flex gap-2 justify-between">
                {/* Status */}
                <section>
                    <Popover>
                        <PopoverTrigger className="px-3 sm:px-4 py-2 sm:py-3 border hover:border-zinc-200 border-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg">
                            Status <ChevronUp className="ml-2" size={20} />
                        </PopoverTrigger>
                        <PopoverContent className="bg-white w-auto">
                            {/* fix on click */}
                            {statusOptions.map(
                                (status: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-start gap-2"
                                    >
                                        <Checkbox
                                            id={status}
                                            className="rounded-lg border p-2"
                                            checked={status.includes(status)}
                                        />
                                        {/* <div> */}
                                        <label htmlFor={status}>{status}</label>
                                        {/* </div> */}
                                    </div>
                                ),
                            )}
                        </PopoverContent>
                    </Popover>
                </section>
                {/* Search */}
                <section className="flex-grow px-3 sm:px-4 py-2 sm:py-3 border hover:border-zinc-200 border-zinc-100 rounded-xl flex items-center justify-start font-medium sm:text-lg">
                    <Search className="mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name or NFT hash"
                        className="flex-grow flex items-center justify-center font-medium sm:text-lg focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </section>
                {/* Sort */}
                <section>
                    <section className="lg:flex hidden">
                        <Select>
                            <SelectTrigger className="px-3 h-full sm:px-4 py-2 sm:py-3 border hover:border-zinc-200 border-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg">
                                <SelectValue placeholder="Sort" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {sortBys.map(
                                    (
                                        sortBy: {
                                            value: string;
                                            label: string;
                                        },
                                        index: number,
                                    ) => (
                                        <SelectItem
                                            key={index}
                                            value={sortBy.value}
                                            className="px-3 my-1 sm:px-4 py-3 sm:py-4 w-full cursor-pointer bg-white hover:bg-zinc-100 rounded-xl flex items-center justify-start font-medium sm:text-lg"
                                        >
                                            {sortBy.label}
                                        </SelectItem>
                                    ),
                                )}
                            </SelectContent>
                        </Select>
                    </section>
                    <section className="lg:hidden flex">
                        <button
                            onClick={() => setSortModal(true)}
                            className="px-3 sm:px-4 py-2 sm:py-3 border hover:border-zinc-200 border-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg"
                        >
                            <ArrowUpDown size={20} />
                        </button>

                        {sortModal && (
                            <nav className="h-screen w-screen absolute bottom-0 left-0 flex-col">
                                <button
                                    className="h-2/3 bg-black bg-opacity-60 w-full"
                                    onClick={() => setSortModal(false)}
                                />

                                <section className="h-1/3 rounded-t-xl w-screen bg-white border hover:border-zinc-200 border-zinc-100 container-flex flex-col">
                                    <header className="flex items-center justify-between w-full">
                                        <h1 className="text-xl font-semibold">
                                            Sort
                                        </h1>
                                        <button
                                            onClick={() => setSortModal(false)}
                                        >
                                            <X size={20} />
                                        </button>
                                    </header>
                                    <section className="pt-3 mb-10">
                                        {sortBys.map(
                                            (
                                                sortBy: {
                                                    value: string;
                                                    label: string;
                                                },
                                                index: number,
                                            ) => (
                                                <button
                                                    key={index}
                                                    value={sortBy.value}
                                                    className={clsx(
                                                        "px-3 my-1 sm:px-4 py-3 sm:py-4 w-full hover:bg-zinc-100 rounded-xl flex items-center justify-start font-medium sm:text-lg",
                                                        sort === sortBy.value &&
                                                            "bg-zinc-100",
                                                    )}
                                                    onClick={() => {
                                                        setSort(sortBy.value);
                                                        setSortModal(false);
                                                    }}
                                                >
                                                    {sortBy.label}
                                                </button>
                                            ),
                                        )}
                                    </section>
                                </section>
                            </nav>
                        )}
                    </section>
                </section>
                {/* Layout */}
                <section className="items-center justify-start gap-2 flex">
                    <section className="lg:flex hidden gap-2">
                        {viewes.map(
                            (
                                v: { value: string; icon: JSX.Element },
                                index: number,
                            ) => (
                                <button
                                    onClick={() => setView(v.value)}
                                    key={index}
                                    className={clsx(
                                        "px-3 sm:px-4 py-3 sm:py-4 border hover:border-zinc-200 border-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg",
                                        view === v.value && "bg-zinc-100",
                                    )}
                                >
                                    {v.icon}
                                </button>
                            ),
                        )}
                    </section>
                    <section className="flex lg:hidden">
                        <button
                            onClick={() => setViewModal(true)}
                            className="px-3 sm:px-4 py-2 sm:py-3 border hover:border-zinc-200 border-zinc-100 rounded-xl flex items-center justify-center font-medium sm:text-lg"
                        >
                            {view === "list" && <List size={20} />}
                            {view === "small_grid" && <Grid3X3 size={20} />}
                            {view === "grid" && <Grid2X2 size={20} />}
                            {view === "layout" && <LayoutPanelLeft size={20} />}
                        </button>

                        {viewModal && (
                            <nav className="h-screen w-screen absolute bottom-0 left-0 flex-col">
                                <button
                                    className="h-2/3 bg-black bg-opacity-60 w-full"
                                    onClick={() => setViewModal(false)}
                                />

                                <section className="h-1/3 rounded-t-xl w-screen bg-white border hover:border-zinc-200 border-zinc-100 container-flex flex-col">
                                    <header className="flex items-center justify-between w-full">
                                        <h1 className="text-xl font-semibold">
                                            View
                                        </h1>
                                        <button
                                            onClick={() => setViewModal(false)}
                                        >
                                            <X size={20} />
                                        </button>
                                    </header>
                                    <section className="pt-3 mb-10">
                                        {viewes.map(
                                            (
                                                v: {
                                                    value: string;
                                                    icon: JSX.Element;
                                                    label: string;
                                                },
                                                index: number,
                                            ) => (
                                                <button
                                                    onClick={() =>
                                                        setView(v.value)
                                                    }
                                                    key={index}
                                                    className={clsx(
                                                        "px-3 my-1 sm:px-4 py-3 sm:py-4 w-full hover:bg-zinc-100 rounded-xl flex items-center justify-start font-medium sm:text-lg",
                                                        view === v.value &&
                                                            "bg-zinc-100",
                                                    )}
                                                >
                                                    {v.icon}
                                                    <p className="ml-2">
                                                        {v.label}
                                                    </p>
                                                </button>
                                            ),
                                        )}
                                    </section>
                                </section>
                            </nav>
                        )}
                    </section>
                </section>
            </div>
            <Content
                searchQuery={searchQuery}
                layoutView={view}
                sortOption={sort}
                filterOption={status}
            />
        </>
    );
};

export default SortViewOptions;
