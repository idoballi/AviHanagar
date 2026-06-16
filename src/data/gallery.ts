export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/images/work-1.png", alt: "עבודת נגרות – מטבח" },
  { id: "2", src: "/images/work-2.png", alt: "עבודת נגרות – ארון" },
  { id: "3", src: "/images/work-3.jpg", alt: "עבודת נגרות – ספרייה" },
  { id: "4", src: "/images/work-4.png", alt: "עבודת נגרות – מזנון" },
  { id: "5", src: "/images/work-5.png", alt: "עבודת נגרות – רהיט מותאם" },
];
