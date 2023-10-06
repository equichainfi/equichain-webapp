import Image from "next/image";
import { FullWhite } from "../../public";

export default function Home() {
    return (
        <main>
            <Image
                className="flex justify-center items-center h-screen w-screen"
                src={FullWhite}
                alt="Full Logo"
                width={1000}
                height={1000}
            />
        </main>
    );
}
