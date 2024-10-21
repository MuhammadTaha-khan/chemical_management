import React from "react";
import Image from "next/image";
// hover:bg-[#428628]
const Aboutsection: React.FC = () => {
  return (
    <section className="about-area grey-bg max-sm:mt-96 max-lg:mt-32  pt-6 pb-16 sm:pb-24 md:pb-32 mx-4 md:mx-8 lg:mx-16 lg:mt-0">
      <div className="about-wrapper">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="about-thumb relative text-center mb-8 lg:ml-24">
              <Image
                src="/about-bg-02.png"
                alt="About Image"
                height={613} // Specify the height in pixels
                width={540}  // Specify the width in pixels
              />
              <a
                className="popup-video absolute inset-0 flex justify-center items-center"
                href="/k12chemical.mp4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-[#589142] flex items-center justify-center  p-4 px-5 rounded-full " >
                <span className="text-center flex items-center justify-center " >
                {/* <FaPlay className="text-4xl text-white text-center" /> */}
                <i className="fas fa-play text-4xl text-white text-center"></i>
                </span>
                </span>
              </a>
            </div>


            <div className="about-content mb-8 lg:ml-16">
              <div className="tp-section">
                {/* <span className="tp-section__sub-title left-line mb-6 block font-semibold text-[#589142]">
                  __ About Us
                </span> */}
                <h3 className="tp-section__title mb-12 font-bold text-3xl md:text-4xl lg:text-5xl leading-7 text-[#589142]">
                  Best Laboratory For Testing And Research
                </h3>
                <i className="block text-base md:text-lg text-gray-700 mb-6">
                  Your full service lab for clinical trials. Our mission is to
                  ensure the generation of accurate and precise findings.
                </i>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                  Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
                  commodo claritatem insitamconse quat. Exerci tation
                  ullamcorper suscipit loborti excommodo habent claritatem
                  insitamconse quat. Exerci tation lobortis nisl aliquip ex ea
                  commodo habent claritatem insitamconse quat.
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
    </section>
  );
};

export default Aboutsection;
