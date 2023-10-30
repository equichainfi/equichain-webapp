"use client";

import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <ClerkProvider
        // appearance={{
        //     baseTheme: dark,
        // }}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ClerkProvider>
    );
};

export default Providers;
