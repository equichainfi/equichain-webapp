import { PostFeed } from "..";
import { PostMocks } from "@/lib/mocks";

export default function GeneralFeed() {
    // todo: implement db.posts.findMany() and pass the result to PostFeed
    return <PostFeed initialPosts={PostMocks} />;
}
