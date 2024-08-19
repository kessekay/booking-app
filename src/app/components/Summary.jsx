import React from "react";

const Summary = ({ prevStep, formData }) => {
  const handleSubmit = () => {
    // Save form data
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2 className="font-medium text-2xl mb-4">Summary</h2>
      <p>
        <strong>Location:</strong> {formData.location}
      </p>
      <p>
        <strong>Name:</strong> {formData.personalInfo.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.personalInfo.email}
      </p>
      <p>
        <strong>Phone:</strong> {formData.personalInfo.phone}
      </p>
      <p>
        <strong>Address:</strong> {formData.personalInfo.address}
      </p>
      <p>
        <strong>Book Date:</strong> {formData.booking.date}
      </p>
      <p>
        <strong>Book Time:</strong> {formData.booking.time}
      </p>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <button
          type="button"
          onClick={prevStep}
          className="w-[50%] mt-4 bg-orange-500 hover:bg-orange-400 text-white p-2 rounded transition ease-in-out"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-[50%] mt-4 bg-gray-950 text-white p-2 rounded hover:bg-gray-900 transition ease-in-out"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Summary;
