/* eslint-disable no-unused-vars */
/* eslint-disable indent */
"use client";

import React, { useEffect, useState } from "react";
import Post from "./Content/Post";
import clsx from "clsx";

interface ContentProps {
    searchQuery: string;
    layoutView: string;
    sortOption: string;
    filterOption: string;
}

const Content = ({
    // searchQuery,
    layoutView, // sortOption,
    // filterOption,
}: ContentProps) => {
    const [data, setData] = useState<string>("");
    useEffect(() => {
        const dataFromLS: string | null =
            localStorage.getItem("selectedOption");
        setData(dataFromLS as string);
        console.log(data);
    }, [data]);

    return (
        <div
            className={clsx(
                "container-flex",
                layoutView === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                    : layoutView === "list"
                      ? "flex flex-col"
                      : layoutView === "small_grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                        : layoutView === "layout"
                          ? ""
                          : "",
            )}
        >
            <Post
                totalSupply={1}
                chain="Ethereum"
                image="https://i.seadn.io/gae/hhEV5Myw7USlZvn3CHFgDqEkanZ7-fD0ePoyiiPllRgmJQAX2YH1LshMl1HIVMlMZmfQql--y_IlGYrViXmpuUN6vQniORDUPfUF?auto=format&dpr=1&w=384"
                title="The First Supper"
                description="The First Supper is a 1/1 NFT that was created by the artist, Beeple."
                price={1}
                lastOffer={1}
            />
            <Post
                totalSupply={1}
                chain="Ethereum"
                image="https://i.seadn.io/gae/hhEV5Myw7USlZvn3CHFgDqEkanZ7-fD0ePoyiiPllRgmJQAX2YH1LshMl1HIVMlMZmfQql--y_IlGYrViXmpuUN6vQniORDUPfUF?auto=format&dpr=1&w=384"
                title="The First Supper"
                description="The First Supper is a 1/1 NFT that was created by the artist, Beeple."
                price={1}
                lastOffer={1}
            />
            <Post
                totalSupply={1}
                chain="Ethereum"
                image="https://i.seadn.io/gae/hhEV5Myw7USlZvn3CHFgDqEkanZ7-fD0ePoyiiPllRgmJQAX2YH1LshMl1HIVMlMZmfQql--y_IlGYrViXmpuUN6vQniORDUPfUF?auto=format&dpr=1&w=384"
                title="The First Supper"
                description="The First Supper is a 1/1 NFT that was created by the artist, Beeple."
                price={1}
                lastOffer={1}
            />
            <Post
                totalSupply={1}
                chain="Ethereum"
                image="https://i.seadn.io/gae/hhEV5Myw7USlZvn3CHFgDqEkanZ7-fD0ePoyiiPllRgmJQAX2YH1LshMl1HIVMlMZmfQql--y_IlGYrViXmpuUN6vQniORDUPfUF?auto=format&dpr=1&w=384"
                title="The First Supper"
                description="The First Supper is a 1/1 NFT that was created by the artist, Beeple."
                price={1}
                lastOffer={1}
            />
            <Post
                totalSupply={1}
                chain="Ethereum"
                image="https://i.seadn.io/gae/hhEV5Myw7USlZvn3CHFgDqEkanZ7-fD0ePoyiiPllRgmJQAX2YH1LshMl1HIVMlMZmfQql--y_IlGYrViXmpuUN6vQniORDUPfUF?auto=format&dpr=1&w=384"
                title="The First Supper"
                description="The First Supper is a 1/1 NFT that was created by the artist, Beeple."
                price={1}
                lastOffer={1}
            />
            <Post
                totalSupply={1}
                chain="Ethereum"
                image="https://i.seadn.io/gae/hhEV5Myw7USlZvn3CHFgDqEkanZ7-fD0ePoyiiPllRgmJQAX2YH1LshMl1HIVMlMZmfQql--y_IlGYrViXmpuUN6vQniORDUPfUF?auto=format&dpr=1&w=384"
                title="The First Supper"
                description="The First Supper is a 1/1 NFT that was created by the artist, Beeple."
                price={1}
                lastOffer={1}
            />
        </div>
    );
};

export default Content;
