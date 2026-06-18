import { NextResponse } from "next/server";
import { buildMakePayload } from "@/lib/buildMakePayload";
import { MAKE_WEBHOOK_URL } from "@/config/webhook";

export const maxDuration = 60;

function generateReferenceNumber(): string {
  return `AVI-${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(request: Request) {
  const webhookUrl = MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("[submit-lead] MAKE_WEBHOOK_URL missing");
    return NextResponse.json(
      { success: false, message: "Webhook לא מוגדר – הפעל מחדש את השרת" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const referenceNumber = generateReferenceNumber();
    const payload = buildMakePayload(formData, referenceNumber);

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const errText = await webhookResponse.text().catch(() => "");
      console.error("[submit-lead] Make error:", webhookResponse.status, errText);
      return NextResponse.json(
        { success: false, message: `שגיאה בשליחה ל-Make (${webhookResponse.status})` },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "הבקשה התקבלה בהצלחה",
    });
  } catch (error) {
    console.error("[submit-lead] Error:", error);
    return NextResponse.json(
      { success: false, message: "שגיאה בשליחה – נסו שוב" },
      { status: 500 }
    );
  }
}
