import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const EmailSignup: React.FC = () => {
  return (
    <div className="mx-0 mt-24  ">
      <div className="bg-[#589142] flex justify-center mb-10">
        {/* Contact Info Section */}
        <div className="h-35 bg-[#589142] w-full flex md:flex-row flex-col gap-10 justify-between items-center text-2xl px-8 text-white max-w-4xl">
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <FontAwesomeIcon icon={faPhone} />
            <h1 className="font-semibold">Call Now</h1>
            <p className="text-sm">+(92)-456-789</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1 className="font-semibold">Our Location</h1>
            <p className="text-sm">123 Business St, City</p>
          </div>
        </div>
      </div>

      <form className="max-w-lg mx-auto ">
        <h1 className="text-4xl font-bold pb-16 text-center pt-5">
          Contact Us
        </h1>
        <div className="flex md:flex-row flex-col md:gap-7 w-full ">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              type="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-60 p-2.5 "
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-5 ">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-medium text-gray-900 "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  md:w-60 p-2.5 "
              required
            />
          </div>
        </div>
        <div className="mb-5 ">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-md font-medium text-gray-900 "
          >
            Your Message
          </label>
          <textarea
            rows={5}
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#589142] hover:bg-[#4b922f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 text-center "
        >
          Submitt
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;

