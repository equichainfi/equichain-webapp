export {};

declare global {
    type NavOptions = {
        value: string;
        link: string;
    }[];

    type LogoRWD = {
        hideOn?: string;
        showOn?: string;
    };
}
