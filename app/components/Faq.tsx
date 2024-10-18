"use client";

import { useState } from "react";

const Faq = () => {
  const [email, setEmail] = useState<string>("");

  // Define the email submission logic within the client component
  const handleEmailSubmit = () => {
    if (!email) {
      console.error("Email is required");
      return;
    }
    console.log("Email submitted:", email);
    // Add your email submission logic here (e.g., sending it to an API)
  };

  return (
    <section className="bg-white cta">
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div
            className="grid grid-cols-12 gap-4 cta-banner items-center bg-cover bg-no-repeat bg-center rounded"
            style={{ backgroundImage: "url(/images/cta_banner.png)", height: "60vh" }}
          >
            <div className="col-span-12 md:col-span-6 cta-title">
              <h1 className="text-5xl md:text-5xl font-bold text-white text-center">
                GET UPDATES <br /> & RESOURCES
              </h1>
            </div>
            <div className="col-span-12 md:col-span-6 cta-form md:flex md:flex-col md:justify-center md:items-center">
              <div className="text-center md:text-left">
                <input
                  type="email"
                  id="default-search"
                  className="w-80 rounded-full py-4 px-4 text-sm focus:outline-none border"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button
                  className="bg-white text-black py-3 px-6 rounded-full mt-4"
                  onClick={handleEmailSubmit}
                >
                  Join List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/images/utils/cta_left.png" className="cta_left" />
      <img src="/images/utils/cta_right.png" className="cta_right" />
    </section>
  );
};

export default Faq;