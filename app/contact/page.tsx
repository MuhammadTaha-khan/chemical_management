import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const EmailSignup: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10 ">
        <div className="flex flex-col justify-between items-center rounded-3xl p-8  max-w-4xl mx-auto  py-28 px-16 gap-1 bg-cover bg-center">
          {/* Contact Info Section */}
          <div className="h-35 bg-[#589142] w-full flex md:flex-row flex-col gap-10 justify-between items-center text-2xl px-8 text-white">
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

          <div className="msg-section bg-gray-100 py-10">
            <div className="container mx-auto">
              <h1 className="text-center mb-5 text-3xl font-bold w-full text-white">
                CONTACT US
              </h1>
              <div className="flex justify-center  mb-4">
                {/* Left section with social links */}

                {/* Form Section */}
                <div className="md:w-7/12 bg-white shadow-lg p-6 rounded-lg mt-8 md:mt-0 ">
                  <form className="space-y-4">
                    <p className="text-sm font-bold mb-4 text-[#4fa72c] ">
                      Free contact now and get full access to our app.
                    </p>

                    {/* First Name */}
                    <input
                      className="w-full border border-gray-300 p-3 rounded-lg"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      required
                    />

                    {/* Last Name */}
                    <input
                      className="w-full border border-gray-300 p-3 rounded-lg"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      required
                    />

                    {/* Email */}
                    <input
                      className="w-full border border-gray-300 p-3 rounded-lg"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />

                    {/* Phone Number */}
                    <input
                      className="w-full border border-gray-300 p-3 rounded-lg"
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      required
                    />

                    {/* Message */}
                    <textarea
                      className="w-full border border-gray-300 p-3 rounded-lg"
                      placeholder="Your Message"
                      name="message"
                      required
                      rows={3}
                    />

                    {/* Submit Button */}
                    <button className=" button w-full" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSignup;
