import { Footer, Header, Providers } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EquiChain",
    description: "Real Estate on Blockchain",
};

export default function RootLayout({
    children, // authModal,
}: {
    children: React.ReactNode;
    // authModal: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Header />
                    {/* AUTH FLOW */}
                    {/* {authModal} */}

                    {children}
                    <Footer />

                    {/* <Toaster /> */}
                </Providers>
            </body>
        </html>
    );
}
