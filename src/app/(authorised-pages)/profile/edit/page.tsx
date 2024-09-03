'use client';

import { useState } from 'react';

// types
import { UserData } from '@/types/types';

export default function ProfilePage() {
  const [formData, setFormData] = useState<UserData | null>(null);

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!formData) return;

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(newFormData);
  };

  return (
    <>
      <div className="mt-3 flex flex-col">
        <label>First name</label>
        <input
          type="text"
          onChange={handleFormInputChange}
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
          onChange={handleFormInputChange}
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
          onChange={handleFormInputChange}
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
          onChange={handleFormInputChange}
          name="birthday"
          defaultValue={formData?.birthday}
          placeholder="Enter birthday"
          className="rounded-md border p-2"
        />
      </div>
    </>
  );
}
