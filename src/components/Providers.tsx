"use client";

import { ACTIVE_CHAIN } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    ThirdwebProvider,
    coinbaseWallet,
    en,
    localWallet,
    metamaskWallet,
    phantomWallet,
    rainbowWallet,
    trustWallet,
    walletConnect,
} from "@thirdweb-dev/react";
import dotenv from "dotenv";
import React from "react";
dotenv.config();

const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <ThirdwebProvider
            activeChain={ACTIVE_CHAIN}
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
                // smartWallet(metamaskWallet(), smartWalletConfig),
                // smartWallet(walletConnect(), smartWalletConfig)
            ]}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThirdwebProvider>
    );
};

export default Providers;

export { ThirdwebProvider } from "@thirdweb-dev/react";
