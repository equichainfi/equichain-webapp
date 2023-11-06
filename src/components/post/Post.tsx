"use client";

import { PostProps } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

export default function Post({ postData }: { postData: PostProps }) {
    return (
        <Link
            href={`/homes/${postData.area}/${postData.postId}`}
            className="bg-white rounded-xl shadow-md flex flex-col min-w-fit"
        >
            <section>
                <Image
                    src={postData.images[0]}
                    alt={postData.title}
                    width={500}
                    height={500}
                    className="w-full h-72 rounded-t-xl object-cover object-center duration-700 transition ease-in-out"
                />
            </section>
            <section className="px-5 py-3 flex flex-col">
                <div className="flex items-center justify-start">
                    <p className="text-lg font-semibold">{postData.price}</p>
                    <Image
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                        alt="ETH"
                        width={30}
                        height={20}
                        className="w-6 h-6 rounded-full object-cover object-center duration-700 transition ease-in-out"
                    />
                    <span className="text-gray-400 text-sm pl-2 flex">
                        {postData.datePosted}
                    </span>
                </div>
            </section>
        </Link>
    );
}
