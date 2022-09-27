import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola soy Juan topo tengo entre  31 y 45 años, pero que aparenta 80 por un problema con el alcohol,mido 1,30, Siempre estoy al borde de la muerte o en situaciones vergonzosas, en algunas ocasiones provocadas por Homer Simpson.  </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

