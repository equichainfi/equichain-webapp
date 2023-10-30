export {};

declare global {
    type NavOptions = {
        value: string;
        link: string;
        icon: JSX.Element;
    }[];

    type LogoRWD = {
        hideOn?: string;
        showOn?: string;
    };
    enum ShowHideOn {
        "0" = "",
        "sm" = "sm:",
        "md" = "md:",
        "lg" = "lg:",
        "xl" = "xl:",
        "xxl" = "2xl:",
    }
}
