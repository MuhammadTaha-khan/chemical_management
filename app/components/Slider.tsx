// "use client"
// import React from 'react';
// import Image from 'next/image';

// // import { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation'; // Import Swiper styles

// // Image imports (replace these with your images)
// import carousel1 from '../../public/images/carousel1.jpg';
// import carousel2 from '../../public/images/carousel2.jpg';
// import carousel3 from '../../public/images/carousel3.jpg';

// const slides = [
//   {
//     image: carousel1,
//     topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
//     // title: 'Building The Best Test Experience!',
//     title: 'K12 Chemical Management',
//     description:
//       'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
//     buttonText: 'Test and Service',
//     buttonLink: '#',
//   },
//   {
//     image: carousel2,
//     topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
//     title: '10Steps to Conduct a Chemical Inventory for Free',
//     description:
//       'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
//     buttonText: 'Test and Service',
//     buttonLink: '#',
//   },
//   {
//     image: carousel3,
//     topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
//     title: 'We’ve got all your K12 safety training, chemical management and environment compliance questions answered here',
//     description:
//       'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
//     buttonText: 'Test and Service',
//     buttonLink: '#',
//   },
// ];

// const CarouselComponent = () => {
//   return (
//     <div id="default-carousel" className="relative w-full ">
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         loop={true} // Enable looping of slides
//         speed={700} // Set slide transition speed
//         className="relative h-24 overflow-hidden md:h-[100vh]"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               <Image
//                 src={slide.image}
//                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt={`Slide ${index + 1}`}
//               />
//               <div className="absolute z-10 w-full text-center text-white top-1/3 px-4">
//              <div className="relative z-10 max-w-4xl mx-aut text-center py-24 px-20 sm:px-20 lg:py-6 lg:pl-20 ">
//               {/* <h2 className="text-lg font-semibold text-center text-white uppercase">{slide.topdescr}</h2> */}
//               <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">{slide.title}</h1>
//               {/* <p className="mt-6 text-lg text-white">{slide.description}</p> */}
//               </div>
//                 {/* <a
//                   href={slide.buttonLink}
//                   className=" px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 text-start"
//                 >
//                   {slide.buttonText}
//                 </a> */}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Navigation Buttons */}
    //     <div className="swiper-button-prev absolute top-0 left-0 z-30 flex items-center justify-center h-full px-24 cursor-pointer group">
    //       <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
    //         <svg
    //           className="w-10 h-10 text-white"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M5 1 1 5l4 4"
    //           />
    //         </svg>
    //         <span className="sr-only">Previous</span>
    //       </span>
    //     </div>


    //     <div className="swiper-button-next absolute top-0 right-0 z-30 flex items-center justify-center h-full px-24 cursor-pointer group">
    //       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
    //         <svg
    //           className="w-6 h-6 text-white"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="m1 9 4-4-4-4"
    //           />
    //         </svg>
    //         <span className="sr-only">Next</span>
    //       </span>
    //     </div>
    //   </Swiper>
    // </div>
//   );
// };

// export default CarouselComponent;



"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import carousel1 from '../../public/images/carousel1.jpg';
import carousel2 from '../../public/images/carousel2.jpg';
import carousel3 from '../../public/images/carousel3.jpg';

const slides = [
  {
    image: carousel1,
    topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
    title: 'K12 Chemical Management',
    description:
      'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
    buttonText: 'Test and Service',
    buttonLink: '#',
  },
  {
    image: carousel2,
    topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
    title: '10Steps to Conduct a Chemical Inventory for Free',
    description:
      'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
    buttonText: 'Test and Service',
    buttonLink: '#',
  },
  {
    image: carousel3,
    topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
    title: 'We’ve got all your K12 safety training, chemical management and environment compliance questions answered here',
    description:
      'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
    buttonText: 'Test and Service',
    buttonLink: '#',
  },
];

const CarouselComponent = () => {
  return (
    <div id="default-carousel" className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        speed={700}
        className="relative h-72 sm:h-96 md:h-[100vh]" // Updated for responsive height
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                className="absolute w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
                layout="fill"
              />
              <div className="absolute z-10 w-full text-center text-white top-1/3 m px-4">
                <div className="relative z-10 max-w-4xl mx-auto text-start py- px-4 sm:px-8 lg:px-14">
                  {/* <h2 className="text-lg font-semibold text-white uppercase">{slide.topdescr}</h2> */}
                  <h1 className="mt text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                    {slide.title}
                  </h1>
                  {/* <p className="mt-6 text-base sm:text-lg md:text-xl text-white">{slide.description}</p> */}
                  {/* <a
                    href={slide.buttonLink}
                    className="mt-6 inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    {slide.buttonText}
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute top-0 left-0 z-30 flex items-center justify-center h-full px-8 sm:px-16, md:px-20 lg:px-24 cursor-pointer group">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-10 h-10 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </div>


        <div className="swiper-button-next absolute top-0 right-0 z-30 flex items-center justify-center h-full px-8 sm:px-16, md:px-20 lg:px-24 cursor-pointer group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselComponent;



