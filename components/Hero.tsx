export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#1e3a5f] via-[#2a5280] to-[#1e3a5f] text-white pt-16">
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
          Maribor · Slovenija
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Spletna stran na ključ —{" "}
          <span className="text-[#f97316]">brez skrbi, brez tehnike.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Izdelava, gostovanje, domena in vzdrževanje. Vse uredimo za vas — vi
          se ukvarjajte s svojim poslom.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Pridobite ponudbo
          </a>
          <a
            href="#paketi"
            className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Poglejte pakete
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto text-center opacity-80">
          <div>
            <div className="text-3xl font-bold text-[#f97316]">7</div>
            <div className="text-sm text-white/70">dni do objave</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#f97316]">1</div>
            <div className="text-sm text-white/70">kontakt za vse</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#f97316]">∞</div>
            <div className="text-sm text-white/70">podpora</div>
          </div>
        </div>
      </div>
    </section>
  );
}
