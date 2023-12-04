import { MediaRenderer } from "@thirdweb-dev/react";

export default function ConnectWalletWelcomePage() {
    return (
        <main className="p-6 w-full h-full text-lg">
            <MediaRenderer
                src={
                    "https://ipfs.io/ipfs/QmYjqgYUDnzgvfa1e4WdR7iJWHAnoEmq8ai512x3t91qog?filename=logo.png"
                }
                width={"160px"}
                height={"150px"}
            />
        </main>
    );
}
