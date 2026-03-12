import Head from "next/head";
export default function Meta({ title, keywords, description }) {
    const homepage = "https://reinny-m.github.io/Make-Your-Resume-Online-";
    const logo = "/assets/logo.png";
    const fevicon = "/assets/logo.png";
    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+254798791235",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Reinhard M. Babere",
                "foundingDate": "2026",
                "foundingLocation": "KE",
                "email": "reinhardbabere@gmail.com",
                "telephone": "+254798791235",
                "areaServed": "Worldwide",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Opensource",
                "owns": "Reinhard M. Babere",
                "publishingPrinciples": ${homepage},
                "slogan": "Free resume maker for job seekers worldwide"
            }`
        }
    }
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="Reinhard Resume Maker" />
            <meta type="author" content="Reinhard M. Babere" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}
