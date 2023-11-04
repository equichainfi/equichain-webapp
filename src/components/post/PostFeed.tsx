/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { Post } from "..";
import { useIntersection } from "@mantine/hooks";

interface PostFeedProps {
    initialPosts: any[];
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

    const posts = initialPosts;
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-4 bg-gray-100 p-10">
            {posts.map((post: any, index: number) => (
                <Post
                    key={index}
                    post={post}
                    commentAmount={post.commentAmount}
                    author={post.author}
                    likeAmount={post.likeAmount}
                    currentLike={post.currentLike}
                    title={post.title}
                    images={post.images}
                    price={post.price}
                    datePosted={post.datePosted}
                    area={post.area}
                    postId={post.postId}
                />
            ))}
        </ul>
    );
}
