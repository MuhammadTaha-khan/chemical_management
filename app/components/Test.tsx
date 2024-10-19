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
    title: 'K12 Chemical Management',
    buttonLink: '#',
  },
  {
    image: carousel2,
    title: '10 Steps to Conduct a Chemical Inventory for Free',
    buttonLink: '#',
  },
  {
    image: carousel3,
    title: 'We’ve got all your K12 safety training, chemical management, and environment compliance questions answered here',
    buttonLink: '#',
  },
];

const Test = () => {
  return (
    <div id="default-carousel" className="relative w-full ">
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
            <div className="relative w-full h-full mt-24">
              <Image
                src={slide.image}
                className="absolute w-full h-full object-cover "
                alt={`Slide ${index + 1}`}
                layout="fill"
              />
              {/* Centering the title vertically and horizontally */}
              <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-8 lg:px-14">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                    {slide.title}
                  </h1>
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

export default Test;
