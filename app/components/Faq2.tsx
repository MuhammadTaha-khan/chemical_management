"use client";

import React, { useState } from "react";
import { faqData } from "./Faqdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Faq2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
  <section >
    {/* <div className="max-w-screen-xl px-4 mx-auto">
      <div className="flex flex-col lg:flex-row"> */}
        <div className="w-full max-w-3xl mx-auto mt-8 p-4">
          <h1 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h1>
        
        {/* <div className="lg:w-2/3 p-4"> */}
          {faqData.map((x, index) => (
            <div key={index} className="mb-3">
              {/* Question Section */}
              <div
                className="flex justify-between items-center bg-gray-100  pr-6 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="bg-[#589142] text-white text-3xl font-semibold w-16 h-16 flex justify-center items-center">
                    {index + 1}
                  </span>
                  <span className="font-medium text-md w-full max-w-1xl mx-auto">{x.title}</span>
                </div>
                <span>
                  {activeIndex === index ? (
                    <FontAwesomeIcon
                      icon={faCircleChevronUp}
                      className="text-[#589142] rounded-full text-2xl"
                    /> // Up arrow
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleChevronDown}
                      className="text-[#589142] text-2xl"
                    /> // Down arrow
                  )}
                </span>
              </div>

              {/* Answer Section */}
              {activeIndex === index && (
                <div className="mt-2 px-10 py-4 bg-gray-50 border-l-4 border-[#589142]">
                  {x.header && (
                    <p className="font-medium text-[#353740E5]">{x.header}</p>
                  )}

                  <ul className="list-decimal pl-4">
                    {x.list.map((y, i) => (
                      <li key={i} className="font-bold text-[#353740E5]">
                        {y.heading}

                        {y.list.length > 0 && (
                          <ul className="list-disc pl-4">
                            {y.list.map((z, j) => (
                              <li key={j} className="font-medium">
                                {z}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>

                  {x.footer && (
                    <p className="font-medium text-[#353740E5]">{x.footer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        {/* </div> */}
        </div>
      {/* </div>
    </div> */}
  </section>
  );
};

export default Faq2;








// "use client";

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleChevronDown,
//   faCircleChevronUp,
// } from "@fortawesome/free-solid-svg-icons";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "What are the steps for doing the annual chemical inventory?",
//     answer:
//     "Yes, you can insert pictures in your FAQ by embedding image tags in the answer."
//   },
//   {
//     question: "Can I insert pictures in my FAQ?",
//     answer:
//       "Yes, you can insert pictures in your FAQ by embedding image tags in the answer.",
//   },
//   {
//     question: "Can I insert a video in my FAQ?",
//     answer:
//       "Yes, videos can also be embedded in the answer using the video tag or other media components.",
//   },
//   {
//     question: "How do I edit or remove the 'FAQ title'?",
//     answer:
//       "You can edit or remove the title by changing the header in the FAQ component.",
//   },
// ];

// const Faq2: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto mt-8 p-4">
//        <h1 className="text-3xl font-bold mb-12 text-center">
//         Frequently Asked Questions
//        </h1>
//       {faqData.map((item, index) => (
//         <div key={index} className="mb-3">
//           <div
//             className="flex justify-between items-center bg-gray-100 py- pr-6 rounded-lg cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex items-center space-x-3">
//               <span className="bg-[#589142] text-white text-3xl font-semibold w-20 h-16 flex justify-center items-center">
//                 {index + 1}
//               </span>
//               <span className="font-medium text-lg">{item.question}</span>
//             </div>
//             <span>
//               {activeIndex === index ? (
// <FontAwesomeIcon
//   icon={faCircleChevronUp}
//   className="text-[#589142] rounded-full text-2xl"
// />
//               ) : (
// <FontAwesomeIcon
//   icon={faCircleChevronDown}
//   className="text-[#589142] text-2xl"
// />
//               )}
//             </span>
//           </div>
//           {activeIndex === index && (
//             <div className="mt-2 px-10 py-4 bg-gray-50 border-l-4 border-[#589142]">
//               {item.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Faq2;
