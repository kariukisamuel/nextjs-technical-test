// Import the Metadata type from Next.js
import type { Metadata } from "next";
// Import font variables from the utils file
import { montserrat, roboto } from "./utils/fonts";
// Import global CSS styles
import "./globals.css";
//import speed insights for vercel
import { SpeedInsights } from "@vercel/speed-insights/next"


// Create metadata tags for the application
export const metadata: Metadata = {
  title: "Dreamshare: Share Your Holiday Dream", // Set the title of the page
  description: "Share Your Holiday Dream", // Set the description of the page
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
      </body>
    </html>
  );
}
