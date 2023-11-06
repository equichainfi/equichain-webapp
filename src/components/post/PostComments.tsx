/* eslint-disable no-unused-vars */
"use client";

import clsx from "clsx";
import {
    ChevronDown,
    ChevronUp,
    MessageSquare,
    MoreHorizontal,
    Share,
    ThumbsDown,
    ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "..";
import { PostComments } from "@/types/post";

export default function PostComments({
    comments,
}: {
    comments: PostComments[];
}) {
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
                        <MessageSquare size={19} />
                        <p>Comments</p>
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
                            <MessageSquare size={19} />
                            <p>Comments</p>
                        </div>
                        {isHidden ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <section
                        className={clsx(
                            "flex p-3 flex-col items-start justify-start",
                            {
                                "opacity-0 h-0": isHidden,
                                "opacity-100 h-auto": !isHidden,
                                "transition-all duration-500 ease-in-out": true,
                            },
                        )}
                    >
                        {comments.map(
                            (comment: PostComments, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-col w-full"
                                >
                                    <header className="w-full flex items-center justify-between">
                                        <Link
                                            className="text-blue-400 hover:text-primary duration-300"
                                            href={`/u/${comment.author}`}
                                        >
                                            @{comment.author}
                                        </Link>
                                        <p className="text-zinc-400">
                                            {comment.date}
                                        </p>
                                    </header>

                                    <p className="pl-3">{comment.content}</p>
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-x-2 pr-2">
                                            <Button className="text-black p-0">
                                                <ThumbsUp size={19} />
                                            </Button>
                                            <p>{comment.likes}</p>
                                            <Button className="text-black p-0">
                                                <ThumbsDown size={19} />
                                            </Button>
                                        </div>
                                        <Button className="text-black gap-x-1 flex items-center">
                                            <MessageSquare size={19} /> Reply
                                        </Button>
                                        <Button className="text-black gap-x-1 flex items-center">
                                            <Share size={19} /> Share
                                        </Button>
                                        <Button className="text-black">
                                            <MoreHorizontal size={19} />
                                        </Button>
                                    </div>
                                </div>
                            ),
                        )}
                    </section>
                </>
            )}
        </main>
    );
}
