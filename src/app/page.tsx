import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Authority />
        <Portfolio />
        <Process />
        <Trust />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
