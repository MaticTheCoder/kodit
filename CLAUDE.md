# CLAUDE.md — Kodit, predstavitvena spletna stran

## O projektu

Predstavitvena (marketing) spletna stran za **Kodit** — osebno znamko za izdelavo spletnih strani "na ključ" za slovenski trg. Lastnik: Matic, frontend developer (Next.js). Stran mora biti v **slovenščini**, hitra, čista in prodajno usmerjena.

**Glavno sporočilo:** "Vse uredimo za vas" — izdelava strani, gostovanje, domena, e-pošta in vzdrževanje na enem mestu. Stranka ne rabi razumeti tehnike.

## Ciljna skupina

- Mali podjetniki, s.p.-ji, obrtniki, lokali, frizerji, mehaniki, odvetniki, ambulante — Štajerska / cela Slovenija
- Niso tehnični: nočejo slišati za DNS, hosting, SSL — hočejo "da stran dela in da jih stranke najdejo na Googlu"
- Odločajo se na podlagi zaupanja, referenc in jasne cene

## Ton in pisanje

- Preprosto, domače, brez tehničnega žargona (NE: "responsive SPA z SSR" → DA: "stran, ki odlično deluje tudi na telefonu")
- Vikanje strank ("Za vas uredimo...")
- Kratki stavki, konkretne koristi, brez marketinškega napihovanja
- Vsako tehnično prednost prevedi v korist za stranko (hitrost → "stranke ne čakajo", SEO → "najdejo vas na Googlu")

## Tech stack

- **Next.js 14+ (App Router)**, TypeScript
- **Tailwind CSS**
- Statična stran / SSG kjer se da (hitrost, SEO)
- Kontaktni obrazec: server action ali API route + pošiljanje na e-mail (npr. Resend ali Nodemailer prek SMTP — pripravi tako, da se SMTP nastavi v .env)
- Brez CMS v prvi verziji — vsebina v kodi/MDX, da je preprosto
- Deploy target: Vercel ali Neoserv/cPanel (statični export naj bo možen — izogibaj se funkcionalnostim, ki zahtevajo Node server, razen obrazca)

## Struktura strani (vse na eni strani / landing + podstrani)

### 1. Hero
- Naslov: **"Spletna stran na ključ — brez skrbi, brez tehnike."**
- Podnaslov: "Izdelava, gostovanje, domena in vzdrževanje. Vse uredimo za vas, vi se ukvarjajte s svojim poslom."
- CTA gumb: "Pridobite ponudbo" (scroll na kontakt) + sekundarni "Poglejte pakete"
- Vizualno: čist hero, lahko mockup strani na laptopu/telefonu

### 2. Zakaj Kodit (3–4 kartice koristi)
- ⚡ **Hitra in moderna stran** — naložena v trenutku, odlična na telefonu
- 🔍 **Vidni na Googlu** — osnovna SEO optimizacija vključena v vsak paket
- 🧰 **Vse na enem mestu** — domena, gostovanje, e-pošta, varnostni certifikat. Nič ne urejate sami.
- 🤝 **En kontakt za vse** — brez klicnih centrov, pišete direktno meni

### 3. Paketi (cene so izhodišče — Matic jih lahko prilagodi)

| | **Osnovni** | **Standard** ⭐ najbolj priljubljen | **Premium** |
|---|---|---|---|
| Cena izdelave | 390 € | 690 € | od 1.190 € |
| Obseg | enostranska predstavitvena stran | do 5 podstrani | po meri (večje strani, rezervacije, katalog ...) |
| Oblikovanje | predloga, prilagojena vam | oblikovanje po meri | oblikovanje po meri + |
| Kontaktni obrazec | ✓ | ✓ | ✓ |
| Osnovni SEO | ✓ | ✓ | napredni SEO |
| Google Business profil | — | ✓ | ✓ |
| Rok izdelave | 7 dni | 14 dni | po dogovoru |

**Vzdrževanje in gostovanje:** 15 €/mesec ali 150 €/leto — vključuje domeno .si, gostovanje, SSL, e-poštni naslov, varnostne kopije in manjše popravke vsebine.

Pod tabelo: "Niste prepričani, kateri paket je pravi? Pišite mi — svetujem brezplačno."

### 4. Kako poteka (4 koraki — zmanjša strah pred neznanim)
1. **Pogovor** — poveste, kaj počnete in kaj želite (15 min, telefon ali kava)
2. **Predlog** — v nekaj dneh dobite osnutek izgleda in fiksno ceno
3. **Izdelava** — stran naredim, vi samo potrdite
4. **Objava in skrb** — stran objavim, uredim domeno in gostovanje ter skrbim, da vse deluje

### 5. Reference / Portfolio
- Grid s screenshoti projektov (zaenkrat placeholder kartice — Matic doda svoje projekte)
- Vsaka kartica: screenshot, ime, kratek opis, link
- Če referenc še ni: sekcija "Zadnji projekti" z 2–3 demo deli ali jo začasno skrij

