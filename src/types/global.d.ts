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

        createdAt: Date;
        updatedAt: Date;

        purpose: string; //todo enum

        views: number;
        saves: number;
        lastViewed: Date;
        listedBy: string; //todo enum (user, admin)
    }
}
