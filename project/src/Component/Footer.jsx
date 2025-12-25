

// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaPinterestP,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const socialLinks = [
//   { icon: <FaFacebookF />, href: "#" },
//   { icon: <FaInstagram />, href: "#" },
//   { icon: <FaTwitter />, href: "#" },
//   { icon: <FaYoutube />, href: "#" },
//   { icon: <FaLinkedinIn />, href: "#" },
//   { icon: <FaPinterestP />, href: "#" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 px-6 py-12 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
//         {/* Information Security Policy */}
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Information Security Policy</h2>
//           <div className="w-10 border-b-4 border-red-500 mb-4"></div>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             Doorier Courier is committed to safeguarding the confidentiality, integrity and availability
//             of all physical and electronic information assets of the organization. We ensure that
//             the regulatory, operational and contractual requirements are fulfilled.
//           </p>
//           <div className="flex gap-3 mt-5">
//             {socialLinks.map((item, index) => (
//               <motion.a
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, rotate: 8 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-white bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300"
//               >
//                 {item.icon}
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* Useful Links */}
//         <div className="grid grid-cols-2 gap-x-6 text-sm">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
//             <div className="w-10 border-b-4 border-red-500 mb-4"></div>
//             {["About Company", "Contact"].map((link, i) => (
//               <p key={i} className="mb-2">
//                 <span className="text-red-500 font-bold">+</span>{" "}
//                 <a href="#" className="hover:text-red-500 transition-colors">
//                   {link}
//                 </a>
//               </p>
//             ))}
//           </div>
//           <div>
//             <div className="invisible md:visible mb-8">&nbsp;</div>
//             {["Express Courier", "Air Freight", "Sea Freight", "Custom Clearance", "Warehouse", "Cross Border"].map((link, i) => (
//               <p key={i} className="mb-2">
//                 <span className="text-red-500 font-bold">+</span>{" "}
//                 <a href="#" className="hover:text-red-500 transition-colors">
//                   {link}
//                 </a>
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Corporate Office */}
//         <div className="text-sm space-y-4">
//           <h2 className="text-xl font-semibold mb-2">Corporate Office</h2>
//           <div className="w-10 border-b-4 border-red-500 mb-4"></div>
//           <div className="flex items-start gap-3">
//             <FaMapMarkerAlt className="text-red-500 mt-1" />
//             <p>Office near IGI airport <br />Near Delhi</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <FaPhoneAlt className="text-red-500" />
//             <span>044-612 66 666</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <FaEnvelope className="text-red-500" />
//             <span>Doorierexpress@gmail.com</span>
//           </div>
//           <div className="flex items-start gap-3">
//             <FaClock className="text-red-500 mt-1" />
//             <div>
//               <p>Monday - Friday: 10 AM to 6.30 PM</p>
//               <p>Saturday: 10 AM to 4.30 PM</p>
//               <p>Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




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
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-blue-100/40 text-gray-800 pt-20 pb-10 px-6 border-t border-blue-200/40">

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 z-10">

        {/* Information Security Policy */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-blue-700">
            Information Security Policy
          </h2>
          <div className="w-12 h-1.5 bg-blue-500 rounded-full mt-2 mb-5"></div>

          <p className="text-[15px] text-gray-600 leading-relaxed">
            Doorier Courier is committed to protecting the confidentiality, integrity, 
            and availability of all information assets. We ensure regulatory and contractual 
            obligations are always met with the highest standards.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full shadow-md bg-white/60 backdrop-blur-xl border border-blue-200/50 text-blue-700 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 gap-x-6 text-[15px]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-blue-700">
              Useful Links
            </h2>
            <div className="w-12 h-1.5 bg-blue-500 rounded-full mt-2 mb-5"></div>

            {["About Company", "Contact"].map((link, i) => (
              <p key={i} className="mb-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>

          <div>
            <div className="mb-10 invisible md:visible">&nbsp;</div>

            {[
              "Express Courier",
              "Air Freight",
              "Sea Freight",
              "Custom Clearance",
              "Warehouse",
              "Cross Border",
            ].map((link, i) => (
              <p key={i} className="mb-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Corporate Office */}
        <div className="text-[15px] space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-blue-700">
            Corporate Office
          </h2>
          <div className="w-12 h-1.5 bg-blue-500 rounded-full mt-2 mb-5"></div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <p>Office near IGI Airport <br />Delhi, India</p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span>044-612 66 666</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span>Doorierexpress@gmail.com</span>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="text-blue-600 mt-1" />
            <div>
              <p>Mon–Fri: 10 AM – 6:30 PM</p>
              <p>Saturday: 10 AM – 4:30 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-600 text-sm mt-16">
        © {new Date().getFullYear()} Doorier Courier. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;