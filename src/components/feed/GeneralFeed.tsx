/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
import { PostProps } from "@/types/post";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostFeed, PostMocks } from "..";

export default function GeneralFeed({
    region,
    propertyTypes,
    filtersAreVisible,
    status,
}: {
    region: string;
    propertyTypes: string[];
    filtersAreVisible: boolean;
    status: string[];
}) {
    // const [results, setResults] = useState<PostProps[]>([]);

    // useEffect(() => {
    //     const posts = axios
    //         .get("/api/posts")
    //         .then((res) => res.data)
    //         .catch((err) => console.log(err));
    //     setResults(posts);
    // }, [results]);
    // console.log(results);

    const filteredPosts =
        propertyTypes.length > 0
            ? PostMocks.filter(
                  (post) =>
                      post.area.includes(region) &&
                      propertyTypes.includes(post.features.typeValue),
              )
            : PostMocks.filter((post) => post.area.includes(region));

    return (
        <PostFeed
            initialPosts={filteredPosts}
            filtersAreVisible={filtersAreVisible}
        />
    );
}

// todo: implement db.posts.findMany() and pass the result to PostFeed
