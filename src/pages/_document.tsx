import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html data-theme="emerald" lang="en">
            <Head />
            <body className="bg-slate-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
