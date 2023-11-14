import { PostProps } from "@/types/post";
import { loginpage_images } from "./lib/static/data";

export const PostMocks: PostProps[] = [
    {
        title: "Duplex",
        description: "lore ipsum dolor sit amet",
        author: "Satoshi Nakamoto",
        authorId: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6asd",
        images: [...loginpage_images],
        price: 15,
        datePosted: "21 grudnia 2023 at 12:36 PM",
        area: "new_york_ny",
        postId: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6a69",
        status: "buy_now",
        features: {
            typeValue: "mobile",
            type: "Single Family",
            city: "New York",
            homeSize: "2678 sq. ft",
            lotSize: "7840 sq. ft.",
            pricePerFeet: "187",
            yearBuilt: "2005",
            parking: "2",
            beds: "4",
            baths: "3",
        },
        details: {
            contractAddress: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6a6a",
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
                parentCommentId: "",
                commentId: "1",
                author: "Olivier Kobialka",
                content:
                    "Welcome, next homeowner! Wake up to gorgeous panoramic views of the Sandia Mountains and city lights in this Oppel-Jenkins 2-story home--quick access to Paseo. Outstanding floorplan features 4 bdrms + office, 3 full baths! Elegant Great Room--18 ft. ceiling w/floor to ceiling brick fpl. Premium new flooring. Formal dining, cook's kitchen w/granite countertops, bay window breakfast nook. 2nd living space/loft upstairs and so much more! Check out the feature sheet for more upgrades to this home. Bonus!!! Seller will give $5,000 to buyer for buy downs or closing cost with acceptable offer. Don't miss out",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
            {
                parentCommentId: "1",
                commentId: "2",
                author: "Olivier Kobialka",
                content: "This is a comment number 2",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
        ],
    },
    {
        title: "Duplex",
        description: "lore ipsum dolor sit amet",
        author: "Satoshi Nakamoto",
        authorId: "0x2ced5bc349d9241a314d3739f12f5f6f2bda6a68",
        images: [...loginpage_images],
        price: 15,
        datePosted: "21 grudnia 2023 at 12:36 PM",
        area: "Toronto",
        postId: "0x2ced5bc349d9241a314d3739f1af5f6f2bda6a68",
        status: "buy_now",
        features: {
            typeValue: "single_family",
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
                parentCommentId: "",
                commentId: "1",
                author: "Olivier Kobialka",
                content: "This is a comment",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
            {
                parentCommentId: "1",
                commentId: "2",
                author: "Olivier Kobialka",
                content: "This is a comment number 2",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
        ],
    },
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
        status: "live_auction",
        features: {
            typeValue: "single_family",
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
                parentCommentId: "",
                commentId: "1",
                author: "Olivier Kobialka",
                content: "This is a comment",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
            {
                parentCommentId: "1",
                commentId: "2",
                author: "Olivier Kobialka",
                content: "This is a comment number 2",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
        ],
    },
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
        status: "upcoming_auction",
        features: {
            typeValue: "single_family",
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
                parentCommentId: "",
                commentId: "1",
                author: "Olivier Kobialka",
                content: "This is a comment",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
            {
                parentCommentId: "1",
                commentId: "2",
                author: "Olivier Kobialka",
                content: "This is a comment number 2",
                likes: 123,
                date: "2 grudnia 2023 at 12:36 PM",
            },
        ],
    },
];
