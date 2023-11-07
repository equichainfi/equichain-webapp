export type PostProps = {
    title: string;
    description: string;
    author: string;
    authorId: string;
    images: string[];
    price: number;
    datePosted: string;
    area: string;
    postId: string;
    features: PostFeatures;
    details: PostDetails;
    listings: PostListings[];
    offers: PostOffers[];
    influence: PostInfleunce;
    nftActivity: PostNftActivity[];
    comments: PostComments[];
};

export type PostFeatures = {
    type: string;
    city: string;
    homeSize: string;
    lotSize: string;
    pricePerFeet: string;
    yearBuilt: string;
    parking: string;
    beds: string;
    baths: string;
};

export type PostDetails = {
    contractAddress: string;
    tokenId: string;
    tokenStandard: string;
    chain: string;
    isMetadataFrozen: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata?: any;
    creatorEarnings: number;
};

export type PostOffers = {
    price: number;
    usdPrice: number;
    floorDifference: number;
    expiration: string;
    from: string;
};

export type PostComments = {
    parentCommentId: string;
    commentId: string;
    author: string;
    content: string;
    likes: number;
    date: string;
};

export type PostNftActivity = {
    event: string;
    price: number;
    from: string;
    to: string;
    date: string;
};

export type PostInfleunce = {
    likes_amount: number;
    views_amount: number;
    comments_amount: number;
};

export type PostListings = {
    price: number;
    usdPrice: number;
    floorDifference: number;
    expiration: string;
    from: string;
};
