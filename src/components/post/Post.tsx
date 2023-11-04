/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";

interface PostProps {
    post: string;
    commentAmount: number;
    author: string;
    likeAmount: number;
    currentLike: boolean;
    title: string;
    images: string[];
    price: number;
    datePosted: string;
    area: string;
    postId: string;
}

export default function Post({
    post,
    commentAmount,
    author,
    likeAmount,
    currentLike,
    title,
    images,
    price,
    datePosted,
    area,
    postId,
}: PostProps) {
    console.log("Images" + images);
    return (
        <Link
            href={`/homes/${area}/${postId}`}
            className="bg-white rounded-xl shadow-md flex flex-col"
        >
            <section>
                <Image
                    src={images[0]}
                    alt="Post Image"
                    width={500}
                    height={500}
                    className="w-full h-72 rounded-t-xl object-cover object-center duration-700 transition ease-in-out"
                />
            </section>
            <section className="px-5 py-3 flex flex-col">
                <div className="flex items-center justify-start">
                    <p className="text-lg font-semibold">{price}</p>
                    <Image
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                        alt="ETH"
                        width={30}
                        height={20}
                        className="w-6 h-6 rounded-full object-cover object-center duration-700 transition ease-in-out"
                    />
                    <span className="text-gray-400 text-sm pl-2 flex">
                        {datePosted}
                    </span>
                </div>
            </section>
        </Link>
    );
}
