"use client";

import React, { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";

interface GoBackButtonProps {}

const GoBackButton: FC<GoBackButtonProps> = () => {
    const pathName = usePathname();

    return (
        <a href={"/"} className={`${buttonVariants({ variant: "default" })}`}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            {pathName === "/" ? "Home" : "Go Back"}
        </a>
    );
};

export default GoBackButton;
