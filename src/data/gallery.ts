export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// הוסף תמונות לתיקייה public/images ועדכן כאן
export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/images/work-1.jpg", alt: "עבודת נגרות – מטבח" },
  { id: "2", src: "/images/work-2.jpg", alt: "עבודת נגרות – ארון" },
  { id: "3", src: "/images/work-3.jpg", alt: "עבודת נגרות – ספרייה" },
  { id: "4", src: "/images/work-4.jpg", alt: "עבודת נגרות – מזנון" },
  { id: "5", src: "/images/work-5.jpg", alt: "עבודת נגרות – רהיט מותאם" },
  { id: "6", src: "/images/work-6.jpg", alt: "עבודת נגרות – חדר ילדים" },
];
