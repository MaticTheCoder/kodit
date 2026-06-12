import { IconBolt, IconSearch, IconBox, IconHandshake } from "./icons";

const koristi = [
  {
    Ikona: IconBolt,
    naslov: "Hitra in moderna stran",
    opis: "Naložena v trenutku, odlično deluje na telefonu. Vaše stranke ne bodo čakale.",
  },
  {
    Ikona: IconSearch,
    naslov: "Vidni na Googlu",
    opis: "Osnovna SEO optimizacija je vključena v vsak paket. Stranke vas bodo našle.",
  },
  {
    Ikona: IconBox,
    naslov: "Vse na enem mestu",
    opis: "Domena, gostovanje, e-pošta, varnostni certifikat. Nič ne urejate sami.",
  },
  {
    Ikona: IconHandshake,
    naslov: "En kontakt za vse",
    opis: "Brez klicnih centrov in avtomatskih odgovorov. Pišete direktno meni.",
  },
];

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

export default function ZakajPostopek() {
  return (
    <section id="zakaj-postopek" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-20">

        {/* ZAKAJ */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529]">
              Zakaj Kodit?
            </h2>

            <p className="text-[#495057] mt-3 leading-relaxed">
              Vse, kar potrebujete za spletno prisotnost — brez tehničnih zapletov.
            </p>
          </div>

          {/* CARDS */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {koristi.map((k) => (
              <div
                key={k.naslov}
                className="bg-white border border-[#ced4da] rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <k.Ikona className="w-6 h-6 mb-2 text-[#212529]" />
                <h3 className="font-semibold text-[#212529] text-sm mb-1">
                  {k.naslov}
                </h3>
                <p className="text-xs text-[#6c757d] leading-relaxed">
                  {k.opis}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* POSTOPEK */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">

          {/* TEXT */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529]">
              Kako poteka?
            </h2>

            <p className="text-[#495057] mt-3 leading-relaxed">
              Enostaven proces od prve ideje do objavljene strani.
            </p>
          </div>

          {/* STEPS */}
          <div className="md:w-1/2 space-y-3">
            {koraki.map((k) => (
              <div
                key={k.st}
                className="flex gap-4 items-start bg-[#f8f9fa] border border-[#ced4da] rounded-xl p-4 hover:bg-white transition"
              >
                <div className="text-lg font-black text-[#495057]">
                  {k.st}
                </div>

                <div>
                  <h3 className="font-semibold text-[#212529]">
                    {k.naslov}
                  </h3>
                  <p className="text-sm text-[#6c757d]">
                    {k.opis}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}