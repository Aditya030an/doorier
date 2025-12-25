

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
      "We specialize in both domestic and international courier and cargo delivery services, offering reliable, cost-effective, and time-sensitive logistics solutions. Our express services are designed to meet urgent delivery requirements while maintaining the highest standards of safety and efficiency.",
    desc2:
      "With advanced logistics technology and optimized routing systems, we ensure faster transit times, real-time tracking, and a seamless customer experience from pickup to final delivery.",
    image: img,
  },
  {
    title: "Air Freight",
    desc1:
      "Doorier provides a comprehensive range of international air freight solutions for import, export, and cross-trade shipments. Our global network enables us to deliver flexible, fast, and secure air cargo services tailored to your business needs.",
    desc2: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Door-to-Door Air Cargo and Courier Services</li>
        <li>Air Freight Consolidation</li>
        <li>Dangerous Goods Handling</li>
        <li>Temperature-Controlled Shipments</li>
        <li>Life Science & Healthcare Logistics</li>
        <li>Full and Part Air Charter Services</li>
      </ul>
    ),
    image: img2,
  },
  {
    title: "Sea Freight",
    desc1:
      "Through strong partnerships with leading global shipping lines, Doorier delivers reliable and cost-efficient sea freight solutions worldwide. We ensure secure cargo movement with optimized scheduling, space allocation, and end-to-end shipment management.",
    desc2: (
      <ul className="list-disc pl-5 space-y-1">
        <li>FCL (Full Container Load)</li>
        <li>LCL (Less than Container Load) Consolidation</li>
        <li>Break Bulk Cargo Handling</li>
        <li>Rolling Stock Transportation</li>
        <li>ISO Tanks and Flexi Tank Solutions</li>
        <li>Dangerous Goods Handling</li>
        <li>Reefer and Temperature-Controlled Cargo</li>
      </ul>
    ),
    image: img3,
  },
  {
    title: "Custom Clearance",
    desc1:
      "We manage the complexities of customs clearance with precision and efficiency, ensuring your shipments move seamlessly across borders. Our experienced customs professionals provide end-to-end consultation, ensuring compliance with all regulatory and statutory requirements.",
    desc2: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Customs Clearance for Air, Sea, Land & Courier Shipments</li>
        <li>Free Zone Transfers</li>
        <li>Ship Spares in Transit</li>
        <li>Temporary Import for Re-Export</li>
      </ul>
    ),
    image: img4,
  },
  {
    title: "Warehousing",
    desc1:
      "Doorier offers customized warehousing and distribution solutions designed to support efficient inventory management and supply chain optimization. Our facilities are strategically located to reduce operational costs and improve delivery efficiency.",
    desc2: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Dry Storage Facilities</li>
        <li>Temperature-Controlled Warehousing</li>
        <li>Open Yard Storage Solutions</li>
      </ul>
    ),
    image: img5,
  },
  {
    title: "Cross Border",
    desc1:
      "We simplify cross-border logistics by handling documentation, compliance, and regulatory processes with accuracy and care. Our expertise ensures smooth international trade operations, allowing you to ship confidently without administrative challenges.",
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




