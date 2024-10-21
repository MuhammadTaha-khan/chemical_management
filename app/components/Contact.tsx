import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const EmailSignup: React.FC = () => {
  return (
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
      <h1 className="text-center mb-5 text-3xl font-bold w-full text-white">CONTACT US</h1>
    <div className="flex justify-center  mb-4">

      {/* Left section with social links */}


      {/* Form Section */}
      <div className="md:w-7/12 bg-white shadow-lg p-6 rounded-lg mt-8 md:mt-0 ">
        {/* <h2 className="text-2xl font-semibold mb-4">Get In Touch With Us</h2> */}
        <form  className="space-y-4">
          <p className="text-sm font-bold mb-4 text-[#4fa72c] ">Free contact now and get full access to our app.</p>

          {/* First Name */}
          <input
            className="w-full border border-gray-300 p-3 rounded-lg"
            type="text"
            placeholder="First Name"
            name="firstName"
            // value={formData.firstName}
            // onChange={handleChange}
            required
          />

          {/* Last Name */}
          <input
            className="w-full border border-gray-300 p-3 rounded-lg"
            type="text"
            placeholder="Last Name"
            name="lastName"
            // value={formData.lastName}
            // onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            className="w-full border border-gray-300 p-3 rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />

          {/* Phone Number */}
          <input
            className="w-full border border-gray-300 p-3 rounded-lg"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            // value={formData.phoneNumber}
            // onChange={handleChange}
            required
          />

          {/* Message */}
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Your Message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            required
            rows={3}
          />

          {/* Submit Button */}
          <button
            className=" button w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>




      </div>
    </div>
  );
};

export default EmailSignup;
 









// import React from "react";

// const EmailSignup: React.FC = () => {
//   return (
//     <div className="mx-10 mt-10">
//       <div className="flex flex-col justify-between items-center  rounded-3xl p-8 shadow-lg max-w-4xl mx-auto mt-20 mb-20 py-28 px-16  gap-20 bg-cover bg-center">
//         <div className="h-35  bg-[#589142] w-full flex justify-between items-center text-2xl px-8">
//           <div className="flex flex-col justify-center items-center gap-2 p-2 text-white" >
//           <i className="fas fa-phone "></i>
//           <h1 className="font-semibold">Call Now</h1>
//           <p className="text-sm">+(92)-456-789</p>
//           </div>
//           <div className="flex flex-col justify-center items-center gap-2 p-2 text-white" >
//           <i className="fa-solid fa-location-dot "></i>
//           <h1 className="font-semibold">Call Now</h1>
//           <p className="text-sm">+(92)-456-789</p>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold ">Contact Us</h1>


//           <form className="max-w-sm mx-auto">
//   <div className="mb-5">
//     <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
//   </div>
//   <div className="mb-5">
//     <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//     <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//   </div>
//   <div className="mb-5">
//     <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
//     <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//   </div>
//   <div className="flex items-start mb-5">
//     <div className="flex items-center h-5">
//       <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
//     </div>
//     <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
//   </div>
//   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
// </form>

//       </div>
//     </div>
//   );
// };

// export default EmailSignup;
