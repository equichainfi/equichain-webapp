"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    localWallet,
    trustWallet,
    rainbowWallet,
    phantomWallet,
    en,
} from "@thirdweb-dev/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    // const queryClient = new QueryClient();

    return (
        <ThirdwebProvider
            activeChain="mumbai"
            clientId={process.env.THIRDWEB_CLIENT_ID}
            locale={en()}
            supportedWallets={[
                metamaskWallet({ recommended: true }),
                coinbaseWallet({ recommended: true }),
                walletConnect(),
                localWallet(),
                trustWallet(),
                rainbowWallet(),
                phantomWallet(),
            ]}
            // authConfig={{
            //     authUrl: "/api/auth",
            //     domain: "http://localhost:3000",
            // }}
        >
            {/* <QueryClientProvider client={queryClient}> */}
            <SessionProvider>{children}</SessionProvider>
            {/* </QueryClientProvider> */}
        </ThirdwebProvider>
    );
};

export default Providers;

export { ThirdwebProvider } from "@thirdweb-dev/react";
