import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Politika zasebnosti | Kodit",
};

export default function Zasebnost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Politika zasebnosti</h1>
      <p className="text-gray-500 text-sm mb-8">
        Opomba: Ta dokument je osnutek. Pred objavo ga preglej in po potrebi prilagodi.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[#1e3a5f]">Upravljavec osebnih podatkov</h2>
          <p>
            Upravljavec osebnih podatkov je Kodit ({siteConfig.email}), ki deluje v skladu z
            Uredbo (EU) 2016/679 (GDPR) in Zakonom o varstvu osebnih podatkov (ZVOP-2).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e3a5f]">Katere podatke zbiramo</h2>
          <p>
            Zbiramo le podatke, ki nam jih posredujete sami prek kontaktnega obrazca: ime,
            e-poštni naslov, telefonska številka (neobvezno) in vsebina sporočila.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e3a5f]">Namen obdelave</h2>
          <p>
            Podatke obdelujemo izključno za namen odgovora na vaše povpraševanje in sklenitev
            morebitnega poslovnega razmerja. Podatkov ne posredujemo tretjim osebam razen, če
            je to nujno za izvedbo storitve (npr. e-poštni ponudnik).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e3a5f]">Hramba podatkov</h2>
          <p>
            Podatke hranimo, dokler je to potrebno za namen, za katerega so bili zbrani, oziroma
            do vašega zahtevka za izbris.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e3a5f]">Vaše pravice</h2>
          <p>
            Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave in prenosljivosti
            podatkov. Za uveljavljanje pravic nas kontaktirajte na{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-[#f97316] hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e3a5f]">Piškotki</h2>
          <p>
            Stran trenutno ne uporablja sledilnih piškotkov. Morebitna uvedba analitike bo
            sporočena z ustreznim obvestilom.
          </p>
        </section>
      </div>

      <a href="/" className="inline-block mt-10 text-[#f97316] hover:underline font-medium">
        ← Nazaj na glavno stran
      </a>
    </main>
  );
}
