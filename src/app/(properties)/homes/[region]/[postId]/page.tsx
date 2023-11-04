import {
    PostPriceHistory,
    PostListings,
    PostComments,
    PostOffers,
    PostPricing,
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

export default function Page() {
    return (
        <main className="flex items-start justify-between container-flex gap-x-3">
            <section className="w-[40%] h-full border rounded-xl">
                <header className="border-b rounded-t-xl h-10 bg-zinc-200 p-3 flex items-center justify-between">
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
                    <div className="flex items-center justify-end gap-2">
                        <Share size={19} />
                        <div className="flex items-center justify-between gap-x-1">
                            <p className="text-sm">24</p>
                            <Heart size={19} />
                        </div>
                    </div>
                </header>
                <div className="flex items-center justify-center p-10">
                    <Image
                        src="https://i.seadn.io/gae/pWb4my976z4DWl1q5wc2GzIE7rMw-8uI9mFUNgv0X8JLUEeKx8hVb3kXU9RSps09hCNgOLAvIoR3Ram5jfYRutXfcRYn775xIunByw?auto=format&dpr=1&w=1000"
                        alt="Post Image"
                        width={500}
                        height={500}
                        className="w-full rounded-xl object-cover object-center duration-700 transition ease-in-out"
                    />
                </div>
            </section>

            <section className="w-[60%]">
                <header className="flex flex-col">
                    <section className="p-3 h-10 flex items-center justify-between">
                        <div className="flex items-center justify-start gap-2">
                            <Link href={"/"}>Bored Ape Yacht Club</Link>
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
                    <h1 className="px-3 text-3xl font-semibold">#00001</h1>
                    <div className="px-3">
                        Owned by{" "}
                        <Link
                            className="text-blue-400 hover:text-primary duration-300"
                            href="/u/Satoshi Nakamoto"
                        >
                            Satoshi Nakamoto
                        </Link>
                    </div>
                    <div className="px-3 py-5 flex items-center justify-start gap-x-5">
                        <div className="flex items-center justify-start gap-x-2">
                            <Eye size={19} /> 18.1K views
                        </div>
                        <div className="flex items-center justify-start gap-x-2 hover:text-zinc-600 cursor-pointer">
                            <Heart size={19} /> 1.2K likes
                        </div>
                        <div className="flex items-center justify-start gap-x-2 hover:text-zinc-600 cursor-pointer">
                            <MessageCircle size={19} /> 60 comments
                        </div>
                    </div>
                </header>
                <PostPricing />
                <PostPriceHistory />
                <PostListings />
                <PostOffers />
                <PostComments />
            </section>
        </main>
    );
}
