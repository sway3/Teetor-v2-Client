import { useEffect, useState } from 'react';

interface ImageUploadProps {
  imgPreview: string | null;
  handleImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUpload({
  imgPreview,
  handleImgChange,
}: ImageUploadProps) {
  return (
    <>
      {imgPreview && (
        <img src={imgPreview} className="h-56 w-56 rounded-full object-cover" />
      )}
      <input
        type="file"
        accept="image/*"
        name="profile_img"
        id="profile_img"
        onChange={handleImgChange}
      />
    </>
  );
}
