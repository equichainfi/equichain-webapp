/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import React from "react";

interface PostProps {
    totalSupply: number;
    chain: string;
    image: string;
    title: string;
    description: string;
    price: number;
    lastOffer: number;
}

const Post = ({
    totalSupply,
    chain,
    image,
    title,
    description,
    price,
    lastOffer,
}: PostProps) => {
    return (
        <button className="w-64 rounded-xl border-red-500 border items-start justify-between flex flex-col">
            <Image
                className=""
                src={image}
                alt={title}
                width={384}
                height={384}
            />
            <section className="border-t border-zinc-200 p-3">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm text-zinc-400">{description}</p>
                <p className="text-sm text-zinc-400">{price}</p>
                <p className="text-sm text-zinc-400">{lastOffer}</p>
            </section>
        </button>
    );
};

export default Post;
