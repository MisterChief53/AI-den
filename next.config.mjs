/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     return [
    //       {
    //         source: '/api/:path*',
    //         destination: 'http://aiden.local:5000/:path*',
    //       },
    //     ];
    // },
    experimental: {
        serverMinification: false
    }
};

export default nextConfig;