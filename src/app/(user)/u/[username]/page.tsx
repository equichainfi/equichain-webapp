interface Params {
    params: {
        username: string;
    };
}

export default function Page({ params: { username } }: Params) {
    return <div className="container-flex">{username}</div>;
}
