export {};

declare global {
    interface Post {
        title: string;
        slug: string;
        desription: string;
        images: string[];

        status: "pending" | "active" | "sold" | "inactive";
        isVerified: boolean;
        price: number;
        chain: string; //todo enum

        area: string;

        createdAt: string; //todo date
        updatedAt: string; //todo date

        purpose: string; //todo enum

        views: number;
        saves: number;
        lastViewed: string; //todo date
        listedBy: string; //todo enum (user, admin)
    }
}
