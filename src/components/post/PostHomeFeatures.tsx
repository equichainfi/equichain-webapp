"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, ListTodo } from "lucide-react";
import { useState } from "react";

export default function PostHomeFeatures() {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const features = [
        { feature: "Type", value: "Single Family" },
        { feature: "City", value: "New York" },
        { feature: "Home size", value: "2678 sq. ft" },
        { feature: "Lot size", value: "7840 sq. ft." },
        { feature: "Price per feet", value: "$182" },
        { feature: "Beds", value: "3" },
        { feature: "Baths", value: "2" },
    ];
    return (
        <main className="border-t">
            {isHidden && (
                <button
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                    className={clsx(
                        "flex items-center justify-between gap-x-2 h-12 p-3 w-full text-black",
                        {
                            "border-b-0": isHidden,
                        },
                    )}
                >
                    <div className="flex items-center justify-start gap-x-2">
                        <ListTodo size={19} />
                        <p>Features</p>
                    </div>
                    {isHidden ? <ChevronUp /> : <ChevronDown />}
                </button>
            )}

            {!isHidden && (
                <>
                    <button
                        onClick={() => {
                            setIsHidden(!isHidden);
                        }}
                        className={clsx(
                            "flex items-center justify-between gap-x-2 h-12 border-b p-3 w-full text-black",
                            {
                                "border-b-0": isHidden,
                            },
                        )}
                    >
                        <div className="flex items-center justify-start gap-x-2">
                            <ListTodo size={19} />
                            <p>Features</p>
                        </div>
                        {isHidden ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <section
                        className={clsx("p-3 grid grid-cols-4 gap-3", {
                            "opacity-0 h-0": isHidden,
                            "opacity-100 h-auto": !isHidden,
                            "transition-all duration-500 ease-in-out": true,
                        })}
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col">
                                <p className="text-sm text-zinc-500">
                                    {feature.feature}
                                </p>
                                <p>{feature.value}</p>
                            </div>
                        ))}
                    </section>
                </>
            )}
        </main>
    );
}
