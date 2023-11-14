import {
    PostPriceHistory,
    PostListings,
    PostComments,
    PostOffers,
    PostPricing,
    PostDetailsSection,
    PostItemActivity,
    MoreSimilarListings,
    PostMocks,
} from "@/components";
import {
    Eye,
    Heart,
    HeartHandshake,
    MessageCircle,
    MoreHorizontal,
    Share,
    Snowflake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PostProps } from "@/types/post";

export default function Page() {
    const data: PostProps = PostMocks[0];
    return (
        <main className="flex flex-col container-flex gap-y-3">
            <div className="flex items-start justify-between gap-x-3">
                <section className="w-[40%] h-full flex flex-col gap-y-3">
                    <main className=" border rounded-xl">
                        <header className="border-b rounded-t-xl h-10 bg-zinc-200 p-3 flex items-center justify-between">
                            {data.details.isMetadataFrozen && (
                                <div className="flex items-center justify-start gap-2">
                                    <Image
                                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                                        alt="ETH"
                                        width={30}
                                        height={20}
                                        className="w-5 h-5 rounded-full object-cover object-center duration-700 transition ease-in-out"
                                    />
                                    <Snowflake size={19} />
                                </div>
                            )}

                            <div className="flex items-center justify-end gap-2">
                                <Share size={19} />
                                <div className="flex items-center justify-between gap-x-1">
                                    <p className="text-sm">
                                        {data.influence.likes_amount}
                                    </p>
                                    <Heart size={19} />
                                </div>
                            </div>
                        </header>
                        <div className="flex items-center justify-center p-10">
                            <Image
                                src={data.images[0]}
                                alt="Post Image"
                                width={500}
                                height={500}
                                className="w-full rounded-xl object-cover object-center duration-700 transition ease-in-out"
                            />
                        </div>
                    </main>
                    <PostDetailsSection
                        description={data.description}
                        author={data.author}
                        features={data.features}
                        details={data.details}
                    />
                </section>

                <section className="w-[60%]">
                    <header className="flex flex-col">
                        <section className="p-3 h-10 flex items-center justify-between">
                            <div className="flex items-center justify-start gap-2">
                                <Link href={"/"}>{data.author}</Link>
                                <Image
                                    src="https://thespokesman.net/wp-content/uploads/2023/05/Twitter_Verified_Badge.svg.png"
                                    alt="Verified"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="flex items-center justify-end gap-5">
                                <HeartHandshake size={19} />
                                <Share size={19} />
                                <MoreHorizontal size={19} />
                            </div>
                        </section>
                        <h1 className="px-3 text-3xl font-semibold">
                            #{data.details.tokenId}
                        </h1>
                        <div className="px-3">
                            Owned by{" "}
                            <Link
                                className="text-blue-400 hover:text-primary duration-300"
                                href="/u/Satoshi Nakamoto"
                            >
                                {data.author}
                            </Link>
                        </div>
                        <div className="px-3 py-5 flex items-center justify-start gap-x-5">
                            <div className="flex items-center justify-start gap-x-2">
                                <Eye size={19} /> {data.influence.views_amount}{" "}
                                views
                            </div>
                            <div className="flex items-center justify-start gap-x-2 hover:text-zinc-600 cursor-pointer">
                                <Heart size={19} />{" "}
                                {data.influence.likes_amount} likes
                            </div>
                            <div className="flex items-center justify-start gap-x-2 hover:text-zinc-600 cursor-pointer">
                                <MessageCircle size={19} />{" "}
                                {data.influence.comments_amount} comments
                            </div>
                        </div>
                    </header>
                    <div className="flex flex-col gap-y-3">
                        <PostPricing
                            datePosted={data.datePosted}
                            price={data.listings[0].price}
                            usdPrice={data.listings[0].usdPrice}
                        />
                        <PostPriceHistory />
                        <PostListings listings={data.listings} />
                        <PostOffers offers={data.offers} />
                        <PostComments comments={data.comments} />
                    </div>
                </section>
            </div>
            <PostItemActivity itemActivity={data.nftActivity} />
            <MoreSimilarListings city={data.area} postId={data.postId} />
        </main>
    );
}
