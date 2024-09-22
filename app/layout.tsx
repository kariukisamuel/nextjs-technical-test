// Import the Metadata type from Next.js
import type { Metadata } from "next";
// Import font variables from the utils file
import { montserrat, roboto } from "./utils/fonts";
// Import global CSS styles
import "./globals.css";



import { GoogleTagManager } from '@next/third-parties/google'


// Create metadata tags for the application

export const metadata: Metadata = {
  title: "Home | Dreamshare", // Title of the page
  description:
    "Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.",
  keywords:
    "Share your ultimate holiday vision, find the perfect partner, bring it to life, explore opportunities, transform your dream vacation, reality, ideal companion, travel partner, vacation planning, adventure, explore, like-minded people, community, social network, Ultimate holiday vision, Perfect travel partner, Dream vacation companion, Transform vacation dreams, Ideal holiday companion, Share holiday vision, Find vacation partner, Dream trip transformation, Ideal vacation match, Explore holiday opportunities, Ultimate travel experience, Vacation planning partner, Perfect holiday match, Dream vacation reality, Find your travel companion",
  openGraph: {
    title: "Dreamshare",
    description:
      "Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.",
    siteName: "Dreamshare",
    url: "https://nextjs-tech.vercel.app",
    images: [
      {
        url: '/hero/hero-background.jpg', // Assuming the image is in the public folder
        width: 1200,
        height: 630,
        alt: 'An awesome image for social sharing',
      },
    ],
    locale: 'en_US',
    type: 'website',
},
  twitter: {
    card: "summary_large_image",
    title: "Dreamshare",
    description:
    "Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.",
    images: '/hero/hero-background.jpg',
  },
};

// Export the RootLayout component as the default export
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Return the JSX structure for rendering the root layout
  return (
    <html lang="en">
      <body
        // Set the body element's width to 100%, background color to white, and overflow style to hidden
        className={`w-full bg-white overflow-hiddden ${montserrat} ${roboto}`}
      >
        {/* Render the children content within the body element */}
        {children}

        <GoogleTagManager gtmId="G-4CF355VYVN" />
      </body>
    </html>
  );
}
