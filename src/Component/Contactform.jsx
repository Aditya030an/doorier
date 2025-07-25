import React from "react";
import { FaEnvelope, FaUser, FaBuilding, FaCity, FaPhone, FaClock, FaChartBar } from "react-icons/fa";
import img from "./photos/contact.webp"
const ContactForm = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex items-center justify-center py-16 px-6">
      <div className="bg-white shadow-2xl rounded-3xl max-w-5xl w-full p-10 grid md:grid-cols-2 gap-10">
        {/* Left Visual */}
        <div className="flex flex-col justify-center items-start">
          <div className="bg-orange-600 text-white text-4xl font-bold px-6 py-3 rounded-full shadow-lg">
            Your QUERY
          </div>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Experienced & professional team ready to assist you with all your delivery needs.
          </p>
          <img
            src={img} // Replace with your actual envelope image path
            alt="Envelope"
            className="mt-16 w-45 opacity-90"
          />
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input type="text" placeholder="Name *" className="w-full outline-none" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <FaCity className="text-gray-500 mr-2" />
              <input type="text" placeholder="City *" className="w-full outline-none" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <FaBuilding className="text-gray-500 mr-2" />
              <input type="text" placeholder="Company Name *" className="w-full outline-none" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <FaPhone className="text-gray-500 mr-2" />
              <input type="text" placeholder="Mobile No *" className="w-full outline-none" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 col-span-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input type="email" placeholder="Email *" className="w-full outline-none" />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 col-span-2">
              <FaClock className="text-gray-500 mr-2" />
              <select className="w-full outline-none bg-transparent">
                <option>Right time to contact you</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option> 

              </select>
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 col-span-2">
              <FaChartBar className="text-gray-500 mr-2" />
              <input type="text" placeholder="Your Monthly distribution need *" className="w-full outline-none" />
            </div>
          </div>

          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 mt-4"
            placeholder="Your message..."
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-700 transition duration-300 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;