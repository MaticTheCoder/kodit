import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Zakaj from "@/components/ZakajInKako";
import Paketi from "@/components/Paketi";
import Reference from "@/components/Reference";
import OMeni from "@/components/OMeni";
import FAQ from "@/components/FAQ";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import ScrollSnapHero from "@/components/ScrollSnapHero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
         <ScrollSnapHero />
       <section className="min-h-screen">
  <Hero />
</section>

<section id="zakaj">
  <Zakaj />
</section>

        <Paketi />

        <Reference />
        <OMeni />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
