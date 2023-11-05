/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { Post } from "..";
import { useIntersection } from "@mantine/hooks";
import { PostProps } from "@/types/post";

interface PostFeedProps {
    initialPosts: PostProps[];
}

export default function PostFeed({ initialPosts }: PostFeedProps) {
    // const lastPostRef = useRef<HTMLElement>(null);
    // const { ref, entry } = useIntersection({
    //     root: lastPostRef.current,
    //     threshold: 1,
    // });

    // useEffect(() => {
    //     if (entry?.isIntersecting) {
    //         fetchNextPage();
    //     }
    // }, [entry, fetchNextPage]);

    return (
        <main className="px-2 py-5 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
            <h1 className="text-4xl font-semibold mb-5">Properties to buy</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-4">
                {initialPosts.map((post: PostProps, index: number) => (
                    <Post key={index} postData={post} />
                ))}
            </ul>
        </main>
    );
}
