import { PostProps } from "@/types/post";
import { Post } from "..";
import clsx from "clsx";

export default function PostFeed({
    initialPosts,
    filtersAreVisible,
}: {
    initialPosts: PostProps[];
    filtersAreVisible: boolean;
}) {
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
        <ul
            className={clsx(
                "grid gap-x-3 gap-y-4 w-full",
                filtersAreVisible &&
                    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4",
                !filtersAreVisible &&
                    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5",
            )}
        >
            {initialPosts.map((post: PostProps, index: number) => (
                <Post key={index} postData={post} />
            ))}
        </ul>
    );
}
