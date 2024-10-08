import { ChangeEventHandler, useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import { UserData } from '@/types/types';

interface FormProps {
  formData: UserData | null;
  handleFormChange: ChangeEventHandler;
  selectedImg: File | null;
  setSelectedImg: (selectedImg: File | null) => void;
}

export default function Form1({
  formData,
  handleFormChange,
  selectedImg,
  setSelectedImg,
}: FormProps) {
  const [imgPreview, setImgPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImg) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImg);
    setImgPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImg]);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) {
      return;
    }

    setSelectedImg(e.target.files[0]);
  };

  return (
    <>
      <ImageUpload imgPreview={imgPreview} handleImgChange={handleImgChange} />
      <div className="mt-3 flex flex-col">
        <label>First name</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="firstName"
          defaultValue={formData?.firstName}
          placeholder="Enter first name"
          className="rounded-md border p-2"
        />
      </div>
      <div className="mt-3 flex flex-col">
        <label>Last name</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="lastName"
          defaultValue={formData?.lastName}
          placeholder="Enter last name"
          className="rounded-md border p-2"
        />
      </div>
      <div className="mt-3 flex flex-col">
        <label>Email</label>
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="Enter email"
          name="email"
          defaultValue={formData?.email}
          className="rounded-md border p-2"
        />
      </div>
      <div className="mt-3 flex flex-col">
        <label>Birthday</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="birthday"
          defaultValue={formData?.birthday}
          placeholder="Enter birthday"
          className="rounded-md border p-2"
        />
      </div>
    </>
  );
}
