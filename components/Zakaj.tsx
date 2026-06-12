const koristi = [
  {
    ikona: "⚡",
    naslov: "Hitra in moderna stran",
    opis: "Naložena v trenutku, odlično deluje na telefonu. Vaše stranke ne bodo čakale.",
  },
  {
    ikona: "🔍",
    naslov: "Vidni na Googlu",
    opis: "Osnovna SEO optimizacija je vključena v vsak paket. Stranke vas bodo našle.",
  },
  {
    ikona: "🧰",
    naslov: "Vse na enem mestu",
    opis: "Domena, gostovanje, e-pošta, varnostni certifikat. Nič ne urejate sami.",
  },
  {
    ikona: "🤝",
    naslov: "En kontakt za vse",
    opis: "Brez klicnih centrov in avtomatskih odgovorov. Pišete direktno meni.",
  },
];

export default function Zakaj() {
  return (
    <section id="zakaj" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Zakaj Kodit?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Vse, kar potrebujete za spletno prisotnost — brez tehničnih zapletov.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {koristi.map((k) => (
            <div
              key={k.naslov}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{k.ikona}</div>
              <h3 className="font-semibold text-[#1e3a5f] text-lg mb-2">
                {k.naslov}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{k.opis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
