import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Healthcare: React.FC = () => {
  return (
    <div className="mb-24">
    <section className="bg-[#589142] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
          {/* Healthcare Provider Section */}
          <div className="bg-white text-[#589142] p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <i className="fas fa-user-md text-4xl"></i>
              <div>
                <h3 className="text-xl font-bold">I&apos;m a Healthcare Provider</h3>
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
          </div>

          {/* Patient Section */}
          <div className="bg-white text-[#589142] p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <i className="fas fa-vials text-4xl"></i>
              <div>
                <h3 className="text-xl font-bold">I&apos;m a Patient</h3>
                <p className="mt-2 text-gray-600">
                  We do that by offering tests that focus on prevention & early
                  identification of potential health conditions.
                </p>
                <a
                  href="#"
                  className="mt-4 block text-[#589142] font-semibold hover:underline"
                >
                  Book An Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Data Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Trusted Data For Clear Health Decisions
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Your focus is on providing patients the best possible care and we&apos;re
            here to help. To complement our comprehensive menu of tests, we
            provide resources to registered healthcare professionals to support
            your testing needs.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600"
          >
            <i className="fas fa-check-circle mr-2"></i> Accreditation &
            Licensing
          </a>
          <a
            href="#"
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#589142]"
          >
            Meet Our Leaders
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Healthcare;
