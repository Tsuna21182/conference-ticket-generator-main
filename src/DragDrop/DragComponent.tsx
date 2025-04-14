import React, { useState, useRef } from "react";
import { UploadCloud } from "lucide-react"; // Puedes usar cualquier ícono aquí

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.size > 500 * 1024) {
      alert("La imagen debe pesar menos de 500KB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full mt-3">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
        className="w-full h-30 border-2 border-dashed border-[#5A5A89] rounded-xl flex flex-col items-center justify-center text-sm cursor-pointer bg-[#1B1B3A] hover:bg-[#2A2A4D] transition-all overflow-hidden"
      >
        {preview ? (
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={preview}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <>
            <div className="bg-[#2A2A4D] p-2 rounded-md mb-2">
              <UploadCloud size={32} className="text-[#F97316]" />
            </div>
            <p className="text-Neutral500">Drag and drop or click to upload</p>
          </>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
