// import React from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding, FaCity } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* Hero */}
//       <section className="relative h-[50vh] bg-[url('/your-banner.jpg')] bg-cover bg-center flex items-center justify-center text-white">
//         <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>
//         <h1 className="text-4xl md:text-5xl font-bold z-10">Get In Touch</h1>
//       </section>

//       {/* Contact Info + Form */}
//       <section className="py-16 px-6 md:px-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           {/* Contact Details */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-semibold">Contact Information</h2>
//             <p className="text-gray-600">
//               Our team is here to help you 24/7 with logistics, delivery services, and shipment tracking.
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <FaMapMarkerAlt className="text-red-500 text-xl" />
//                 <span>123 Courier Lane, Express City, IN 452001</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <FaPhone className="text-red-500 text-xl" />
//                 <span>+91 98765 43210</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <FaEnvelope className="text-red-500 text-xl" />
//                 <span>support@fastcouriers.com</span>
//               </div>
//             </div>

//             <div className="mt-8">
//               <iframe
//                 title="Courier Location"
//                 className="w-full h-64 rounded-xl shadow-md"
//                 src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

//             <form className="space-y-4">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="flex items-center border rounded-lg px-3 py-2">
//                   <FaUser className="text-gray-400 mr-2" />
//                   <input type="text" placeholder="Your Name" className="w-full outline-none" />
//                 </div>
//                 <div className="flex items-center border rounded-lg px-3 py-2">
//                   <FaPhone className="text-gray-400 mr-2" />
//                   <input type="text" placeholder="Mobile Number" className="w-full outline-none" />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="flex items-center border rounded-lg px-3 py-2">
//                   <FaEnvelope className="text-gray-400 mr-2" />
//                   <input type="email" placeholder="Email" className="w-full outline-none" />
//                 </div>
//                 <div className="flex items-center border rounded-lg px-3 py-2">
//                   <FaBuilding className="text-gray-400 mr-2" />
//                   <input type="text" placeholder="Company" className="w-full outline-none" />
//                 </div>
//               </div>

//               <div className="flex items-center border rounded-lg px-3 py-2">
//                 <FaCity className="text-gray-400 mr-2" />
//                 <input type="text" placeholder="City" className="w-full outline-none" />
//               </div>

//               <textarea
//                 placeholder="Your message..."
//                 rows="4"
//                 className="w-full border rounded-lg px-3 py-2 resize-none"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
//               >
//                 Submit Query
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;



import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaCity,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900">

      {/* HERO */}
      <section className="h-[35vh] flex items-center justify-center font-tinos bg-[#f0f4ff] border-b">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact Us
        </h1>
      </section>

      {/* MAIN GRID */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* LEFT — CONTACT DETAILS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">We'd love to hear from you</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you have a question about delivery, pricing, tracking,
              or anything else — our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                <span>123 Courier Street, Express City, IN 452001</span>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-blue-600 text-xl mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-600 text-xl mt-1" />
                <span>support@fastcouriers.com</span>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-10">
              <iframe
                title="Courier Location"
                className="w-full h-56 rounded-lg border"
                src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white rounded-xl border p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

            <form className="space-y-5">

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-lg px-4 py-3 bg-gray-50">
                  <FaUser className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                <div className="flex items-center border rounded-lg px-4 py-3 bg-gray-50">
                  <FaPhone className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* EMAIL + COMPANY */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-lg px-4 py-3 bg-gray-50">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                <div className="flex items-center border rounded-lg px-4 py-3 bg-gray-50">
                  <FaBuilding className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* CITY */}
              <div className="flex items-center border rounded-lg px-4 py-3 bg-gray-50">
                <FaCity className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border rounded-lg px-4 py-3 bg-gray-50 resize-none outline-none"
              ></textarea>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;