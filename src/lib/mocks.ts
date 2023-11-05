import { PostProps } from "@/types/post";
import { loginpage_images } from "./static/data";

export const PostMocks: PostProps[] = [
    {
        title: "Super mansion",
        description: "lore ipsum dolor sit amet",
        author: "Satoshi Nakamoto",
        authorId: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6a68",
        images: [...loginpage_images],
        price: 13.123,
        datePosted: "2 grudnia 2023 at 12:36 PM",
        area: "Miami",
        postId: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6a68",
        features: {
            type: "Single Family",
            city: "Miami",
            homeSize: "2678 sq. ft",
            lotSize: "7840 sq. ft.",
            pricePerFeet: "187",
            yearBuilt: "2005",
            parking: "2",
            beds: "4",
            baths: "3",
        },
        details: {
            contractAddress: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6a68",
            tokenId: "0001",
            tokenStandard: "ERC721",
            chain: "Ethereum",
            isMetadataFrozen: true,
            metadata: {},
            creatorEarnings: 3.5,
        },
        listings: [
            {
                price: 13,
                usdPrice: 12_837_123.53,
                floorDifference: 4,
                expiration: "3 grudnia 2023 at 12:36 PM",
                from: "Olivier Kobialka",
            },
        ],
        offers: [
            {
                price: 13,
                usdPrice: 12_837_123.53,
                floorDifference: 4,
                expiration: "3 grudnia 2023 at 12:36 PM",
                from: "Olivier Kobialka",
            },
        ],
        influence: {
            likes_amount: 123,
            views_amount: 1232,
            comments_amount: 1123,
        },
        nftActivity: [
            {
                event: "Sale",
                price: 54,
                from: "Seller",
                to: "Olivier Kobialka",
                date: "2 grudnia 2023 at 12:36 PM",
            },
        ],
        comments: [
            {
                author: "Olivier Kobialka",
                content: "This is a comment",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
        ],
    },
];
