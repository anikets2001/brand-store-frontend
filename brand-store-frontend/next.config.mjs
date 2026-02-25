const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ns.yatracdn.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
