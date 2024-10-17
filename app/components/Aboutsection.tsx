import React from "react";
import Image from 'next/image'
import second from '../../public/hero1.png'

const Aboutsection: React.FC = () => {
  return (
    <section
      className="about-area grey-bg pt-2 pb-32 mx-8 relative mt-32 lg:mt-0"
      style={{ backgroundImage: "url('/assets/img/shape/shape-bg-05.png')" }}
    >
      <div className="about-wrapper">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* About Thumb */}
            <div className="about-thumb text-center relative mb-8 lg:ml-24 ">
            <Image
            src="/about-bg-02.png" // Path from the public directory
            alt="Flowbite Logo"
            height={506} // Specify the height in pixels
            width={572}  // Specify the width in pixels
          />
              <div className="about-video absolute inset-0 flex justify-center items-center">
                <a
                  className="popup-video"
                  href="https://www.youtube.com/watch?v=-BpXNPHiB2U"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-play text-4xl text-white"></i>
                </a>
              </div>
              <div className="about-thumb-shape hidden md:block absolute bottom-0 left-0">
              <Image
            src="/about-bg-03.png" // Path from the public directory
            alt="Flowbite Logo"
            height={262} // Specify the height in pixels
            width={298}  // Specify the width in pixels
          />
              </div>
            </div>

            {/* About Content */}
            <div className="about-content mb-8 lg:ml-16">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-6 block font-semibold text-[#589142]">
                  __ About Us
                </span>
                <h3 className="tp-section__title mb-12  font-bold text-5xl leading-normal text-[#589142]">
                  Best Laboratory For Testing And Research
                </h3>
                <i className="block text-lg text-gray-700 mb-6">
                  Your full service lab for clinical trials. Our mission is to
                  ensure the generation of accurate and precise findings.
                </i>
                <p className="text-lg text-gray-600 mb-8">
                  Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
                  commodo claritatem insitamconse quat.Exerci tation ullamcorper
                  suscipit loborti excommodo habent claritatem insitamconse
                  quat.Exerci tationlobortis nisl aliquip ex ea commodo habent
                  claritatem insitamconse quat.
                </p>
              </div>
              <div className="about-content__btn">
                <a
                  href="/about"
                  className="tp-btn bg-[#589142] text-white py-3 px-6 rounded"
                >
                  Talk with Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="cta-area pt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div
              className="tp-cta-bg relative theme-light-bg py-16 px-8"
              style={{ backgroundImage: "url('/assets/img/shape/shape-bg-04.png')" }}
            >
              <div className="cta-content lg:ml-24">
                <div className="tp-section">
                  <span className="tp-section__sub-title sub-title-white left-line-white mb-5 block text-gray-100">
                    Book Free Sampling
                  </span>
                </div>
                <h2 className="cta-title mb-8 text-4xl font-bold text-white">
                  Free Sampling at your <br /> Home Address
                </h2>
                <div className="cta-btn">
                  <button className="tp-btn-second bg-white text-blue-600 py-2 px-6 rounded">
                    Book Now
                  </button>
                </div>
                <div className="cta-shape hidden md:block absolute bottom-0 right-0">
                <Image
            src="/k12_logo.png" // Path from the public directory
            alt="Flowbite Logo"
            height={132} // Specify the height in pixels
            width={32}  // Specify the width in pixels
          />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Aboutsection;
