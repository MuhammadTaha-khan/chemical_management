import React from "react";

const EmailSignup: React.FC = () => {
  return (

      <div className="mx-10">
        <div className="flex flex-col md:flex-row justify-between items-center ] rounded-3xl p-8 shadow-lg max-w-4xl mx-auto mt-20 mb-20 py-28 px-16  gap-20 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/cta_banner.png")',
                minHeight: "",
              }}>
          <div className="text-white text-4xl font-bold leading-normal">
            Get Updates <br />& Resources
          </div>
          <div className="flex flex-col  space-x-4 gap-5">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-3 w-64 rounded-full text-gray-700 focus:outline-none shadow-lg"
            />
            <button className="bg-white text-[#589142] font-semibold w-24 py-2 rounded-full shadow-lg">
              Join List
            </button>
          </div>
        </div>
      </div>
  );
};

export default EmailSignup;
