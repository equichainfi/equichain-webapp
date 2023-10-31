import { loginpage_images } from "../static/data";

export const randomImage = (): string => {
    return loginpage_images[
        Math.floor(Math.random() * loginpage_images.length)
    ];
};
