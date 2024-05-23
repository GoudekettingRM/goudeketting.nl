import Head from 'next/head';
import Script from 'next/script';

const PageHead = () => {
  return (
    <>
      <Head>
        <title>Robin Goudeketting | goudeketting.nl</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        <meta
          property='og:description'
          content='Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer and the guy who made this website.'
        />
        <meta
          name='description'
          content='Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer and the guy who made this website.'
        />
        <meta property='og:title' content='Robin Goudeketting | goudeketting.nl' key='title' />
        {/* <meta property='og:image' content={'/jordan.webp'} /> */}
        <meta property='og:url' content={'https://goudeketting.nl'} />
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@RMGoudeketting' />
        <meta name='twitter:creator' content='@RMGoudeketting' />
        <meta name='twitter:title' content='Robin Goudeketting | goudeketting.nl' />
        <meta
          name='twitter:description'
          content='Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer and the guy who made this website.'
        />
        {/* <meta name='twitter:image' content='/jordan.webp' /> */}
        <link rel='canonical' href={'https://goudeketting.nl'} />
      </Head>
      <Script id='scheme' type='application/ld+json'>{`
        {
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Robin Goudeketting",
          "url": "https://goudeketting.nl",
          "image": "",
          "sameAs": [
            "https://www.linkedin.com/in/robinmgoudeketting/",
            "https://github.com/GoudekettingRM"
            "https://x.com/RMGoudeketting"
          ],
          "jobTitle": "Full-Stack Developer"
        }
      `}</Script>
    </>
  );
};

export default PageHead;
