



// import React from "react";
// import banner from "./photos/banner.webp";
// import img from "./photos/footerimg.png"; // Replace with actual images per service
// import img2 from "./photos/img2.avif";
// import img3 from "./photos/img3.avif";
// import img4 from "./photos/box.png";
// import img5 from "./photos/img5.avif";
// import img6 from "./photos/img6.avif";
// const services = [
//   {
//     title: "Express Courier",
//     desc1:
//       "We specialized in regional as well international courier and cargo package delivery assure our customer a reliable, cost-effective delivery services, premium delivery services, and customized logistics solutions.",
//     desc2:
//       "Our advanced logistics and technology ensure efficient routes, fast transit times, and excellent customer experiences.",
//     image: img,
//   },
//   {
//     title: "Air Freight",
//     desc1:
//       "Our air freight services are designed for speed and efficiency, helping your urgent deliveries reach destinations quickly and securely across the globe.",
//     desc2:
//       "We work with major airlines and global partners to ensure seamless logistics and timely deliveries.",
//     image: img2,
//   },
//   {
//     title: "Sea Freight",
//     desc1:
//       "Reliable and cost-effective sea freight services for large shipments and international bulk deliveries.",
//     desc2:
//       "Our expert team handles end-to-end shipping, customs, and port logistics for a hassle-free experience.",
//     image: img3,
//   },
//   {
//     title: "Custom Clearance",
//     desc1:
//       "We simplify global shipping with efficient customs clearance and compliance handling.",
//     desc2:
//       "Our team ensures accurate documentation and rapid clearance to avoid delays.",
//     image: img4,
//   },
//   {
//     title: "Warehousing",
//     desc1:
//       "We offer secure, scalable warehousing solutions with real-time inventory management.",
//     desc2:
//       "Perfect for businesses needing storage, fulfillment, and efficient dispatch operations.",
//     image: img5,
//   },
//   {
//     title: "Cross Border",
//     desc1:
//       "Expand globally with our fast and compliant cross-border shipping services.",
//     desc2:
//       "We ensure customs-ready packaging, proper documentation, and timely delivery.",
//     image: img6,
//   },
// ];

// const Service = () => {
//   return (
//     <>
//       {/* Hero Banner */}
//       <section
//         className="relative bg-cover bg-center text-white h-[500px] flex items-center"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
//         </div>
//       </section>

//       {/* Services Sections */}
//       {services.map((service, index) => (
//         <section
//           key={index}
//           className="w-full bg-white py-16 px-6 md:px-20"
//         >
//           <div
//             className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative ${
//               index % 2 === 1 ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             {/* Conditionally place image left or right */}
//             {index % 2 === 0 ? (
//               <>
//                 {/* Text Left */}
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
//                     <span className="border-l-4 border-yellow-400 pl-4">
//                       {service.title}
//                     </span>
//                   </h2>
//                   <p className="text-gray-600 text-lg leading-relaxed mb-4">
//                     {service.desc1}
//                   </p>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     {service.desc2}
//                   </p>
//                 </div>
//                 {/* Image Right */}
//                 <div className="relative">
//                   <div className="absolute -bottom-10 right-0 w-full h-24 bg-yellow-400 rounded-b-3xl -z-10" />
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="rounded-xl w-full shadow-lg object-cover"
//                   />
//                 </div>
//               </>
//             ) : (
//               <>
//                 {/* Image Left */}
//                 <div className="relative">
//                   <div className="absolute -bottom-10 left-0 w-full h-24 bg-yellow-400 rounded-b-3xl -z-10" />
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="rounded-xl w-full shadow-lg object-cover"
//                   />
//                 </div>
//                 {/* Text Right */}
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
//                     <span className="border-l-4 border-yellow-400 pl-4">
//                       {service.title}
//                     </span>
//                   </h2>
//                   <p className="text-gray-600 text-lg leading-relaxed mb-4">
//                     {service.desc1}
//                   </p>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     {service.desc2}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         </section>
//       ))}
//     </>
//   );
// };

// export default Service;






import React from "react";
import { motion } from "framer-motion";
import banner from "./photos/banner.webp";
import img from "./photos/footerimg.png";
import img2 from "./photos/img2.avif";
import img3 from "./photos/img3.avif";
import img4 from "./photos/box.png";
import img5 from "./photos/img5.avif";
import img6 from "./photos/img6.avif";

const services = [
  {
    title: "Express Courier",
    desc1:
      "We specialized in regional as well international courier and cargo package delivery assure our customer a reliable, cost-effective delivery services, premium delivery services, and customized logistics solutions.",
    desc2:
      "Our advanced logistics and technology ensure efficient routes, fast transit times, and excellent customer experiences.",
    image: img,
  },
  {
    title: "Air Freight",
    desc1:
      "Our air freight services are designed for speed and efficiency, helping your urgent deliveries reach destinations quickly and securely across the globe.",
    desc2:
      "We work with major airlines and global partners to ensure seamless logistics and timely deliveries.",
    image: img2,
  },
  {
    title: "Sea Freight",
    desc1:
      "Reliable and cost-effective sea freight services for large shipments and international bulk deliveries.",
    desc2:
      "Our expert team handles end-to-end shipping, customs, and port logistics for a hassle-free experience.",
    image: img3,
  },
  {
    title: "Custom Clearance",
    desc1:
      "We simplify global shipping with efficient customs clearance and compliance handling.",
    desc2:
      "Our team ensures accurate documentation and rapid clearance to avoid delays.",
    image: img4,
  },
  {
    title: "Warehousing",
    desc1:
      "We offer secure, scalable warehousing solutions with real-time inventory management.",
    desc2:
      "Perfect for businesses needing storage, fulfillment, and efficient dispatch operations.",
    image: img5,
  },
  {
    title: "Cross Border",
    desc1:
      "Expand globally with our fast and compliant cross-border shipping services.",
    desc2:
      "We ensure customs-ready packaging, proper documentation, and timely delivery.",
    image: img6,
  },
];

const Service = () => {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center text-white h-[500px] flex items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className="w-full bg-white py-16 px-6 md:px-20"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
              {isEven ? (
                <>
                  {/* Text Left */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                      <span className="border-l-4 border-yellow-400 pl-4">
                        {service.title}
                      </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {service.desc1}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.desc2}
                    </p>
                  </motion.div>

                  {/* Image Right */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -bottom-10 right-0 w-full h-24 bg-yellow-400 rounded-b-3xl -z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl w-full shadow-lg object-cover"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Image Left */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -bottom-10 left-0 w-full h-24 bg-yellow-400 rounded-b-3xl -z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl w-full shadow-lg object-cover"
                    />
                  </motion.div>

                  {/* Text Right */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                      <span className="border-l-4 border-yellow-400 pl-4">
                        {service.title}
                      </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {service.desc1}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.desc2}
                    </p>
                  </motion.div>
                </>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Service;