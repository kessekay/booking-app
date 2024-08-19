// data/bookings.js
export const locations = [
  { id: "accra", name: "Accra" },
  { id: "kumasi", name: "Kumasi" },
];

export const bookings = {
  accra: [{ date: "2024-08-20", time: "10:00" }],
  kumasi: [{ date: "2024-08-21", time: "11:00" }],
};

export const isaAvailableSlot = (location, date, time) => {
  if (!bookings[location]) {
    return true;
  }
  return !bookings[location].some(
    (booking) => booking.date === date && booking.time === time
  );
};
