import { Clock, HelpingHand, ShoppingCart, Tag } from "lucide-react";
import React from "react";
import { Button } from "..";

const PostPricing = () => {
    return (
        <main className="rounded-xl border">
            <header className="flex items-center justify-start gap-x-2 h-12 border-b p-3">
                <Clock size={19} />
                <p>Sale ends 17 stycznia 2024 at 8:46 AM </p>
            </header>
            <section className="p-3 flex flex-col items-start justify-start">
                <p>Current price</p>
                <div className="flex items-end justify-start gap-x-2">
                    <h1 className="text-3xl font-semibold">6060,60 ETH</h1>
                    <p className="text-sm text-zinc-400 pb-1">$12 837 123,53</p>
                </div>
                <div className="flex items-center justify-between mt-3 gap-x-3 w-full">
                    <div className="w-full flex items-center">
                        <Button className="bg-primary text-lg text-white font-semibold w-full rounded-r-none">
                            Buy now
                        </Button>
                        <Button className="flex items-center justify-center bg-primary rounded-l-none border-l">
                            <ShoppingCart size={19} />
                        </Button>
                    </div>

                    <Button className="bg-zinc-200 text-lg text-black font-semibold w-full gap-x-2 flex items-center justify-center">
                        Make offer <Tag size={19} />
                    </Button>
                </div>
                <p className="flex justify-start items-center pt-3 text-[17px] font-semibold">
                    <HelpingHand size={25} />
                    <span className="px-1">Supports creator</span>{" "}
                    <span className="text-zinc-400">
                        This listing is paying the collection creator their
                        suggested creator earnings.
                    </span>
                </p>
            </section>
        </main>
    );
};

export default PostPricing;
