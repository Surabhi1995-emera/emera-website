import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  configuration?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: EnquiryPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email } = body;

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  // NOTE: wire this up to an email/CRM provider (e.g. Resend, SendGrid, HubSpot)
  // before going live. For now the enquiry is logged server-side.
  console.log("New Émera enquiry:", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
