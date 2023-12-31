import Image from "next/image";
import Link from "next/link";
import { FullWhite } from "../../../public";

export default function Logo({ hideOn, showOn }: LogoRWD) {
    return (
        <>
            <Link
                href="/"
                className={`items-center ${showOn}flex justify-center ${hideOn}hidden p-0`}
            >
                <Image
                    src={FullWhite}
                    className="cursor-pointer sm:w-56 md:w-64"
                    alt="equichain logo"
                    width={1}
                />
            </Link>
        </>
    );
}
