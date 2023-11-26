"use client";

import { PRIMARY_COLOR } from "@/config";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import React from "react";
import ConnectWalletWelcomePage from "./ConnectWalletWelcomePage";

export default function ConnectWalletButton() {
    return (
        <>
            <div className="hidden md:block">
                <ConnectWallet
                    theme={lightTheme({
                        colors: {
                            accentText: PRIMARY_COLOR,
                            accentButtonBg: PRIMARY_COLOR,
                        },
                    })}
                    btnTitle={"Connect Wallet"}
                    modalTitle={"Connect"}
                    auth={{ loginOptional: false }}
                    switchToActiveChain={true}
                    modalSize={"wide"}
                    welcomeScreen={() => <ConnectWalletWelcomePage />}
                    modalTitleIconUrl={"/public/images/logo.svg"}
                    termsOfServiceUrl={"/w/terms"}
                    privacyPolicyUrl={"/w/safety"}
                />
            </div>
            <div className="md:hidden block">
                <ConnectWallet
                    theme={lightTheme({
                        colors: {
                            accentText: PRIMARY_COLOR,
                            accentButtonBg: PRIMARY_COLOR,
                        },
                    })}
                    btnTitle={"Connect Wallet"}
                    modalTitle={"Connect"}
                    auth={{ loginOptional: false }}
                    switchToActiveChain={true}
                    modalSize={"compact"}
                    modalTitleIconUrl={"/public/images/logo.svg"}
                    termsOfServiceUrl={"/w/terms"}
                    privacyPolicyUrl={"/w/safety"}
                />
            </div>
        </>
    );
}

//! Connect Button can be customized only in css with !important
