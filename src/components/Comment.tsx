import { PostComments } from "@/types/post";
import Link from "next/link";
import React from "react";
import { Button } from ".";
import {
    MessageSquare,
    MoreHorizontal,
    Share,
    ThumbsDown,
    ThumbsUp,
} from "lucide-react";

export default function Comment({ comment }: { comment: PostComments }) {
    return (
        <div className="flex flex-col w-full items-start">
            <header className="w-full flex items-center justify-between">
                <Link
                    className="text-blue-400 hover:text-primary duration-300"
                    href={`/u/${comment.author}`}
                >
                    @{comment.author}
                </Link>
                <p className="text-secondary">{comment.date}</p>
            </header>

            <p className="pl-2 text-left">{comment.content}</p>
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
    );
}
