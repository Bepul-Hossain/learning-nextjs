import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
export default function FirstPost() {
    return (
        <Layout>
            <Head>
             <title>First Post rhrr</title>
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`, window.FB)
                }
            /> */}
            <h1>First Post</h1>
        </Layout>
    )
  }