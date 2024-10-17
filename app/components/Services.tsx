import React from "react";
import Image from 'next/image'

const SliderSection: React.FC = () => {
  return (
    <section className="slider-area slider-tp-top pt-24 relative mb-36 md:mb-0 ">

      {/* Slider Content */}
      <div className="container md:mx-auto  mx-8   ">
        {/* Slide 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white mb-8">
          <div className="order-2 lg:order-1 pt-14">
            <div className="slider-content ">
              <h2 className="text-5xl font-bold mb-8 leading-normal text-[#589142]">
                Our Passion is to <br /> Give you Better <br /> Service
              </h2>
              <p className="mb-8">
                Your full service lab for clinical trials. Our mission is to ensure the <br />
                generation of accurate and precise findings.
              </p>
              <div className="slider-content__btn flex space-x-6 mb-32">
                <a className="tp-btn bg-[#589142] text-white py-2 px-6 rounded" href="contact.html">
                  Appointment
                </a>
                <a className="tp-btn-second ml-6 text-[#589142] py-2 px-6 border border-[#589142] rounded" href="about.html">
                  About us
                </a>
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

        {/* Slide 2 */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white">
          <div className="order-2 lg:order-1 pt-14">
            <div className="slider-content">
              <h2 className="text-4xl font-bold mb-8">
                Our Passion is to <br /> Give you Better <br /> Service
              </h2>
              <p className="mb-8">
                Your full service lab for clinical trials. Our mission is to ensure the <br />
                generation of accurate and precise findings.
              </p>
              <div className="slider-content__btn flex space-x-6 mb-32">
                <a className="tp-btn bg-blue-600 text-white py-2 px-6 rounded" href="contact.html">
                  Appointment
                </a>
                <a className="tp-btn-second ml-6 text-blue-600 py-2 px-6 border border-blue-600 rounded" href="about.html">
                  About us
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="slider-content__bg">
            <Image
            src="/hero1.png" // Path from the public directory
            alt="Flowbite Logo"
            height={32} // Specify the height in pixels
            width={32}  // Specify the width in pixels
          />
            </div>
            <div className="slider-content__shape hidden md:block">
            <Image
            src="/hero2.png" // Path from the public directory
            alt="Flowbite Logo"
            height={32} // Specify the height in pixels
            width={32}  // Specify the width in pixels
          />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SliderSection;
