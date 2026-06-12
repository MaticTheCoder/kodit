export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#343a40] via-[#212529] to-[#212529] text-white pt-16">
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <span className="inline-block bg-white/10 text-[#ced4da] text-sm px-4 py-1.5 rounded-full mb-6 border border-white/15">
          Maribor · Slovenija
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Spletna stran na ključ —{" "}
          <span className="text-[#adb5bd]">brez skrbi, brez tehnike.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#ced4da] max-w-2xl mx-auto mb-10">
          Izdelava, gostovanje, domena in vzdrževanje. Vse uredimo za vas — vi
          se ukvarjajte s svojim poslom.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="bg-white hover:bg-[#e9ecef] text-[#212529] font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Pridobite ponudbo
          </a>
          <a
            href="#paketi"
            className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Poglejte pakete
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-[#adb5bd]">7</div>
            <div className="text-sm text-[#6c757d]">dni do objave</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#adb5bd]">1</div>
            <div className="text-sm text-[#6c757d]">kontakt za vse</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#adb5bd]">∞</div>
            <div className="text-sm text-[#6c757d]">podpora</div>
          </div>
        </div>
      </div>
    </section>
  );
}
