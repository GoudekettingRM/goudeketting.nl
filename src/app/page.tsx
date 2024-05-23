import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import PageHead from '@/components/PageHead';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <PageHead />
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
