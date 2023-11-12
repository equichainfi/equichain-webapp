/* eslint-disable indent */
import { PostFeed } from "..";
import { PostMocks } from "@/lib/mocks/Mocks";

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
                      propertyTypes.includes(post.features.type),
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
