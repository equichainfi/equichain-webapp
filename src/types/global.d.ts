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
}
