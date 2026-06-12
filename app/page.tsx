import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Zakaj from "@/components/Zakaj";
import Paketi from "@/components/Paketi";
import Postopek from "@/components/Postopek";
import Reference from "@/components/Reference";
import OMeni from "@/components/OMeni";
import FAQ from "@/components/FAQ";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Zakaj />
        <Paketi />
        <Postopek />
        <Reference />
        <OMeni />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
