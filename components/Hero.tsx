import { IconClock, IconHandshake, IconShield } from "./icons";

const stat = [
  { Ikona: IconClock, glava: "7 dni", opis: "do objave strani" },
  { Ikona: IconHandshake, glava: "En kontakt", opis: "za vse — direktno z mano" },
  { Ikona: IconShield, glava: "Brez skrbi", opis: "vzdrževanje vključeno" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hero-overlay"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-24">
        <div className="max-w-xl md:w-[46%] text-left">
          <h1 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[1.1] tracking-tight text-[var(--fg)] mb-5">
            Spletne strani po meri —{" "}
            <span className="text-[var(--muted)]">brez skrbi, brez tehnike.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[var(--muted)] mb-8 leading-relaxed">
            Izdelava, gostovanje, domena in vzdrževanje. Vse uredimo za vas — vi
            se ukvarjajte s svojim poslom.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="border border-[var(--fg)] text-[var(--fg)] hover:bg-[#212529] hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
            >
              Pridobite ponudbo
            </a>
            <a
              href="#paketi"
              className="border border-[var(--border)] text-[var(--fg)] hover:border-[var(--muted-2)] hover:bg-[var(--surface)] font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
            >
              Poglejte pakete
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md border-t border-[var(--border)] pt-8">
            {stat.map((s) => (
              <div key={s.glava} className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-2">
                <s.Ikona className="w-7 h-7 shrink-0 text-[var(--fg)]" />
                <div>
                  <div className="font-bold text-[var(--fg)] leading-tight">{s.glava}</div>
                  <div className="text-sm text-[var(--muted)] leading-tight">{s.opis}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
