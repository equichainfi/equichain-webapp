"use client";

import { PRIMARY_COLOR } from "@/config";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import React from "react";
import ConnectWalletWelcomePage from "./ConnectWalletWelcomePage";

export default function ConnectWalletButton() {
    const showClassNames = [
        { className: "hidden md:block" },
        { className: "md:hidden block" },
    ];
    return showClassNames.map((wallet, index: number) => (
        <div key={index} className={wallet.className}>
            <ConnectWallet
                className="connect-wallet-button"
                theme={lightTheme({
                    colors: {
                        accentText: PRIMARY_COLOR,
                        accentButtonBg: PRIMARY_COLOR,
                    },
                })}
                btnTitle={"Connect"}
                modalTitle={"Connect"}
                auth={{ loginOptional: true }}
                switchToActiveChain={true}
                modalSize={"wide"}
                welcomeScreen={() => <ConnectWalletWelcomePage />}
                modalTitleIconUrl={"/public/images/logo.svg"}
                termsOfServiceUrl={"/w/terms"}
                privacyPolicyUrl={"/w/safety"}
            />
        </div>
    ));
}

//! Connect Button can be customized only in css with !important
