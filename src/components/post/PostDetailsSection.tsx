"use client";

import { AlignLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PostBlockchainDetails, PostHomeFeatures } from "..";
import { PostDetails, PostFeatures } from "@/types/post";

export default function PostDetailsSection({
    description,
    author,
    features,
    details,
}: {
    description: string;
    author: string;
    features: PostFeatures;
    details: PostDetails;
}) {
    const [descriptionIsHidden, setDescriptionIsHidden] =
        useState<boolean>(true);

    return (
        <main className="border rounded-xl">
            <header className="border-b rounded-t-xl h-10 gap-x-2 p-3 flex items-center justify-start">
                <AlignLeft size={19} /> Description
            </header>
            <section className="flex flex-col items-start justify-center p-5 gap-y-2">
                <header className="flex gap-x-2">
                    <div>
                        By{" "}
                        <Link
                            className="text-blue-400 hover:text-primary duration-300"
                            href={`/u/${author}`}
                        >
                            {author}
                        </Link>
                    </div>
                    <Image
                        src="https://thespokesman.net/wp-content/uploads/2023/05/Twitter_Verified_Badge.svg.png"
                        alt="Verified"
                        width={20}
                        height={20}
                    />
                </header>
                <div>
                    {descriptionIsHidden ? (
                        <>
                            {description.length > 200 ? (
                                <>
                                    {description.slice(0, 200)}{" "}
                                    <button
                                        className="text-blue-400 p-0 m-0 hover:text-primary duration-300"
                                        onClick={() =>
                                            setDescriptionIsHidden(
                                                !descriptionIsHidden,
                                            )
                                        }
                                    >
                                        ...read more
                                    </button>
                                </>
                            ) : (
                                description
                            )}
                        </>
                    ) : (
                        <section>
                            <p>{description}</p>
                            <button
                                className="text-blue-400 p-0 m-0 hover:text-primary duration-300"
                                onClick={() =>
                                    setDescriptionIsHidden(!descriptionIsHidden)
                                }
                            >
                                Read less
                            </button>
                        </section>
                    )}
                </div>
            </section>
            <PostHomeFeatures postFeatures={features} />
            <PostBlockchainDetails postDetails={details} />
        </main>
    );
}
