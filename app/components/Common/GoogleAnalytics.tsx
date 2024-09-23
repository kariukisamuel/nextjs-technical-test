"use client";
import React from 'react'
// Google Analytic Logic
import { useEffect } from 'react';
import Script from 'next/script'; // Correct import for Script
import { usePathname } from 'next/navigation'; // Use usePathname to track page changes

const GoogleAnalytics = () => {
  const pathname = usePathname(); // Get the current pathname
  useEffect(() => {
    const handleGtag = () => {
      if (window.gtag) {
        window.gtag('config', 'G-4CF355VYVN', {
          page_path: pathname,
        });
      }
    };

    handleGtag();
  }, [pathname]);
  return (
    <div>
      {/* Google Analytics Setup */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-4CF355VYVN`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CF355VYVN', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </div>
  )
}

export default GoogleAnalytics
