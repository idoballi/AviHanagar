import type { LeadFormData } from "@/types/form";

export interface SubmitResult {
  success: boolean;
  referenceNumber: string;
  message?: string;
}

/**
 * Mock submit – replaces real API call.
 * TODO: Connect to Supabase for persistence
 * TODO: Trigger n8n webhook via N8N_WEBHOOK_URL env variable
 */
export async function submitLeadForm(data: LeadFormData): Promise<SubmitResult> {
  // TODO: Supabase – insert lead into database
  // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, ...)
  // await supabase.from('leads').insert({ ... })

  // TODO: n8n – POST to webhook
  // if (process.env.N8N_WEBHOOK_URL) {
  //   await fetch(process.env.N8N_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) })
  // }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const referenceNumber = `AVI-${Date.now().toString(36).toUpperCase()}`;

  console.info("[Mock Submit]", { referenceNumber, data });

  return {
    success: true,
    referenceNumber,
    message: "הבקשה התקבלה בהצלחה",
  };
}
