export default function Hero() {
  return (
<section id="hero" className="relative min-h-screen flex items-center overflow-hidden">      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="max-w-xl md:w-[42%] text-left">
          <span className="inline-block bg-white/70 text-[#6c757d] text-sm px-4 py-1.5 rounded-full mb-8 border border-[#dee2e6]">
            Maribor · Slovenija
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#212529] mb-6">
            Spletne strani po meri —{" "}
            <span className="text-[#6c757d]">brez skrbi, brez tehnike.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6c757d] mb-10 leading-relaxed">
            Izdelava, gostovanje, domena in vzdrževanje. Vse uredimo za vas — vi
            se ukvarjajte s svojim poslom.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="border border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
            >
              Pridobite ponudbo
            </a>
            <a
              href="#paketi"
              className="border border-[#dee2e6] text-[#343a40] hover:border-[#adb5bd] hover:bg-white/60 font-semibold px-8 py-4 rounded-lg text-base transition-colors text-center"
            >
              Poglejte pakete
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-[#e9ecef] pt-8">
            <div>
              <div className="text-3xl font-bold text-[#212529]">7</div>
              <div className="text-sm text-[#6c757d] mt-1">dni do objave</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#212529]">1</div>
              <div className="text-sm text-[#6c757d] mt-1">kontakt za vse</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#212529]">24h</div>
              <div className="text-sm text-[#6c757d] mt-1">odziv</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
