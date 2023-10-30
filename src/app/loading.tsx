import Image from "next/image";
import { LogoPlain } from "../../public";

export default function Loading() {
    return (
        <main className="flex justify-center items-center h-screen w-screen">
            <Image
                className="animate-spin"
                src={LogoPlain}
                alt="Logo"
                width={650}
                height={650}
            />
        </main>
    );
}
