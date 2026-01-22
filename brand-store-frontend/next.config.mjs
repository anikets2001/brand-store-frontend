/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  basePath: '/brand-store',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
