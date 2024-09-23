// This comment helps provide type-checking and IntelliSense for Next.js config in supported editors
/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configuration for handling images in Next.js
  images: {
    // Specifies allowed external domains for image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**',
      }, // Allow images to be loaded from this domain
    ]
  },
};

export default nextConfig; // Export the configuration object to be used by Next.js
