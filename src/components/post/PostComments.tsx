/* eslint-disable no-unused-vars */
"use client";

import { PostComments } from "@/types/post";
import clsx from "clsx";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Comment } from "..";

export default function PostComments({
    comments,
}: {
    comments: PostComments[];
}) {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [showReplies, setShowReplies] = useState<boolean>(false);

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
                        {comments
                            .filter(
                                (comment: PostComments) =>
                                    comment.parentCommentId === "",
                            )
                            .map((comment: PostComments, index: number) => (
                                <>
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setShowReplies(!showReplies);
                                        }}
                                    >
                                        <Comment comment={comment} />
                                    </button>
                                    {showReplies && (
                                        <section className="pl-6 border-l ">
                                            {comments
                                                .filter(
                                                    (
                                                        subComment: PostComments,
                                                    ) =>
                                                        subComment.parentCommentId ===
                                                        comment.commentId,
                                                )
                                                .map(
                                                    (
                                                        subComment: PostComments,
                                                        index: number,
                                                    ) => (
                                                        <>
                                                            <button key={index}>
                                                                <Comment
                                                                    comment={
                                                                        subComment
                                                                    }
                                                                />
                                                            </button>
                                                        </>
                                                    ),
                                                )}
                                        </section>
                                    )}
                                </>
                            ))}
                    </section>
                </>
            )}
        </main>
    );
}
