const koraki = [
  {
    st: "01",
    naslov: "Pogovor",
    opis: "Poveste, kaj počnete in kaj želite. 15 minut, po telefonu ali na kavi.",
  },
  {
    st: "02",
    naslov: "Predlog",
    opis: "V nekaj dneh dobite osnutek izgleda in fiksno ceno — brez presenečenj.",
  },
  {
    st: "03",
    naslov: "Izdelava",
    opis: "Stran naredim, vi samo potrdite. Spremembe upoštevamo sproti.",
  },
  {
    st: "04",
    naslov: "Objava in skrb",
    opis: "Stran objavim, uredim domeno in gostovanje ter skrbim, da vse deluje.",
  },
];

export default function Postopek() {
  return (
    <section id="postopek" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Kako poteka
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Enostaven proces — od prvega pogovora do objavljene strani.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {koraki.map((k, i) => (
            <div key={k.st} className="relative">
              {i < koraki.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#1e3a5f]/20 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                <div className="text-4xl font-black text-[#1e3a5f]/10 mb-2">
                  {k.st}
                </div>
                <h3 className="font-semibold text-[#1e3a5f] text-lg mb-2">
                  {k.naslov}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{k.opis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
