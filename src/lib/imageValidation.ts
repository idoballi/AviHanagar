export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const MAX_IMAGE_SIZE = 8 * 1024 * 1024; // 8MB
export const MAX_IMAGES = 8;

export function validateImageFile(file: File): string | null {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return "סוג קובץ לא נתמך. השתמש ב-JPG, PNG או WEBP";
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return "גודל הקובץ חורג מ-8MB";
  }
  return null;
}
