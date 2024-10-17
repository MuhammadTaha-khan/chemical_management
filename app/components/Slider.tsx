"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper styles

// Image imports (replace these with your images)
import carousel1 from '../../public/images/carousel4.jpg';
import carousel2 from '../../public/images/carousel5.webp';
import carousel3 from '../../public/images/carousel3.png';

const slides = [
  {
    image: carousel1,
    topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
    // title: 'Building The Best Test Experience!',
    title: 'K12 Chemical Management Support',
    description:
      'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
    buttonText: 'Test and Service',
    buttonLink: '#',
  },
  {
    image: carousel2,
    topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
    title: 'Building The Best Test Experience!',
    description:
      'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
    buttonText: 'Test and Service',
    buttonLink: '#',
  },
  {
    image: carousel3,
    topdescr: 'A Trusted Healthcare Partner Providing You With High Quality Test Services',
    title: 'Building The Best Test Experience!',
    description:
      'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
    buttonText: 'Test and Service',
    buttonLink: '#',
  },
];

const CarouselComponent = () => {
  return (
    <div id="default-carousel" className="relative w-full ">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true} // Enable looping of slides
        speed={700} // Set slide transition speed
        className="relative h-24 overflow-hidden md:h-[100vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute z-10 w-full text-center text-white top-1/3 px-4">
                         <div className="relative z-10 max-w-4xl mx-aut text-start py-24 px-20 sm:px-20 lg:py-6 lg:pl-20 ">
              {/* <p className="text-lg mb-6"></p> */}
              <h2 className="text-lg font-semibold text-white uppercase">{slide.topdescr}</h2>
              {/* <h3 className="text-4xl font-semibold mb-4"></h3> */}
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">{slide.title}</h1>
              {/* <p className="text-lg mb-6"></p> */}
              <p className="mt-6 text-lg text-white">{slide.description}</p>
              </div>
                {/* <a
                  href={slide.buttonLink}
                  className=" px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 text-start"
                >
                  {slide.buttonText}
                </a> */}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group">
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
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </div>
        <div className="swiper-button-next absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group">
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








// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// import { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation'; // Import Swiper styles

// // Image imports (replace these with your images)
// import carousel1 from '../../public/images/carousel1.jpeg';
// import carousel2 from '../../public/images/carousel1.jpeg';
// import carousel3 from '../../public/slider-bg-1.png';

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
//         className="relative h-24 overflow-hidden  md:h-[100vh]"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <Image
//             src={carousel1}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 1"
//           />
//         </SwiperSlide>
//         {/* Slide 2 */}
//         <SwiperSlide>
//           <Image
//             src={carousel2}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 2"
//           />
//         </SwiperSlide>
//         {/* Slide 3 */}
//         <SwiperSlide>
//           <Image
//             src={carousel3}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 3"
//           />
//         </SwiperSlide>

//         {/* Navigation Buttons */}
//         <div className="swiper-button-prev absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group">
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
//             <svg
//               className="w-6 h-6 text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </div>
//         <div className="swiper-button-next absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group">
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
//             <svg
//               className="w-6 h-6 text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default CarouselComponent;



// const slides = [
//   {
//     image: carousel1,
//     topdescr:'A Trusted Healthcare Partner Providing You With High Quality Test Services',
//     title: 'Building The Best Test Experience!',
//     description: 'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
//     buttonText: 'Test and Service ',
//     buttonLink: '#',
//   },
//   {
//     image: carousel2,
//     topdescr:'A Trusted Healthcare Partner Providing You With High Quality Test Services',
//     title: 'Building The Best Test Experience!',
//     description: 'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
//     buttonText: 'Test and Service ',
//     buttonLink: '#',
//   },
//   {
//     image: carousel3,
//     topdescr:'A Trusted Healthcare Partner Providing You With High Quality Test Services',
//     title: 'Building The Best Test Experience!',
//     description: 'We are continually harnessing our medical expertise to build the best test offerings while investing in technology to transform the delivery of health care.',
//     buttonText: 'Test and Service ',
//     buttonLink: '#',
//   },
// ];

// const CarouselComponent: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const goToPreviousSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-[100vh] overflow-hidden ">
//       {/* Carousel Wrapper */}
//       <div className="relative w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <Image
//               src={slide.image}
//               alt={slide.title}
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full object-cover"
//             />
//             {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start  text-white pl-20"> */}
//             <div className="relative z-10 max-w-4xl mx-aut text-start py-24 px-20 sm:px-20 lg:py-36 lg:pl-20 ">
//               {/* <p className="text-lg mb-6"></p> */}
//               <h2 className="text-lg font-semibold text-white uppercase">{slide.topdescr}</h2>
//               {/* <h3 className="text-4xl font-semibold mb-4"></h3> */}
//               <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">{slide.title}</h1>
//               {/* <p className="text-lg mb-6"></p> */}
//               <p className="mt-6 text-lg text-white">{slide.description}</p>
//               <div className='flex gap-5 pt-5 items-ceter items-center'>
                
//               <a
//                 href={slide.buttonLink}
//                 className="bg-[#589142] text-white font-medium px-6 py-5 rounded-lg hover:bg-[#589142] transition"
//                 >
//                 {slide.buttonText}
//               </a>
//               <button className='border-2 border-gray-400 p-2 rounded-full h-14 w-14 flex justify-center items-center bg-[#589142] mt-1'><i className="fa fa-play text-white bg-[#589142] border-2 border-[#589142]   rounded-full" aria-hidden="true"></i></button>
//               <p className='text-white font-bold'>How its Works</p>
//                 </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Previous Button */}
//       <button
//         onClick={goToPreviousSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 text-5xl bg-opacity-30 text-white font-semibold hover:bg-opacity-50 p-6 w-16 h-16 rounded-full"

//         aria-label="Previous Slide"
//       >
//         &#8249;
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={goToNextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 text-5xl bg-opacity-30 text-white font-semibold hover:bg-opacity-50 p-6 w-16 h-16 rounded-full"
//         aria-label="Next Slide"
//       >
//         &#8250;
//       </button>


//       {/* Carousel Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? 'bg-white' : 'bg-gray-300'
//             }`}
//             aria-label={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarouselComponent;
