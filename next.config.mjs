/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/img/**', // Adjust the path as needed or use '/**' for all paths
      },
    ],
  },
};

export default nextConfig;
