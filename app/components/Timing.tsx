// src/components/Timing.tsx
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setTime } from '../features/appointmentSlice';

type TimeSlot = 'morning' | 'afternoon';

const timeSlots: Record<TimeSlot, string[]> = {
  morning: [
    "9:00 am - 9:30 am",
    "9:30 am - 10:00 am",
    "10:00 am - 10:30 am",
    "10:30 am - 11:00 am",
    "11:00 am - 11:30 am",
    "11:30 am - 12:00 pm"
  ],
  afternoon: [
    "12:00 pm - 12:30 pm",
    "12:30 pm - 1:00 pm",
    "1:00 pm - 1:30 pm",
    "1:30 pm - 2:00 pm",
    "2:00 pm - 2:30 pm",
    "2:30 pm - 3:00 pm"
  ]
};

const Timing: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  // const dispatch = ();

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
    // dispatch((slot));
  };

  return (
    <div className="flex justify-center mt-40">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Time Slot</h2>
        
        <div className="space-y-4 ">
          <div>
            <h1 className="text-xl text-[#589142] text-center">Morning</h1>
            <div className="flex flex-wrap justify-center items-center">
              {timeSlots.morning.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotClick(slot)}
                  className={`m-1 w-1/3 py-2 text-center rounded-lg border-2 transition-colors ${
                    selectedSlot === slot
                      ? 'bg-[#589142] text-white border-[#589142]'
                      : 'bg-transparent text-[#589142] border-[#589142] hover:bg-[#589142] hover:text-white'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#589142] text-center">Afternoon</h3>
            <div className="flex flex-wrap justify-center items-center">
              {timeSlots.afternoon.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotClick(slot)}
                  className={`m-1 w-1/3 py-2 text-center rounded-lg border-2 transition-colors ${
                    selectedSlot === slot
                      ? 'bg-[#589142] text-white border-[#589142]'
                      : 'bg-transparent text-[#589142] border-[#589142] hover:bg-[#589142] hover:text-white'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timing;
