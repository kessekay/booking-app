import React from "react";
import { bookings, isaAvailableSlot } from "@/data/Booking";

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    handleChange('date', selectedDate);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    handleChange('time', selectedTime);
  };

  const isSunday = (date) => {
    const day = new Date(date).getDay();
    return day === 0;
  };

  return (
    <form>
      <div className="grid gap-2 mb-4">
        <label className="font-medium text-base">Book Date</label>
        <input
          type="date"
          className="border p-3 rounded-md"
          value={formData.booking.date}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      <div className="grid gap-2">
        <label className="font-medium text-base">Book Time</label>
        <input
          type="time"
          className="border p-3 rounded-md"
          value={formData.booking.time}
          onChange={handleTimeChange}
          disabled={isSunday(formData.booking.date) || !isaAvailableSlot(formData.location, formData.booking.date, formData.booking.time)}
        />
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <button
          type="button"
          onClick={prevStep}
          className="w-[50%] mt-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-400 transition ease-in-out"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="w-[50%] mt-4 bg-gray-950 text-white p-2 rounded hover:bg-gray-900 transition ease-in-out"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step3;
