/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "i.pinimg.com",
            "cryptologos.cc",
            "i.seadn.io",
            "thespokesman.net",
            "images.crowdspring.com",
        ],
    },
    experimental: {
        serverComponents: true,
    },
};

module.exports = nextConfig;
