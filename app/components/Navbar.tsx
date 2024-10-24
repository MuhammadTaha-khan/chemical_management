"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/k12_logo.png" // Path from the public directory
            alt="Logo"
            height={32}
            width={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            K12 Chemical
          </span>
        </Link>

        <div className="flex lg:order-2 space-x-3 rtl:space-x-reverse">
          {/* This div will show on larger screens */}
          <div className="hidden lg:flex text-white px-4 py-1 rounded-md items-center space-x-2">
            <button
              type="button"
              className="text-white bg-[#589142] hover:bg-[#589142] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center"
            >
              Book a Lab Visit
            </button>
            <div className="flex items-center space-x-2">
              <div className="border-2 border-gray-400 p-1 rounded-full">
                <i className="fas fa-phone text-white bg-[#589142] border-2 border-[#589142] p-3 rounded-full"></i>
              </div>
              <a href="tel:0201061245741" className="text-gray-400 font-medium">
                Call Us Now: <br /> <span className="text-black">02 01061245741</span>
              </a>
            </div>
          </div>

          {/* Menu button, now visible only below lg screens */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar items, full menu will now be visible from lg screens */}
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white">
                Home
              </Link>
            </li>
            {/* <li>
              <Link href="/about" className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white">
                About
              </Link>
            </li> */}
            <li>
              <Link href="/contact" className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white">
                Contact Me
              </Link>
            </li>
            <li>
            <Link href="/Faq" className="block py-2 px-3 rounded text-black lg:bg-transparent lg:p-0 dark:text-white">
                FAQ
              </Link>
            </li>

            {/* This section will be visible in the mobile menu */}
            <li className="lg:hidden">
              <div className="flex lg:order-2 space-x-3 rtl:space-x-reverse">
              <button
              type="button"
              className="text-white bg-[#589142] hover:bg-[#589142] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py- text-center"
            >
              Book a Lab Visit
            </button>
            <div className="flex items-center space-x-2">
              <div className="border-2 border-gray-400 p-1 rounded-full">
                <i className="fas fa-phone text-white bg-[#589142] border-2 border-[#589142] p-3 rounded-full"></i> {/* Phone icon */}
              </div>
              <a href="tel:0201061245741" className="text-gray-400 font-medium">
                Call Us Now: <br /> <span className="text-black">02 01061245741</span>
              </a>
            </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












// // components/Navbar.tsx
// import React from 'react';
// import Image from 'next/image';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <Image
//             src="/k12_logo.png" // Path from the public directory
//             alt="Flowbite Logo"
//             height={32} // Specify the height in pixels
//             width={32}  // Specify the width in pixels
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             K12 Chemical Management Support
//           </span>
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    
//           <button
//             type="button"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Get started
//           </button>
//           <div className="flex items-center space-x-2">
//           <Image
//               src="/phone_icon.png"  // Your phone icon
//               alt="Phone Icon"
//               width={24}  // Icon size
//               height={24} // Icon size
//             />
//             <a href="tel:0201061245741" className="text-gray-900 dark:text-white font-medium">
//               Call Us Now: <br />02 01061245741
//             </a>
//           </div>
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




