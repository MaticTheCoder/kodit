import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: "Pogoji poslovanja | Kodit",
};

export default function Pogoji() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-[var(--fg)] mb-2">Pogoji poslovanja</h1>
      <p className="text-[var(--muted)] text-sm mb-8">
        Opomba: Ta dokument je osnutek. Pred objavo ga preglej in po potrebi prilagodi.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-[var(--fg-2)] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[var(--fg)]">Splošno</h2>
          <p>
            Ti splošni pogoji urejajo razmerje med Kodit in naročnikom storitev
            izdelave spletnih strani. Z oddajo naročila naročnik potrdi, da se strinja s temi pogoji.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--fg)]">Izvedba storitev</h2>
          <p>
            Po potrditvi naročila in plačilu predračuna (50 % avans) se prične
            izdelava. Preostalih 50 % se plača pred objavo strani.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--fg)]">Lastništvo</h2>
          <p>
            Po celotnem plačilu postane spletna stran last naročnika. Kodit obdrži
            pravico do omembe projekta v referenčnem portfelju, razen če naročnik pisno zahteva drugače.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--fg)]">Vzdrževanje</h2>
          <p>
            Mesečno vzdrževanje vključuje gostovanje, domeno, SSL in manjše popravke vsebine.
            V primeru prenehanja vzdrževanja se naročniku predajo vse datoteke strani.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--fg)]">Kontakt</h2>
          <p>
            Za vprašanja glede pogojev nas kontaktirajte na{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-[var(--fg)] hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>

      <a href="/" className="inline-block mt-10 text-[var(--fg)] hover:underline font-medium">
        ← Nazaj na glavno stran
      </a>
    </main>
  );
}
