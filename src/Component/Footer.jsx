

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaPinterestP />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Information Security Policy */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Information Security Policy</h2>
          <div className="w-10 border-b-4 border-red-500 mb-4"></div>
          <p className="text-sm text-gray-600 leading-relaxed">
            ST Courier is committed to safeguarding the confidentiality, integrity and availability
            of all physical and electronic information assets of the organization. We ensure that
            the regulatory, operational and contractual requirements are fulfilled.
          </p>
          <div className="flex gap-3 mt-5">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                className="text-white bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 gap-x-6 text-sm">
          <div>
            <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
            <div className="w-10 border-b-4 border-red-500 mb-4"></div>
            {["About Company", "GST", "Get A Quote", "Contact", "Pickup Login"].map((link, i) => (
              <p key={i} className="mb-2">
                <span className="text-red-500 font-bold">+</span>{" "}
                <a href="#" className="hover:text-red-500 transition-colors">
                  {link}
                </a>
              </p>
            ))}
          </div>
          <div>
            <div className="invisible md:visible mb-8">&nbsp;</div>
            {["Serviceable Area", "Careers", "Hiring Support", "Banned Items"].map((link, i) => (
              <p key={i} className="mb-2">
                <span className="text-red-500 font-bold">+</span>{" "}
                <a href="#" className="hover:text-red-500 transition-colors">
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Corporate Office */}
        <div className="text-sm space-y-4">
          <h2 className="text-xl font-semibold mb-2">Corporate Office</h2>
          <div className="w-10 border-b-4 border-red-500 mb-4"></div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-red-500 mt-1" />
            <p>No.199, Hariyan Street, C.Pallavaram,<br />Chennai - 600 043.</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-red-500" />
            <span>044-612 66 666</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-500" />
            <span>helpdesk@stcourier.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-red-500 mt-1" />
            <div>
              <p>Monday - Friday: 10 AM to 6.30 PM</p>
              <p>Saturday: 10 AM to 4.30 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




