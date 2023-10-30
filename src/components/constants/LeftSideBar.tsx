import Image from "next/image";
import Link from "next/link";
import { FullWhiteSmall } from "../../../public";
import { navOptions } from "./Header";
import { Separator } from "..";

export default function LeftSidebar() {
    return (
        <nav className="w-2/3 xs:w-1/2 h-full bg-white rounded-r-3xl flex flex-col p-3 shadow-2xl">
            <Link href={"/"}>
                <Image
                    src={FullWhiteSmall}
                    alt="equichain logo"
                    className="w-full h-20"
                    width={1}
                />
            </Link>
            <section className="flex flex-col items-start gap-y-2 pt-3">
                <>
                    {navOptions.slice(0, 4).map((btn, index) => (
                        <Link
                            href={btn.link}
                            key={index}
                            className="text-start px-3 py-2"
                        >
                            <div className="LeftSidebarOption">
                                {btn.icon} {btn.value}
                            </div>
                        </Link>
                    ))}
                </>
                <>
                    <Separator className="bg-gray-200" />
                    {navOptions
                        .slice(4, navOptions.length)
                        .map((btn, index) => (
                            <Link
                                href={btn.link}
                                key={index}
                                className="text-start px-3 py-2"
                            >
                                <div className="LeftSidebarOption">
                                    {btn.icon} {btn.value}
                                </div>
                            </Link>
                        ))}
                </>
            </section>
        </nav>
    );
}
