import Script from 'next/script';

const PageHead = () => {
  return (
    <>
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
