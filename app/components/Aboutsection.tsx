"use client"
import React, { useState } from "react";
import Image from "next/image";

const Aboutsection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="about-area grey-bg max-sm:mt-96 max-lg:mt-32 pt-6 pb-16 sm:pb-24 md:pb-32 mx-4 md:mx-8 lg:mx-16 lg:mt-0">
      <div className="about-wrapper">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* About Image with Play Button */}
            <div className="about-thumb relative text-center mb-8 lg:ml-24">
              <Image
                src="/about-bg-02.png"
                alt="About Image"
                height={613} // Specify the height in pixels
                width={540}  // Specify the width in pixels
              />
              {/* Play Button */}
              <div
                className="popup-video absolute inset-0 flex justify-center items-center cursor-pointer"
                onClick={openModal}
              >
                <span className="bg-[#589142] flex items-center justify-center p-4 px-5 rounded-full">
                  <span className="text-center flex items-center justify-center">
                    <i className="fas fa-play text-4xl text-white text-center"></i>
                  </span>
                </span>
              </div>
            </div>

            {/* About Content */}
            <div className="about-content mb-8 lg:ml-16">
              <div className="tp-section">
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
                  insitamconse quat.
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

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute -top-9 right-2  text-[#84da63] text-3xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Video Player */}
            <div className="aspect-w-16 aspect-h-9 px-2">
              <video className="w-full h-auto" controls autoPlay>
                <source src="/k12chemical.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Aboutsection;
















// import React from "react";
// import Image from "next/image";
// // hover:bg-[#428628]
// const Aboutsection: React.FC = () => {
//   return (
//     <section className="about-area grey-bg max-sm:mt-96 max-lg:mt-32  pt-6 pb-16 sm:pb-24 md:pb-32 mx-4 md:mx-8 lg:mx-16 lg:mt-0">
//       <div className="about-wrapper">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//             <div className="about-thumb relative text-center mb-8 lg:ml-24">
//               <Image
//                 src="/about-bg-02.png"
//                 alt="About Image"
//                 height={613} // Specify the height in pixels
//                 width={540}  // Specify the width in pixels
//               />
//               <a
//                 className="popup-video absolute inset-0 flex justify-center items-center"
//                 href="/k12chemical.mp4"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="bg-[#589142] flex items-center justify-center  p-4 px-5 rounded-full " >
//                 <span className="text-center flex items-center justify-center " >
//                 {/* <FaPlay className="text-4xl text-white text-center" /> */}
//                 <i className="fas fa-play text-4xl text-white text-center"></i>
//                 </span>
//                 </span>
//               </a>
//             </div>


//             <div className="about-content mb-8 lg:ml-16">
//               <div className="tp-section">
//                 {/* <span className="tp-section__sub-title left-line mb-6 block font-semibold text-[#589142]">
//                   __ About Us
//                 </span> */}
//                 <h3 className="tp-section__title mb-12 font-bold text-3xl md:text-4xl lg:text-5xl leading-7 text-[#589142]">
//                   Best Laboratory For Testing And Research
//                 </h3>
//                 <i className="block text-base md:text-lg text-gray-700 mb-6">
//                   Your full service lab for clinical trials. Our mission is to
//                   ensure the generation of accurate and precise findings.
//                 </i>
//                 <p className="text-base md:text-lg text-gray-600 mb-8">
//                   Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
//                   commodo claritatem insitamconse quat. Exerci tation
//                   ullamcorper suscipit loborti excommodo habent claritatem
//                   insitamconse quat. Exerci tation lobortis nisl aliquip ex ea
//                   commodo habent claritatem insitamconse quat.
//                 </p>
//               </div>
//               <div className="about-content__btn">
//                 <a
//                   href="/about"
//                   className="tp-btn bg-[#589142] text-white py-3 px-6 rounded"
//                 >
//                   Talk with Expert
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Aboutsection;



