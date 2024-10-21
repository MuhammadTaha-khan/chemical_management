"use client";
import { useState } from "react";
import Image from "next/image";

export default function ConsultationForm() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation-form"
      className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("/carousel1.jpg")',
        minHeight: "100vh",
      }}
    >
      {/* Left Section (Text + Form) */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
          For Free Consultation and to download the steps
          {/* <span className="text-white leading-snug "> */}
          <span className="text-gray-400 leading-snug ">
            10 steps to do annual chemical inventory
          </span>
        </h1>
        <p className="text-gray-500 mb-8">
          Once you submit your email we will display the image with the steps.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-2/3 p-3 border-2 rounded-full focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="w-full sm:w-1/3 p-3 bg-[#589142] hover:bg-[#428628] text-white rounded-full"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-green-500 font-semibold">
            Thanks for submitting! The image will be displayed below.
          </div>
        )}
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        {submitted ? (
          <Image
            src="/consform.jpeg" // Path from the public directory
            alt="10 Steps to do annual chemical inventory"
            height={590}
            width={501}
            className="rounded-lg object-contain max-"
          />
        ) : (
          <Image
            src="/consform.jpg"
            alt="10 Steps Preview"
            height={590}
            width={501}
            className="rounded-lg object-cover"
          />
        )}
      </div>
    </section>
  );
}
