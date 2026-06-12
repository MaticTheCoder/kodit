import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { ime, email, telefon, sporocilo } = body;

  if (!ime || !email || !sporocilo) {
    return NextResponse.json({ error: "Manjkajo obvezna polja." }, { status: 400 });
  }

  // TODO: nastavi SMTP v .env in pošlji e-pošto
  // const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, ... })
  // await transporter.sendMail({ from: email, to: process.env.CONTACT_EMAIL, ... })

  console.log("Novo povpraševanje:", { ime, email, telefon, sporocilo });

  return NextResponse.json({ ok: true });
}
