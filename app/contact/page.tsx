"use client"

import React from "react";
import Navbar from "../components/Navbar";

const EmailSignup: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-10 mt-0">
      <div className="flex flex-col justify-between items-center  rounded-3xl p-8  max-w-4xl mx-auto mt-0 mb-20 py-28 px-16  gap-20 bg-cover bg-center">
        <div className="h-20  bg-[#589142] w-full flex justify-between items-center text-2xl px-8">
          <h1>Phone No</h1>
          <h1>Email</h1>
        </div>
        <div>
          <h1 className="text-4xl font-bold ">Contact Us</h1>
        </div>
        <div className="flex flex-col text-4xl font-bold  ">
          <div className="flex justify-between  pb-10">
            <h1>Mail</h1>
            <h1>Email</h1>
          </div>
          <div>
            <button className="inline-block px-4 py-2 bg-[#589142] text-white rounded-xl hover:bg-[#589142]">Subject</button>
          </div>
        </div>
          <button className="inline-block px-4 py-2 bg-[#589142] text-white rounded-xl hover:bg-[#589142] text-4xl font-bold ">Submit</button>
      </div>
    </div>
    </>
  );
};

export default EmailSignup;
