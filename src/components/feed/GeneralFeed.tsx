/* eslint-disable indent */
import { PostFeed } from "..";
import { PostMocks } from "@/components";

export default function GeneralFeed({
    region,
    propertyTypes,
    filtersAreVisible,
}: {
    region: string;
    propertyTypes: string[];
    filtersAreVisible: boolean;
}) {
    const filteredPosts =
        propertyTypes.length > 0
            ? PostMocks.filter(
                  (post) =>
                      post.area.includes(region) &&
                      propertyTypes.includes(post.features.typeValue),
              )
            : PostMocks.filter((post) => post.area.includes(region));

    console.log(filteredPosts);
    return (
        <PostFeed
            initialPosts={filteredPosts}
            filtersAreVisible={filtersAreVisible}
        />
    );
}

// todo: implement db.posts.findMany() and pass the result to PostFeed
