import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Healthcare: React.FC = () => {
  return (
    <div className="mb-24 ">
      <section className="bg-[#589142] text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-12 font-bold text-3xl mt-8">ABOUT US</h1>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> */}
            {/* Healthcare Provider Section */}
            {/* <div className="bg-white text-[#589142] p-6 rounded-lg shadow-lg ">
              <div className="flex space-x-4">
                <i className="fas fa-user-md text-4xl"></i>
                <div>
                  <h3 className="text-xl font-bold">
                    I&apos;m a Healthcare Provider
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We pioneer in clinical testing with industry leaders to make
                    sure your patients have the information.
                  </p>
                  <a
                    href="#"
                    className="mt-4 block text-[#589142] font-semibold hover:underline"
                  >
                    Provider Registration
                  </a>
                </div>
              </div>
            </div> */}

            {/* Patient Section */}
            {/* <div className="bg-white text-[#589142] p-6 rounded-lg shadow-lg">
              <div className="flex  space-x-4">
                <i className="fas fa-vials text-4xl"></i>
                <div>
                  <h3 className="text-xl font-bold">I&apos;m a Patient</h3>
                  <p className="mt-2 text-gray-600">
                    We do that by offering tests that focus on prevention &
                    early identification of potential health conditions.
                  </p>
                  <a
                    href="#"
                    className="mt-4 block text-[#589142] font-semibold hover:underline"
                  >
                    Book An Appointment
                  </a>
                </div>
              </div>
            </div> */}
          {/* </div> */}

          {/* Trusted Data Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              {/* Trusted Data For Clear Health Decisions */}
            </h2>
            <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-md">
            At K12 chemical Management , we specialize in providing K-12 institutions with a comprehensive chemical inventory management system designed to enhance safety and compliance. 
            Our software simplifies the process of tracking, managing, and auditing chemicals within your facility. With user-friendly features, educators and administrators can easily
             catalog chemical substances, monitor quantities, and maintain up-to-date records. By leveraging our platform, schools can ensure they are adhering to safety regulations while 
             promoting a secure learning environment.
            </p>
            <p className="mt-8 text-gray-200 max-w-2xl mx-auto text-md">For any inquiries or to learn more about how our software can benefit your institution, please reach out to us for a consultation. We’re here to help you streamline your chemical
               inventory management and ensure the safety of your school community.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 ">
            <a
              href="#"
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600"
            >
              <i className="fas fa-check-circle mr-2"></i> Book consultation
            </a>
            <a
              href="#"
              className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#589142]"
            >
              Contact us now
            </a>
          </div>
        </div>
      </section>
      <div className="bg-[#589142] w-full h-40 curved-rectangle -mt-16">

      </div>

    </div>
  );
};

export default Healthcare;
