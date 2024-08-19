import React from "react";

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <form>
      <div className="grid gap-2 mb-4">
        <label className="font-medium text-base">Fullname</label>
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-md"
          value={formData.personalInfo.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="grid gap-2 mb-4">
        <label className="font-medium text-base">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="border p-3 rounded-md"
          value={formData.personalInfo.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div className="grid gap-2 mb-4">
        <label className="font-medium text-base">Phone</label>
        <input
          type="tel"
          placeholder="Phone"
          className="border p-3 rounded-md"
          value={formData.personalInfo.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>

      <div className="grid gap-2 mb-4">
        <label className="font-medium text-base">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="border p-3 rounded-md"
          value={formData.personalInfo.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <button
          type="button"
          onClick={prevStep}
          className="w-[50%] bg-orange-500 text-white p-2 rounded hover:bg-orange-400 transition ease-in-out"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="w-[50%] bg-gray-950 text-white p-2 rounded hover:bg-gray-900 transition ease-in-out"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
