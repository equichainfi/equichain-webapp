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

export default function PostComments() {
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
                        {/* map for comments */}
                        <div className="felx flex-col">
                            <Link
                                className="text-blue-400 hover:text-primary duration-300"
                                href="/u/50B056"
                            >
                                @50B056
                            </Link>
                            <p className="pl-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quae, voluptatibus.
                            </p>
                            <div className="flex items-center">
                                <div className="flex items-center gap-x-2 pr-2">
                                    <Button className="text-black p-0">
                                        <ThumbsUp size={19} />
                                    </Button>
                                    <p>19</p>
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
                    </section>
                </>
            )}
        </main>
    );
}