### 6. O meni
- Kratko, osebno, gradi zaupanje: študent računalništva in razvijalec z izkušnjami v IT podpori — zna razložiti stvari po domače
- Fotografija (placeholder)
- Poudarek: "Z mano govorite direktno z osebo, ki vašo stran dejansko naredi."

### 7. Pogosta vprašanja (FAQ — accordion)
- Koliko časa traja izdelava? (7–14 dni za večino strani)
- Ali lahko stran kasneje spreminjam? (Da — manjše spremembe so vključene v vzdrževanje)
- Kaj če že imam domeno? (Brez problema, jo prenesemo ali povežemo)
- Ali dobim e-poštni naslov info@mojafirma.si? (Da, vključeno v vzdrževanje)
- Kaj se zgodi, če preneham plačevati vzdrževanje? (Stran in domena ostaneta vaša — dogovorimo se za predajo)

### 8. Kontakt
- Obrazec: ime, e-pošta, telefon (opcijsko), kaj potrebujete (textarea), GDPR checkbox
- Poleg obrazca: e-mail (info@kodit.si — placeholder), telefon (placeholder), lokacija "Maribor z okolico, delam za celo Slovenijo"
- Po oddaji: toast/sporočilo "Hvala! Oglasim se v 24 urah."

### 9. Footer
- Logo, kratek opis, povezave do sekcij
- Pravne strani: **Pogoji poslovanja**, **Politika zasebnosti** (GDPR), **Piškotki**
- © Kodit 2026

## Podstrani (poleg landing strani)

- `/zasebnost` — politika zasebnosti (GDPR, slovenski ZVOP-2 — generiraj razumen osnutek z opombo, da ga pregleda Matic)
- `/pogoji` — splošni pogoji
- Cookie banner: minimalen, samo če bodo analitike (predvidi Plausible ali GA4 — privzeto izklopljeno)

## Dizajn smernice

- **Čisto, svetlo, profesionalno** — ne startup-flashy, ciljna skupina so klasični podjetniki
- Primarna barva: temno modra (#1e3a5f ali podobno), poudarki: topla oranžna ali zelena za CTA
- Tipografija: ena sans (npr. Inter ali Plus Jakarta Sans), velika berljivost
- Veliko belega prostora, max-width vsebine ~1100px
- Mobile-first — večina strank bo stran odprla na telefonu
- Logo: zaenkrat tekstovni "kodit" (lowercase, lahko z barvnim poudarkom, npr. kod**it** ali `<kodit/>` varianta) — pripravi kot komponento, da se kasneje zamenja
- Subtilne animacije ob scrollu so OK, nič pretiranega

## SEO

- Meta title: "Kodit — Izdelava spletnih strani na ključ | Maribor, Slovenija"
- Meta description s ključnimi besedami: izdelava spletnih strani, spletna stran na ključ, gostovanje, Maribor, Slovenija
- Ključne besede po sekcijah: "izdelava spletne strani cena", "spletna stran za podjetje", "izdelava spletnih strani Maribor"
- Semantičen HTML (h1 samo enkrat, alt teksti, schema.org LocalBusiness JSON-LD)
- sitemap.xml + robots.txt
- OG slike za deljenje

## Kaj NE delati

- Ne dodajaj angleških tekstov ali jezikovnega preklopa — samo slovenščina
- Ne uporabljaj lorem ipsum — vsa besedila piši v smiselni slovenščini po smernicah zgoraj
- Ne dodajaj nepotrebnih knjižnic (carousel, animacijski frameworki) — Tailwind + malo CSS je dovolj
- Ne hardcodaj kontaktnih podatkov na 10 mestih — drži jih v enem config fajlu (`site.config.ts`)

## Struktura projekta (predlog)

```
/app
  /page.tsx          — landing
  /zasebnost/page.tsx
  /pogoji/page.tsx
  /api/kontakt/route.ts (ali server action)
/components
  Hero.tsx, Paketi.tsx, Postopek.tsx, Reference.tsx, OMeni.tsx, FAQ.tsx, Kontakt.tsx, Footer.tsx, Navbar.tsx
/lib
  site.config.ts     — ime, kontakti, cene paketov, FAQ vsebina
/public
  /reference         — screenshoti projektov
```

## Prva naloga za Claude Code

1. Postavi Next.js + TypeScript + Tailwind projekt
2. Implementiraj landing stran po strukturi zgoraj z vsemi besedili v slovenščini
3. Naredi `site.config.ts` z vsemi podatki na enem mestu
4. Kontaktni obrazec naj zaenkrat samo validira in izpiše uspeh (SMTP pride kasneje prek .env)
5. Poskrbi, da `next build` deluje brez napak in da je stran responsive
