import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans:400,500,600,700,800,900|Playfair+Display:400,500,600,700,800,900&amp;subset=latin" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
            </Head>
            <body className="antialiased bg-body text-body font-body">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
