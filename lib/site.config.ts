export const siteConfig = {
  name: "Kodit",
  tagline: "Spletna stran na ključ — brez skrbi, brez tehnike.",
  description:
    "Izdelava, gostovanje, domena in vzdrževanje. Vse uredimo za vas, vi se ukvarjajte s svojim poslom.",
  email: "info@kodit.si",
  phone: "",
  location: "Maribor z okolico, delam za celo Slovenijo",
  metaTitle: "Kodit — Izdelava spletnih strani na ključ | Maribor, Slovenija",
  metaDescription:
    "Spletna stran na ključ: izdelava spletnih strani, gostovanje, domena, e-pošta in vzdrževanje. Maribor, Slovenija.",
};

export const paketi = [
  {
    ime: "Osnovni",
    cena: "390 €",
    podnaslov: "Enostranska predstavitvena stran",
    priljubljen: false,
    rok: "7 dni",
    lastnosti: [
      "Enostranska predstavitvena stran",
      "Predloga, prilagojena vam",
      "Odlično deluje na telefonu",
      "Kontaktni obrazec",
      "SSL certifikat (varna povezava)",
      "Osnovni SEO (najdljivost na Googlu)",
      "Povezava z Google Zemljevidi",
    ],
    brez: ["Podstrani", "Google Business profil"],
  },
  {
    ime: "Standard",
    cena: "690 €",
    podnaslov: "Do 5 podstrani",
    priljubljen: true,
    rok: "14 dni",
    lastnosti: [
      "Vse iz Osnovnega paketa",
      "Do 5 podstrani",
      "Oblikovanje po meri",
      "Galerija / portfolio",
      "Google Business profil",
      "Razširjen SEO",
    ],
    brez: [],
  },
  {
    ime: "Premium",
    cena: "od 1.190 €",
    podnaslov: "Po meri (večje strani, rezervacije, katalog ...)",
    priljubljen: false,
    rok: "Po dogovoru",
    lastnosti: [
      "Vse iz Standard paketa",
      "Stran po meri (večje strani)",
      "Rezervacije, katalog ali e-trgovina",
      "Napredni SEO",
      "Napredne integracije po želji",
      "Prednostna podpora",
    ],
    brez: [],
  },
];

// Mesečno vzdrževanje in gostovanje — dve stopnji.
export const vzdrzevanje = [
  {
    ime: "Osnovno vzdrževanje",
    cena: "20 €",
    obdobje: "/mes",
    letno: "ali 200 €/leto (2 meseca gratis)",
    priljubljen: false,
    lastnosti: [
      "Domena .si",
      "Gostovanje in SSL certifikat",
      "E-poštni naslov (info@vašafirma.si)",
      "Varnostne kopije",
      "Manjši popravki vsebine",
      "Posodobitve in nadzor delovanja",
    ],
  },
  {
    ime: "Vzdrževanje + oglaševanje",
    cena: "od 49 €",
    obdobje: "/mes",
    letno: "+ proračun za oglase po dogovoru",
    priljubljen: true,
    lastnosti: [
      "Vse iz osnovnega vzdrževanja",
      "Upravljanje Google in Meta oglasov",
      "Priprava in optimizacija oglasov",
      "Mesečno poročilo o rezultatih",
      "Svetovanje za več obiska in povpraševanj",
    ],
  },
];

export const faq = [
  {
    vprasanje: "Koliko časa traja izdelava?",
    odgovor:
      "Za večino strani 7–14 dni od potrditve osnutka. Večji projekti po dogovoru.",
  },
  {
    vprasanje: "Ali lahko stran kasneje spreminjam?",
    odgovor:
      "Da — manjše spremembe vsebine so vključene v mesečno vzdrževanje. Za večje predelave se dogovorimo posebej.",
  },
  {
    vprasanje: "Kaj če že imam domeno?",
    odgovor:
      "Brez problema — domeno prenesemo ali povežemo z novo stranjo. Ni treba ničesar brisati.",
  },
  {
    vprasanje: "Ali dobim e-poštni naslov info@mojafirma.si?",
    odgovor:
      "Da, en e-poštni naslov je vključen v vzdrževalni paket (20 €/mes ali 200 €/leto).",
  },
  {
    vprasanje: "Kaj se zgodi, če preneham plačevati vzdrževanje?",
    odgovor:
      "Stran in domena ostaneta vaša — dogovorimo se za predajo datotek in nastavitev v vaše roke.",
  },
];

// Vsak projekt ima svoj stolpec: glavna "slika" zgoraj, pod njo pa
// dodatne slike iz "galerija" (samo vrzi slike v /public/reference/ in
// dodaj poti spodaj — toliko, kolikor jih hočeš pod posamezen projekt).
export const reference = [
  {
    ime: "Kosmos Pohištvo",
    opis: "Sodobna predstavitvena stran za prodajo pohištva po meri — katalog izdelkov, galerija in kontaktni obrazec.",
    url: "https://kosmos-pohistvo.si",
    slika: "/reference/kosmos-pohistvo.png",
    kategorija: "Pohištvo / e-commerce",
    galerija: ["/reference/kosmos-pohistvo2.png", "/reference/kosmos-pohistvo3.png", "/reference/kosmos-pohistvo4.png"],
  },
  {
    ime: "Minikmont montaže",
    opis: "Sodobna predstavitvena stran za montaže oken in vrat — katalog storitev, galerija in kontaktni obrazec.",
    url: "",
    slika: "/reference/minikmont.png",
    kategorija: "Montaže oken in vrat",
    galerija: ["/reference/minikmont2.png", "/reference/minikmont3.png"],
  },
  {
    ime: "Beruzzo",
    opis: "Predstavitvena stran za picerijo",
    url: "",
    slika: "/reference/beruzzo.png",
    kategorija: "Picerija",
    galerija: [] as string[],
  },
];
