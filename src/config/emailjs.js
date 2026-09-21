/**
 * EmailJS runtime config.
 * Values come from Vite env vars so no secret is hardcoded in the bundle source.
 * Falls back to the current dashboard IDs so existing deploys keep working
 * until secrets are rotated; logs a warning when env vars are missing.
 */
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_n34xk3l";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_reha55o";
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "7e0LUvjNuAd9HHdsW";

export const EMAILJS_USING_ENV_FALLBACK =
  !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
  !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  !import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_USING_ENV_FALLBACK && import.meta.env.DEV) {
  console.warn(
    "[emailjs] Using fallback IDs — set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in .env (see .env.example).",
  );
}
