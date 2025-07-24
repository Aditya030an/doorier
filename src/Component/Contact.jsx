import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding, FaCity } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-[50vh] bg-[url('/your-banner.jpg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>
        <h1 className="text-4xl md:text-5xl font-bold z-10">Get In Touch</h1>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Contact Information</h2>
            <p className="text-gray-600">
              Our team is here to help you 24/7 with logistics, delivery services, and shipment tracking.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span>123 Courier Lane, Express City, IN 452001</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-red-500 text-xl" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-xl" />
                <span>support@fastcouriers.com</span>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                title="Courier Location"
                className="w-full h-64 rounded-xl shadow-md"
                src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Your Name" className="w-full outline-none" />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaPhone className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Mobile Number" className="w-full outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input type="email" placeholder="Email" className="w-full outline-none" />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaBuilding className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Company" className="w-full outline-none" />
                </div>
              </div>

              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaCity className="text-gray-400 mr-2" />
                <input type="text" placeholder="City" className="w-full outline-none" />
              </div>

              <textarea
                placeholder="Your message..."
                rows="4"
                className="w-full border rounded-lg px-3 py-2 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
              >
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;