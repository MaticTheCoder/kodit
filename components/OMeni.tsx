export default function OMeni() {
  return (
    <section id="omeni" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a5280] flex items-center justify-center text-white text-5xl font-bold">
              M
            </div>
          </div>

          <div>
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wide">
              O meni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-4">
              Matic — razvijalec, ki razloži stvari po domače
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sem študent računalništva in razvijalec z izkušnjami v IT podpori.
              Specializiran sem za moderne spletne strani — hitre, pregledne in
              takšne, ki resnično delajo za vaše podjetje.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Z mano govorite direktno z osebo, ki vašo stran dejansko naredi.
              Brez posrednikov, brez klicnih centrov — samo jasen dogovor in
              rezultat, na katerega ste ponosni.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-[#1e3a5f] hover:bg-[#2a5280] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Stopimo v stik
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
