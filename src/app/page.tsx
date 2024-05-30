import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import SkipToContentLink from '@/components/SkipToContentLink';

export default function Home() {
  return (
    <>
      <SkipToContentLink target='#portfolio' />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
