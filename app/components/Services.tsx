

import React from "react";
import Image from 'next/image'

const SliderSection: React.FC = () => {
  return (
    <section className="slider-area slider-tp-top pt-24 relative mb- md:mb-0   ">

      {/* Slider Content */}
      <div className="container mx-auto ">
        <div className="  flex flex-row flex-wrap items-center max-sm:p-5 justify-around bg-white mb-8">
          <div className="order-2 lg:order-1 pt-5">
            <div className="slider-content ">
              <h2 className="text-5xl font-bold mb-8 leading-normal text-[#589142]">
                Our Passion is to <br /> Give you Better <br /> Service
              </h2>
              <p className="mb-6 w-auto max-w-lg">
              Our mission is to ensure the safe and accurate tracking of chemicals, 
              fostering a secure environment for students and staff.
              </p>
              <p className="mb-8 w-auto max-w-lg">
              For additional support and answers to common questions, we encourage 
              you to visit our FAQ section. Read our FAQ here!
              </p>
              <div className="slider-content__btn flex space-x-6 mb-32">
                <button className="tp-btn bg-[#589142] text-white py-2 px-6 rounded" >
                  Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="slider-content__bg">
            <Image
            src="/slider-bg-1.png" // Path from the public directory
            alt="Flowbite Logo"
            height={613} // Specify the height in pixels
            width={540}  // Specify the width in pixels
          />
            </div>
            <div className="slider-content__shape hidden md:block">
            <Image
            src="/slider-bg-2.png" // Path from the public directory
            alt="Flowbite Logo"
            height={226} // Specify the height in pixels
            width={254}  // Specify the width in pixels
          />
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default SliderSection;






// "use client"

// import React, { useEffect, useRef } from "react";
// import Image from 'next/image';

// interface SliderSectionProps {
//   setActiveSection: (section: string) => void;  
// }

// const SliderSection: React.FC<SliderSectionProps> = ({ setActiveSection }) => {
//   const sliderRef = useRef<HTMLElement | null>(null);  

//   useEffect(() => {
//     const section = sliderRef.current;  
//     if (!section) return;

//     const observerOptions = {
//       root: null,  
//       threshold: 0.3, // Trigger when 30% of the section is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection("Services"); // Update active section when in view  
//         }
//       });
//     }, observerOptions);

//     observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);  
//     };
//   }, [setActiveSection]);

//   const handleScrollToConsultationForm = () => {
//     const consultationFormSection = document.getElementById("consultation-form");  
//     if (consultationFormSection) {
//       consultationFormSection.scrollIntoView({ behavior: 'smooth' });  
//       setActiveSection("consultation-form"); // Set consultation form section as active after scrolling
//     }
//   };

//   return (
//     <section  
//       ref={sliderRef}
//       id="slider"
//       className="slider-area slider-tp-top pt-24 relative mb- md:mb-0"
//     >
//       {/* Slider Content */}
//       <div className="container mx-auto">
//         <div className="flex flex-row flex-wrap items-center max-sm:p-5 justify-around bg-white mb-8">
//           <div className="order-2 lg:order-1 pt-5">
//             <div className="slider-content">
//               <h2 className="text-5xl font-bold mb-8 leading-normal text-[#589142]">
//                 Our Passion is to <br /> Give you Better <br /> Service
//               </h2>
//               <p className="mb-6 w-auto max-w-lg">
//                 Our mission is to ensure the safe and accurate tracking of chemicals,
//                 fostering a secure environment for students and staff.
//               </p>
//               <p className="mb-8 w-auto max-w-lg">
//                 For additional support and answers to common questions, we encourage
//                 you to visit our FAQ section. Read our FAQ here!
//               </p>
//               <div className="slider-content__btn flex space-x-6 mb-32">
//                 <button
//                   className="tp-btn bg-[#589142] text-white py-2 px-6 rounded"
//                   onClick={handleScrollToConsultationForm} // Add onClick to scroll to ConsultationForm
//                 >
//                   Appointment
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="order-1 lg:order-2">
//             <div className="slider-content__bg">
//               <Image
//                 src="/slider-bg-1.png"
//                 alt="Flowbite Logo"
//                 height={613}
//                 width={540}
//               />
//             </div>
//             <div className="slider-content__shape hidden md:block">
//               <Image
//                 src="/slider-bg-2.png"
//                 alt="Flowbite Logo"
//                 height={226}
//                 width={254}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SliderSection;



