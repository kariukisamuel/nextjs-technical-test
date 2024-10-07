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
  async headers() {
    return [
      {
        // Apply this header to all routes
        source: '/(.*)', // Adjust if needed to target specific routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https://image.tmdb.org data:; object-src 'none'; frame-ancestors 'none';",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // This value prevents the page from being displayed in a frame
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevents the browser from MIME-sniffing
          }
        ],
      },
    ];
  }


};

export default nextConfig; // Export the configuration object to be used by Next.js
