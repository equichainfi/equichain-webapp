import { Logo } from "../../public";
import Image from "next/image";

const Loading = () => {
    return (
        <main className="flex justify-center items-center h-screen w-screen">
            <Image
                className="animate-spin"
                src={Logo}
                alt="Logo"
                width={650}
                height={650}
            />
        </main>
    );
};

export default Loading;
