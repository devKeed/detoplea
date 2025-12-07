import emailjs from "@emailjs/browser";

// Ensure these env vars are configured (public, as EmailJS runs in browser):
// NEXT_PUBLIC_EMAILJS_SERVICE_ID
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//
// In your EmailJS template, create variables that match these keys:
// name, businessName, phone, email, budget, message, source

type HolidayPayload = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  budget?: string;
  message?: string;
  source?: string;
};

export async function sendHolidayPackRequest(payload: HolidayPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Email service is not configured. Please set the EmailJS environment variables."
    );
  }

  // Initialize once per session (safe to call multiple times)
  emailjs.init(publicKey);

  const result = await emailjs.send(serviceId, templateId, {
    name: payload.name,
    businessName: payload.businessName,
    phone: payload.phone,
    email: payload.email,
    budget: payload.budget || "",
    message: payload.message || "",
    source: payload.source || "Website Form",
  });

  // Optional: you can inspect result.status / result.text
  return result;
}
