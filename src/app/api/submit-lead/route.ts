import { NextResponse } from "next/server";

function generateReferenceNumber(): string {
  return `AVI-${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { success: false, message: "Webhook לא מוגדר" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const referenceNumber = generateReferenceNumber();

    const payload: Record<string, unknown> = {
      referenceNumber,
      submittedAt: new Date().toISOString(),
    };

    const images: { name: string; type: string; size: number; data: string }[] = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        images.push({
          name: value.name,
          type: value.type,
          size: value.size,
          data: buffer.toString("base64"),
        });
      } else if (value !== "") {
        payload[key] = value;
      }
    }

    payload.images = images;
    payload.imageCount = images.length;

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { success: false, message: "שגיאה בשליחה ל-Make" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "הבקשה התקבלה בהצלחה",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "שגיאה בשליחה" },
      { status: 500 }
    );
  }
}
