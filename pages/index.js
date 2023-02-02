import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    // home === true
    <Layout home> 
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I wish you are happy</p>
      </section>
      <h1>
          Read <Link href="/posts/first-post">first page</Link>
      </h1>
    </Layout>
  );
}