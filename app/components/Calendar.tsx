"use client"

import { useState } from 'react';
import client from '../../public/k12_logo.png'
import Image from 'next/image';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState<number>(9); // 9 = October (0-indexed)
  const [year, setYear] = useState<number>(2020);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month
  };

  const handleDateClick = (day: number) => setSelectedDate(day);

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, selectedDate });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center space-y-8 md:space-y-0 md:flex-row mt-32">
        <div className="w-full md:w-1/2 p-5">
          <h2 className="text-2xl text-green-600 font-semibold mb-5">
            Select Date and Time
          </h2>

          {/* Calendar Section */}
          <div className="bg-white rounded-lg shadow-md p-4 ">
            <div className="flex justify-between items-center">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handlePrevMonth}
              >
                &#60;
              </button>
              <span className="text-lg font-semibold text-gray-700">
                {monthNames[month]} {year}
              </span>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleNextMonth}
              >
                &#62;
              </button>
            </div>

            <div className="grid grid-cols-7 text-center mt-4 text-gray-500 md:gap-5 gap-8">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span key={day} className="font-semibold">
                  {day}
                </span>
              ))}

              {/* Generate empty spaces before the first day of the month */}
              {Array.from({ length: new Date(year, month, 1).getDay() })
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="py-2"></span>
                ))}

              {/* Render the days */}
              {Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  className={`py-2 rounded-full w-10 h-10 ${
                    selectedDate === day
                      ? 'bg-green-500 text-white'
                      : 'hover:bg-green-100 text-gray-700'
                  }`}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-5 flex flex-col ">
          <div className='flex  items-center gap-3'>
          <Image
  className="w-16 h-16 rounded-full mb-4"
  src={client}
  alt="Client's Profile"
  width={64}  // Width in pixels (16 * 4 for w-16)
  height={64} // Height in pixels (16 * 4 for h-16)
/>
          <p className="text-xl font-semibold text-center text-gray-700">Jessica Gabbi</p>
          </div>
          <p className="text-3xl font-bold text-gray-500 mb-6 leading-normal">
          Free Business Coaching <br />Consultation with jessica gabbi
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
              <div className='flex gap-3 flex-col md:flex-row mb-5 mt-5'>
              <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              required
            />
              </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-3xl hover:bg-green-600 transition w-full"
            >
              Get a Free Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
