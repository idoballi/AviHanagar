import type { LeadFormData } from "@/types/form";
import { FORM_STORAGE_KEY } from "@/types/form";

type StoredFormData = Omit<LeadFormData, "images"> & {
  images: never[];
};

export function saveFormToStorage(data: Partial<LeadFormData>): void {
  try {
    const { images: _, ...rest } = data;
    const existing = loadFormFromStorage();
    const merged = { ...existing, ...rest };
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // localStorage unavailable
  }
}

export function loadFormFromStorage(): Partial<StoredFormData> {
  try {
    const raw = localStorage.getItem(FORM_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Partial<StoredFormData>;
  } catch {
    return {};
  }
}

export function clearFormStorage(): void {
  try {
    localStorage.removeItem(FORM_STORAGE_KEY);
  } catch {
    // ignore
  }
}
