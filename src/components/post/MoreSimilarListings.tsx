/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PostMocks } from "@/lib/mocks";
import clsx from "clsx";
import { ChevronDown, ChevronUp, Grid3X3 } from "lucide-react";
import { useState } from "react";
import { Post, ScrollArea, ScrollBar } from "..";
import { PostProps } from "@/types/post";

const MoreSimilarListings = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

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
                                {PostMocks.map(
                                    (post: PostProps, index: number) => (
                                        <Post key={index} postData={post} />
                                    ),
                                )}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </section>
                </>
            )}
        </main>
    );
};

export default MoreSimilarListings;
