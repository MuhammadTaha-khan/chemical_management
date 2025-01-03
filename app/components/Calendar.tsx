// "use client";

// import { useState } from "react";
// import client from "../../public/k12_logo.png";
// import Image from "next/image";

// export default function Home() {
//   const [selectedDate, setSelectedDate] = useState<number | null>(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [month, setMonth] = useState<number>(9); // 9 = October (0-indexed)
//   const [year, setYear] = useState<number>(2020);

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const daysInMonth = (month: number, year: number) => {
//     return new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month
//   };

//   const handleDateClick = (day: number) => setSelectedDate(day);

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear(year + 1);
//     } else {
//       setMonth(month + 1);
//     }
//   };

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear(year - 1);
//     } else {
//       setMonth(month - 1);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", { name, email, selectedDate });
//   };

//   return (
//     <div className="min-h-screen bg-[#589142]   flex items-center justify-center">
//       <div className="bg-white p-2 md:w-3/4 rounded-lg shadow-lg flex flex-col items-center space-y-8 md:space-y-0 md:flex-row mt-28 mb-28 lg:gap-12">
//         <div className="w-full md:w-1/2  p-5 ">
//           <h2 className="text-2xl text-[#589142] font-semibold mb-5">
//             Select Date and Time
//           </h2>
//           {/* Calendar Section */}
//           <div className="bg-white rounded-lg  p-4 max-w-full md:max-w-lg mx-auto ">
//             <div className="flex justify-between items-center px-4">
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//                 onClick={handlePrevMonth}
//               >
//                 &#60;
//               </button>
//               <span className="text-lg md:text-xl font-semibold text-gray-700">
//                 {monthNames[month]} {year}
//               </span>
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//                 onClick={handleNextMonth}
//               >
//                 &#62;
//               </button>
//             </div>

//             <div className="grid grid-cols-7 text-center mt-4 text-gray-500 gap-4 md:gap-3">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                 <span key={day} className="font-semibold text-sm md:text-base">
//                   {day}
//                 </span>
//               ))}

//               {/* Generate empty spaces before the first day of the month */}
//               {Array.from({ length: new Date(year, month, 1).getDay() })
//                 .fill(null)
//                 .map((_, index) => (
//                   <span key={index} className="py-2"></span>
//                 ))}

//               {/* Render the days */}
//               {Array.from(
//                 { length: daysInMonth(month, year) },
//                 (_, i) => i + 1
//               ).map((day) => (
//                 <button
//                   key={day}
//                   className={`py-2 rounded-full w-8 h-8 md:w-10 md:h-10 ${
//                     selectedDate === day
//                       ? "bg-[#589142] text-white"
//                       : "hover:bg-green-100 text-gray-700"
//                   }`}
//                   onClick={() => handleDateClick(day)}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="w-full md:w-1/2 p-5 flex flex-col ">
//           <div className="flex  items-center gap-3">
//             <Image
//               className="w-16 h-16 rounded-full mb-4"
//               src={client}
//               alt="Client's Profile"
//               width={64} // Width in pixels (16 * 4 for w-16)
//               height={64} // Height in pixels (16 * 4 for h-16)
//             />
//             <p className="text-xl font-semibold text-center text-gray-700">
//               Jessica Gabbi
//             </p>
//           </div>
//           <p className="text-3xl lg:text-4xl font-bold text-gray-500 mb-6 leading-normal">
//             Free Business Coaching <br />
//             Consultation with jessica gabbi
//           </p>
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col space-y-4 w-full"
//           >
//             <div className="flex gap-3 flex-col md:flex-row mb-5 mt-5">
//               <input
//                 type="text"
//                 placeholder="Full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#589142] w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#589142] w-full"
//                 required
//               />
//             </div>
//               <div className="flex justify-center">
//               <button
//               type="submit"
//               className="inline-block px-4 py-2 bg-[#589142] text-white rounded-3xl hover:bg-[#589142] transition "
//             >
//               Get a Free Consultation
//             </button>
//               </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





















// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import client from "../../public/k12_logo.png";

// const timeSlots = {
//   morning: [
//     "9:00 am - 9:30 am",
//     "9:30 am - 10:00 am",
//     "10:00 am - 10:30 am",
//     "10:30 am - 11:00 am",
//     "11:00 am - 11:30 am",
//     "11:30 am - 12:00 pm",
//   ],
//   afternoon: [
//     "12:00 pm - 12:30 pm",
//     "12:30 pm - 1:00 pm",
//     "1:00 pm - 1:30 pm",
//     "1:30 pm - 2:00 pm",
//     "2:00 pm - 2:30 pm",
//     "2:30 pm - 3:00 pm",
//   ],
// };

// export default function Home() {
//   const [selectedDate, setSelectedDate] = useState<number | null>(null);
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [month, setMonth] = useState<number>(9); // 9 = October (0-indexed)
//   const [year, setYear] = useState<number>(2020);

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const daysInMonth = (month: number, year: number) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const handleDateClick = (day: number) => {
//     setSelectedDate(day);
//     setSelectedSlot(null); // Reset time slot selection when date changes
//   };

//   const handleSlotClick = (slot: string) => {
//     setSelectedSlot(slot);
//   };

//   const handleNextMonth = () => {
//     if (month === 11) {
//       setMonth(0);
//       setYear(year + 1);
//     } else {
//       setMonth(month + 1);
//     }
//   };

//   const handlePrevMonth = () => {
//     if (month === 0) {
//       setMonth(11);
//       setYear(year - 1);
//     } else {
//       setMonth(month - 1);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", { name, email, selectedDate, selectedSlot });
//   };

//   return (
//     <div className="min-h-screen bg-[#589142] flex items-center justify-center">
//       <div className="bg-white p-2 md:w-3/4 rounded-lg shadow-lg flex flex-col items-center space-y-8 md:space-y-0 md:flex-row mt-28 mb-28 lg:gap-12">
//         <div className="w-full md:w-1/2 p-5 ">
//           <h2 className="text-2xl text-[#589142] font-semibold mb-5">
//             Select Date and Time
//           </h2>

//           {/* Calendar Section */}
//           <div className="bg-white rounded-lg p-4 max-w-full md:max-w-lg mx-auto">
//             <div className="flex justify-between items-center px-4">
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//                 onClick={handlePrevMonth}
//               >
//                 &#60;
//               </button>
//               <span className="text-lg md:text-xl font-semibold text-gray-700">
//                 {monthNames[month]} {year}
//               </span>
//               <button
//                 className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//                 onClick={handleNextMonth}
//               >
//                 &#62;
//               </button>
//             </div>

//             <div className="grid grid-cols-7 text-center mt-4 text-gray-500 gap-4 md:gap-3">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//                 <span key={day} className="font-semibold text-sm md:text-base">
//                   {day}
//                 </span>
//               ))}

//               {/* Empty spaces before the first day of the month */}
//               {Array.from({ length: new Date(year, month, 1).getDay() })
//                 .fill(null)
//                 .map((_, index) => (
//                   <span key={index} className="py-2"></span>
//                 ))}

//               {/* Days of the month */}
//               {Array.from(
//                 { length: daysInMonth(month, year) },
//                 (_, i) => i + 1
//               ).map((day) => (
//                 <button
//                   key={day}
//                   className={`py-2 rounded-full w-8 h-8 md:w-10 md:h-10 ${
//                     selectedDate === day
//                       ? "bg-[#589142] text-white"
//                       : "hover:bg-green-100 text-gray-700"
//                   }`}
//                   onClick={() => handleDateClick(day)}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Time Slots Section - Visible when a date is selected */}
//           {selectedDate && (
//             <div className="mt-6">
//               <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
//                 Select Time Slot
//               </h3>

//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-lg text-gray-600">Morning</h4>
//                   <div className="flex flex-wrap justify-center gap-2">
//                     {timeSlots.morning.map((slot, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleSlotClick(slot)}
//                         className={`px-4 py-2 rounded-lg border-2 transition-colors ${
//                           selectedSlot === slot
//                             ? "bg-[#589142] text-white border-[#589142]"
//                             : "bg-transparent text-[#589142] border-[#589142] hover:bg-[#589142] hover:text-white"
//                         }`}
//                       >
//                         {slot}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-lg text-gray-600">Afternoon</h4>
//                   <div className="flex flex-wrap justify-center gap-2">
//                     {timeSlots.afternoon.map((slot, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleSlotClick(slot)}
//                         className={`px-4 py-2 rounded-lg border-2 transition-colors ${
//                           selectedSlot === slot
//                             ? "bg-[#589142] text-white border-[#589142]"
//                             : "bg-transparent text-[#589142] border-[#589142] hover:bg-[#589142] hover:text-white"
//                         }`}
//                       >
//                         {slot}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Form Section */}
//         <div className="w-full md:w-1/2 p-5 flex flex-col">
//           <div className="flex items-center gap-3">
//             <Image
//               className="w-16 h-16 rounded-full mb-4"
//               src={client}
//               alt="Client's Profile"
//               width={64}
//               height={64}
//             />
//             <p className="text-xl font-semibold text-center text-gray-700">
//               Jessica Gabbi
//             </p>
//           </div>
//           <p className="text-3xl lg:text-4xl font-bold text-gray-500 mb-6 leading-normal">
//             Free Business Coaching <br />
//             Consultation with Jessica Gabbi
//           </p>

//           <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
//             <div className="flex gap-3 flex-col md:flex-row mb-5 mt-5">
//               <input
//                 type="text"
//                 placeholder="Full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#589142] w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#589142] w-full"
//                 required
//               />
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="inline-block px-4 py-2 bg-[#589142] text-white rounded-3xl hover:bg-[#589142] transition"
//               >
//                 Get a Free Consultation
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


















"use client";
import { useState } from "react";
import Image from "next/image";
import client from "../../public/k12_logo.png";

const timeSlots = {
  morning: [
    "9:00 am - 9:30 am",
    "9:30 am - 10:00 am",
    "10:00 am - 10:30 am",
    "10:30 am - 11:00 am",
    "11:00 am - 11:30 am",
    "11:30 am - 12:00 pm",
  ],
  afternoon: [
    "12:00 pm - 12:30 pm",
    "12:30 pm - 1:00 pm",
    "1:00 pm - 1:30 pm",
    "1:30 pm - 2:00 pm",
    "2:00 pm - 2:30 pm",
    "2:30 pm - 3:00 pm",
  ],
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState<number>(9); // 9 = October (0-indexed)
  const [year, setYear] = useState<number>(2020);
  const [showModal, setShowModal] = useState<boolean>(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setShowModal(true); // Show the modal when a date is clicked
    setSelectedSlot(null); // Reset time slot selection when date changes
  };

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
    setShowModal(false); // Close the modal when a slot is selected
  };

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
    console.log("Form submitted:", { name, email, selectedDate, selectedSlot });
  };

  return (
    <div className="min-h-screen bg-[#589142] flex items-center justify-center">
      <div className="bg-white p-2 md:w-3/4 rounded-lg shadow-lg flex flex-col items-center space-y-8 md:space-y-0 md:flex-row mt-28 mb-28 lg:gap-12">
        <div className="w-full md:w-1/2 p-5 ">
          <h2 className="text-2xl text-[#589142] font-semibold mb-5">
            Select Date and Time
          </h2>

          {/* Calendar Section */}
          <div className="bg-white rounded-lg p-4 max-w-full md:max-w-lg mx-auto">
            <div className="flex justify-between items-center px-4">
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                onClick={handlePrevMonth}
              >
                &#60;
              </button>
              <span className="text-lg md:text-xl font-semibold text-gray-700">
                {monthNames[month]} {year}
              </span>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                onClick={handleNextMonth}
              >
                &#62;
              </button>
            </div>

            <div className="grid grid-cols-7 text-center mt-4 text-gray-500 gap-4 md:gap-3">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span key={day} className="font-semibold text-sm md:text-base">
                  {day}
                </span>
              ))}

              {/* Empty spaces before the first day of the month */}
              {Array.from({ length: new Date(year, month, 1).getDay() })
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="py-2"></span>
                ))}

              {/* Days of the month */}
              {Array.from(
                { length: daysInMonth(month, year) },
                (_, i) => i + 1
              ).map((day) => (
                <button
                  key={day}
                  className={`py-2 rounded-full w-8 h-8 md:w-10 md:h-10 ${
                    selectedDate === day
                      ? "bg-[#589142] text-white"
                      : "hover:bg-green-100 text-gray-700"
                  }`}
                  onClick={() => handleDateClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            {/* <div className="flex gap-3 flex-col md:flex-row mb- mt-5">
            <p className="border border-[#589142] px-2 py-1 rounded-lg text-gray-600">{monthNames[month]} {selectedDate}, {year}</p>
            <p className="border border-[#589142] px-2 py-1 rounded-lg text-gray-600">{selectedSlot}</p>
            </div> */}
            <div className="flex gap-3 flex-col md:flex-row mb- mt-5 px-3">
            <p className="border border-[#589142] px-2 py-2 rounded-xl text-gray-600 w-1/2 text-center">{monthNames[month]} {selectedDate}, {year}</p>
            <p className="border border-[#589142] px-2 py-2 rounded-xl text-gray-600 w-1/2 text-center">{selectedSlot}</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-5 flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              className="w-16 h-16 rounded-full mb-4"
              src={client}
              alt="Client's Profile"
              width={64}
              height={64}
            />
            <p className="text-xl font-semibold text-center text-gray-700">
              Jessica Gabbi
            </p>
          </div>
          <p className="text-3xl lg:text-4xl font-bold text-gray-500 mb-6 leading-normal">
            Free Business Coaching <br />
            Consultation with Jessica Gabbi
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
            <div className="flex gap-3 flex-col md:flex-row mb-2 mt-5">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#589142] w-full"
                required
              />
              <input
                type="email"
                placeholder="chemical@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#589142] w-full"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-block px-4 py-2 bg-[#589142] text-white rounded-3xl hover:bg-[#589142] transition"
              >
                Get a Free Consultation
              </button>
            </div>
            {/* <div className="flex gap-3 flex-col md:flex-row mb- mt-5">
            <p className="border border-[#589142] px-2 py-2 rounded-3xl text-gray-600 w-2/4 text-center">{monthNames[month]} {selectedDate}, {year}</p>
            <p className="border border-[#589142] px-2 py-2 rounded-3xl text-gray-600 w-2/4 text-center">{selectedSlot}</p>
            </div> */}

          </form>
        </div>
      </div>

      {/* Time Slot Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
              Select Time Slot for {monthNames[month]} {selectedDate}, {year}
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg text-[#589142] text-center">Morning</h4>
                <div className="flex flex-wrap justify-center gap-1">
                  {timeSlots.morning.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotClick(slot)}
                      className={`m-1 w-1/3 py-2 text-center rounded-lg border-2 transition-colors ${
                        selectedSlot === slot
                          ? "bg-[#589142] text-white border-[#589142]"
                          : "bg-transparent text-[#589142] border-[#589142] hover:bg-[#589142] hover:text-white"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg text-[#589142] text-center">Afternoon</h4>
                <div className="flex flex-wrap justify-center gap-1">
                  {timeSlots.afternoon.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlotClick(slot)}
                      className={`m-1 w-1/3 py-2 text-center rounded-lg border-2 transition-colors ${
                        selectedSlot === slot
                          ? "bg-[#589142] text-white border-[#589142]"
                          : "bg-transparent text-[#589142] border-[#589142] hover:bg-[#589142] hover:text-white"
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
      )}
    </div>
  );
}
