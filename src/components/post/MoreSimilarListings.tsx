"use client";

import { PostMocks } from "@/components";
import clsx from "clsx";
import { ChevronDown, ChevronUp, Grid3X3 } from "lucide-react";
import { useState } from "react";
import { Post, ScrollArea, ScrollBar } from "..";
import { PostProps } from "@/types/post";

const MoreSimilarListings = ({
    city,
    postId,
}: {
    city: string;
    postId: string;
}) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [hasSimilarListings, setHasSimilarListings] =
        useState<boolean>(false);

    return (
        <>
            {!hasSimilarListings ? (
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
                                <Grid3X3 size={19} />
                                <p>Similar Listings</p>
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
                                    <Grid3X3 size={19} />
                                    <p>Similar Listings</p>
                                </div>
                                {isHidden ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <section>
                                <ScrollArea>
                                    <div className="flex w-full gap-x-3 items-center justify-start p-3">
                                        {/*todo fix this logic */}
                                        {PostMocks.filter(
                                            (post: PostProps) =>
                                                post.area === city &&
                                                post.postId !== postId,
                                        ).map(
                                            (post: PostProps, index: number) =>
                                                PostMocks.length > 0 && (
                                                    <Post
                                                        key={index}
                                                        postData={post}
                                                    />
                                                ),
                                            PostMocks.length === 0 &&
                                                setHasSimilarListings(false),
                                        )}
                                    </div>
                                    <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                            </section>
                        </>
                    )}
                </main>
            ) : (
                <section className="w-full flex items-center justify-center my-10">
                    <h1 className="text-xl font-semibold">
                        No similar listings found...
                    </h1>
                </section>
            )}
        </>
    );
};

export default MoreSimilarListings;
