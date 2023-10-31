"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/Button";

export default function GoBackButton() {
    const pathName = usePathname();

    return (
        <a href={"/"} className={`${buttonVariants({ variant: "ghost" })}`}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            {pathName === "/" ? "Home" : "Go Back"}
        </a>
    );
}
