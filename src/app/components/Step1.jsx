import React from "react";

const Step1 = ({ nextStep, handleChange, formData }) => {
  return (
    <form className="grid grid-cols-1 bg-slate-20">
      <div className="grid gap-2">
        <label className="font-medium text-base">Location</label>
        <select
          name="location"
          id="location"
          className="border p-3 rounded-md"
          value={formData.location}
          onChange={(e) => handleChange({ location: e.target.value })}
        >
          <option value="" disabled>
            Choose a location
          </option>
          <option value="Accra">Accra</option>
          <option value="Kumasi">Kumasi</option>
        </select>
      </div>
      <button
        type="button"
        onClick={nextStep}
        className="mt-4 bg-gray-950 text-white p-2 rounded absolute bottom-4 left-4 right-4 shadow-lg hover:bg-gray-900 transition ease-in-out"
      >
        Next
      </button>
    </form>
  );
};

export default Step1;
