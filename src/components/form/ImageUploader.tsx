"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGES,
  validateImageFile,
} from "@/lib/imageValidation";

interface ImageUploaderProps {
  images: File[];
  onChange: (images: File[]) => void;
  helpText?: string;
}

export function ImageUploader({ images, onChange, helpText }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      setError(null);
      const newFiles: File[] = [];
      const remaining = MAX_IMAGES - images.length;

      if (remaining <= 0) {
        setError("מקסימום 8 תמונות");
        return;
      }

      for (let i = 0; i < Math.min(fileList.length, remaining); i++) {
        const file = fileList[i];
        const validationError = validateImageFile(file);
        if (validationError) {
          setError(validationError);
          continue;
        }
        newFiles.push(file);
      }

      if (newFiles.length > 0) {
        onChange([...images, ...newFiles]);
      }
    },
    [images, onChange]
  );

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed border-charcoal/20 rounded-xl p-6 text-center hover:border-forest/50 transition-colors cursor-pointer"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        aria-label="העלאת תמונות"
      >
        <input
          ref={inputRef}
          type="file"
          accept={ALLOWED_IMAGE_TYPES.join(",")}
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
          aria-describedby="image-help"
        />
        <p className="text-charcoal/70 mb-1">לחצו להעלאת תמונות</p>
        <p className="text-sm text-charcoal/50">JPG, PNG, WEBP – עד 8MB לתמונה</p>
      </div>

      {helpText && (
        <p id="image-help" className="text-sm text-charcoal/60">{helpText}</p>
      )}

      {error && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {images.map((file, index) => (
            <div key={`${file.name}-${index}`} className="relative group aspect-square rounded-lg overflow-hidden bg-wood-100">
              <Image
                src={URL.createObjectURL(file)}
                alt={`תמונה ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-charcoal/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                aria-label={`הסר תמונה ${index + 1}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="text-sm text-charcoal/50">{images.length} / {MAX_IMAGES} תמונות</p>
    </div>
  );
}
