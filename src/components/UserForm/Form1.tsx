import { ChangeEventHandler } from 'react';

interface FormProps {
  formData: any;
  handleFormChange: ChangeEventHandler;
}

export default function Form1({ formData, handleFormChange }: FormProps) {
  return (
    <>
      <div className="flex flex-col mt-3">
        <label>First name</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="firstName"
          defaultValue={formData.firstName}
          placeholder="Enter first name"
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mt-3">
        <label>Last name</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="lastName"
          defaultValue={formData.lastName}
          placeholder="Enter last name"
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mt-3">
        <label>Email</label>
        <input
          type="text"
          onChange={handleFormChange}
          placeholder="Enter email"
          name="email"
          defaultValue={formData.email}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mt-3">
        <label>Birthday</label>
        <input
          type="text"
          onChange={handleFormChange}
          name="birthday"
          defaultValue={formData.birthday}
          placeholder="Enter birthday"
          className="border rounded-md p-2"
        />
      </div>
    </>
  );
}
