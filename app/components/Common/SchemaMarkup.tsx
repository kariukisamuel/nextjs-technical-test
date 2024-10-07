import Head from 'next/head';

const SchemaMarkup = () => {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Organization",
        "@id": "#Organization",
        "url": "https://nextjs-tech.vercel.app/",
        "legalName": "Dreamshare",
        "name": "Dreamshare",
        "description": "Share Your Holiday Dream And find the perfect partner to fulfill it.",
        "logo": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Biashara Street",
            "addressLocality": "Platinum Plaza",
            "addressRegion": "Nairobi",
            "addressCountry": "Kenya",
            "postalCode": "020"
        },
        "sameAs": [
            "https://web.facebook.com/",
            "https://www.youtube.com/",
            "https://www.instagram.com/",
            "https://www.linkedin.com/",
            "https://www.x.com/"
        ]
    };
    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Head>
    )
}

export default SchemaMarkup
