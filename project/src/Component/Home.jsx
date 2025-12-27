
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import pack from "./photos/packging.png";
// import delivery from "./photos/delivery.png";
// import phone from "./photos/Phone.png";
// import tracking from "./photos/tracking.png"
// import plane from "./photos/plane.png"
// import docs from "./photos/docs.webp"


// import deliveryImg from "./photos/box.png"
// const changingWords = ["eBay", "Amazon", "Shopify", "Etsy", "Walmart"];
// import { ArrowRight } from 'lucide-react';

// const services = [
//   {
//     title: 'Express Courier ',

//     description:
//       'We specialized in regional as well international courier and cargo package delivery assure our customer a reliable, cost-effective delivery services, premium delivery services, and customized logistics solutions.',
//     link: '#',
//   },
//   {
//     title: 'Air Freight',

//     description:
//       'we strive to simplify your air shipping experience and also make it affordable. We offer fast and convenient services almost anywhere in the world.',
//     link: '#',
//   },
//   {
//     title: 'Sea Freight',

//     description:
//       'When you start to ship freight at high volumes, it’s time to go for sea freight. Our team is their to guide for everything ocean, from choosing the mode to calculating costs and transit times.',
//     link: '#',
//   },
//   {
//     title: 'Warehousing',

//     description:
//       'We have our own & rented warehousing space /arrangements at key locations across the country. Our Warehousing services help you reduce overheads cost but also simplify your end-to-end logistics in the process.',
//     link: '#',
//   },
//   {
//     title: 'Custom Clearance',
 
//     description:
//       'Grand slam known for being one of the top customs and clearing agents in India offering wide variety of services in order to help the clients for Import and Export Customs Clearances',
//     link: '#',
//   },
//   {
//     title: 'Cross Border',

//     description:
//       'We’ll make sure your documents are completed accurately and correctly, so you don’t need to feel intimidated by import and export procedure for Cross Border shipment.',
//     link: '#',
//   },
// ];
// const features = [
//   {
//     icon: (
//       <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//         <path d="M9 2a1 1 0 00-1 1v1H5a1 1 0 00-1 1v2h12V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H9zM4 10h12v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
//       </svg>
//     ),
//     title: "Same-day pick up",
//     desc: "Get your order picked up from your doorstep. Order before 2 PM for same day pick up",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//         <path d="M5 4a1 1 0 000 2h10a1 1 0 100-2H5zm0 4a1 1 0 000 2h6a1 1 0 100-2H5zm0 4a1 1 0 000 2h4a1 1 0 100-2H5z" />
//       </svg>
//     ),
//     title: "No shipping label needed",
//     desc: "Avoid the hassle of shipping labels. Book instantly, save time!",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//         <path d="M10 2a1 1 0 00-1 1v1H4v12h12V4h-5V3a1 1 0 00-1-1z" />
//       </svg>
//     ),
//     title: "Secure your parcel",
//     desc: "Delivery Protect saves you from loss in case of damage",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M19.882 16.623c-.03.06-.098.116-.198.168a10.94 10.94 0 01-3.095 1.044c-1.635.313-3.563.313-5.198 0A10.94 10.94 0 018.296 16.79c-.1-.052-.168-.109-.198-.168-.115-.23-.217-.462-.303-.697l1.195-1.195a7.933 7.933 0 003.03.593c1.15 0 2.27-.24 3.03-.593l1.195 1.195a8.003 8.003 0 01-.303.697z" />
//       </svg>
//     ),
//     title: "Reliable, Pan-India shipping",
//     desc: "Quick pick-up and fast delivery across 18,700+ pin codes",
//   },
// ];

// const steps = [
//     {
//       img: phone,
//       title: <> <strong>Schedule</strong> a free pickup</>,
//       desc: "Get doorstep pickup for parcels from your location. Book couriers for yourself or your loved ones online from our website or app",
//     },
//     {
//       img: delivery,
//       title: <>We arrive at your <strong>doorstep</strong></>,
//       desc: "Our partners reach your location within 24 hours of placing the order.",
//     },
//     {
//       img: tracking,
//       title: <>Sit back and <strong>relax</strong></>,
//       desc: "Your order will be delivered to the chosen destination. Track it from our website or app",
//     },
//   ];
  
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6 },
//   }),
// };

// const IconBox = ({ icon }) => (
//   <div className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] rounded-md shadow-lg">
//     {icon}
//   </div>
// );

// const HomeSection = () => {
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setWordIndex((prev) => (prev + 1) % changingWords.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-8">
//         {/* Left */}
//         <div className="max-w-xl space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             International Shipping for{" "}
//             <span className="text-blue-600 transition-all duration-500">
//               {changingWords[wordIndex]}
//             </span>
//           </h1>
//           <p className="text-gray-700 text-lg font-medium">
//             Affordable, reliable, and built for{" "}
//             <span className="text-yellow-500 font-semibold">eCommerce businesses</span>
//           </p>
//           <p className="text-black font-bold text-sm">
//             25,000+ Exporters &nbsp; | &nbsp; 1 Crore+ Orders Shipped &nbsp; | &nbsp; 220+ Countries
//           </p>
//           <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
//             Schedule Pickup
//           </button>
//         </div>

//         {/* Right */}
//         <div className="relative">
//           <img src={pack} alt="Packaging" className="w-[350px] md:w-[420px]" />
//         </div>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="min-h-screen bg-[#0A0B0D] text-white px-6 md:px-24 py-24">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-semibold leading-tight mb-3">
//               Get unmatched <br />
//               convenience with <br />
//               <span className="font-normal text-gray-300">Doorier Direct</span>
//             </h2>
//             <div className="w-10 h-1 bg-red-500 mt-3" />
//           </motion.div>

//           {/* Feature Grid */}
//           <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 className="group flex items-start gap-4 p-4 rounded-xl hover:shadow-xl transition-all hover:bg-[#111111] hover:scale-[1.02]"
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//               >
//                 <IconBox icon={feature.icon} />
//                 <div>
//                   <h4 className="text-lg font-semibold mb-1 group-hover:text-red-400 transition">
//                     {feature.title}
//                   </h4>
//                   <p className="text-sm text-gray-400">{feature.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
        
//       </section>
//       <section className="px-6 md:px-20 py-20 bg-white">
//       {/* Heading */}
//       <h2 className="text-3xl font-semibold mb-6">
//         How it <span className="font-bold text-black">works</span>
//       </h2>
//       <div className="w-12 h-1 bg-red-500 mb-12"></div>

//       {/* Steps */}
//       <div className="grid md:grid-cols-3 gap-12">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="text-center space-y-4 group transition duration-300 hover:scale-[1.02]"
//           >
//             <img
//               src={step.img}
//               alt="step"
//               className="mx-auto w-full max-w-xs rounded-lg shadow-md"
//             />
//             <h4 className="text-lg font-medium">{step.title}</h4>
//             <p className="text-gray-600 text-sm">{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//     <div className="relative bg-[#001E60] h-32 w-full overflow-hidden">
//       {/* Dashed line */}
//       <div className="relative bg-black h-32 w-full overflow-hidden">
//   {/* Dashed line */}
//   <div className="absolute top-1/2 w-full border-t-2 border-dashed border-white/30 transform -translate-y-1/2" />

//   {/* Animated Plane */}
//   <img
//     src={plane}
//     alt="plane"
//     className="absolute top-1/2 left-0 w-12 h-auto animate-planeFly"
//   />
// </div>
//     </div>
//     <section className="bg-[#f3f7fe] py-20 px-6 md:px-24">
//   <div className="flex flex-col-reverse md:flex-row items-center gap-16 max-w-7xl mx-auto">
    
//     {/* Left Content */}
//     <div className="md:w-1/2 space-y-6 text-center md:text-left">
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
//         DDP Services: <span className="text-blue-600">No Surprise Costs</span><br />
//         for Your Buyer
//       </h2>
//       <p className="text-gray-600 text-lg">
//         Our <strong>Delivered Duty Paid</strong> (DDP) model keeps you in control. Duties are calculated upfront and included in your shipping fee.
//       </p>
//       <p className="text-gray-700 text-lg">
//         Your customers receive their orders without unexpected doorstep charges.
//         <span className="font-semibold block mt-1">
//           No surprises, no frustration — just seamless delivery.
//         </span>
//       </p>

//       <a
//         href="#"
//         className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-md text-lg font-semibold transition-all"
//       >
//         Calculate Shipping Cost <span className="text-xl">₹</span>
//       </a>
//     </div>

//     {/* Right Image */}
//     <div className="md:w-1/2 flex justify-center">
//       <img
//         src={deliveryImg}
//         alt="DDP Delivery"
//         className="w-full max-w-md rounded-3xl shadow-xl object-cover"
//       />
//     </div>
//   </div>
// </section>




// <section className="bg-[#0A0B0D] text-white py-20 px-4 md:px-24">
//       <h2 className="text-3xl md:text-4xl font-semibold mb-12">
//         Delhivery’s <span className="font-bold">suite of solutions for</span>
//         <div className="h-1 w-16 bg-red-600 mt-3 rounded"></div>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {services.map((service) => (
//           <div key={service.title} className="space-y-4">
           
//             <h3 className="text-xl font-semibold">{service.title}</h3>
//             <p className="text-gray-300">{service.description}</p>
//             <a
//               href={service.link}
//               className="text-red-500 font-medium inline-flex items-center hover:underline"
//             >
//               Know More <ArrowRight className="ml-2" size={16} />
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>





// <section className="bg-[#f3f7fe] py-20 px-6 md:px-24">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
//     {/* Left Image */}
//     <div className="md:w-1/2 relative">
//       <img
//         src= {docs} // Replace with actual image path
//         alt="Paperwork and parcel"
//         className="rounded-2xl w-full max-w-md mx-auto"
//       />
      
//       {/* Decorative Icons */}
     
      
//     </div>

//     {/* Right Content */}
//     <div className="md:w-1/2 space-y-6 text-center md:text-left">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//         Easy Documentation and <br className="hidden md:block" />
//         Customs Clearance Support
//       </h2>
//       <p className="text-gray-600 text-lg">
//         Get your export paperwork done right as we walk you through exactly what you need.
//         Our <strong>Export Experts</strong> simplify the process for you, supporting you every step of the way.
//       </p>
//       <p className="text-gray-700 text-lg">
//         No more “Oops, wrong invoice format” or “Your parcel’s stuck at customs.”
//       </p>
//       <p className="text-gray-700 text-lg font-medium">
//         <strong>Save time, skip queues, and focus on your business</strong> while we handle the messy part.
//       </p>

     
//     </div>
//   </div>
// </section>
// <div className="min-h-screen bg-[#f4f8ff] flex flex-col lg:flex-row items-center justify-center px-6 py-12">
      
//       {/* Left Section */}
//       <div className="max-w-xl w-full mb-12 lg:mb-0 lg:mr-16">
//         <h2 className="text-3xl font-bold text-[#1a237e] mb-2">
//           <span className="text-[#1a237e]">Get Quote</span>
//         </h2>
//         <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
//         <h3 className="text-4xl font-extrabold text-[#1a237e] leading-snug">
//           No hidden charges. Just clear, <br /> upfront pricing
//         </h3>
//         <p className="mt-6 text-gray-700 leading-relaxed">
//           Forget hidden charges and last-minute shocks. Get real-time quotes that reflect exactly what you’ll pay. It’s simple, fair, and built for businesses that value clarity.
//         </p>
//         <p className="mt-4 text-gray-700 leading-relaxed">
//           <strong className="font-semibold text-black">Just drop in your details,</strong> and our team will get in touch with the best shipping rates—tailored to your business needs.
//         </p>
//       </div>

//       {/* Right Form Section */}
//       <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
//         <h3 className="text-2xl font-bold mb-6">
//           Explore <span className="text-[#1a237e] font-black">Doorier</span><span className="text-yellow-500 font-black"> Pricing</span>
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//           <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-4 py-2 w-full" />
//           <input type="text" placeholder="Last Name" className="border border-gray-300 rounded px-4 py-2 w-full" />
//         </div>

//         <input type="text" placeholder="Mobile Number" className="border border-gray-300 rounded px-4 py-2 w-full mb-4" />
//         <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 w-full mb-4" />

//         <div className="mb-4">
//           <p className="mb-2 font-medium">Are you selling Internationally?</p>
//           <div className="flex space-x-6">
//             <label className="flex items-center space-x-2">
//               <input type="radio" name="international" />
//               <span>Yes</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input type="radio" name="international" />
//               <span>No</span>
//             </label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <p className="mb-2 font-medium">Are you an e-commerce seller?</p>
//           <div className="flex space-x-6">
//             <label className="flex items-center space-x-2">
//               <input type="radio" name="ecommerce" />
//               <span>Yes</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input type="radio" name="ecommerce" />
//               <span>No</span>
//             </label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <p className="mb-2 font-medium">Average monthly volume?</p>
//           <select className="border border-gray-300 rounded px-4 py-2 w-full">
//             <option value="">Please Select</option>
//             <option value="1-100">1 - 100</option>
//             <option value="101-500">101 - 500</option>
//             <option value="500+">500+</option>
//           </select>
//         </div>

//         <p className="text-xs text-gray-500 mt-6">
//           Your registration is subject to our <span className="text-blue-600 underline">Privacy Policy.</span>
//         </p>
//       </div>
//     </div>



    
// {/* WhatsApp Floating Button */}
// <a
//   href="https://wa.me/919999999999" // Replace with your WhatsApp number
//   target="_blank"
//   rel="noopener noreferrer"
//   className="fixed bottom-6 right-6 z-50"
// >
//   <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition duration-300">
//     <svg
//       className="w-7 h-7 text-white"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M12 0C5.375 0 0 5.375 0 12c0 2.125.563 4.063 1.5 5.75L0 24l6.375-1.688C8.063 23.437 10 24 12 24c6.625 0 12-5.375 12-12S18.625 0 12 0zm0 22c-1.75 0-3.438-.5-4.875-1.375l-.375-.25-3.813 1L4.5 17.875l-.25-.375C3.5 16.438 3 14.75 3 13c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm4.688-6.313c-.25-.125-1.5-.75-1.688-.813-.188-.063-.313-.125-.438.125-.125.25-.5.813-.625.938-.125.125-.25.188-.438.063-.188-.125-.75-.25-1.438-.813-.531-.438-.875-.938-.938-1.125-.063-.188 0-.25.125-.375.125-.125.25-.313.375-.438.125-.125.188-.188.25-.313.063-.125.063-.25 0-.375-.063-.125-.438-1.063-.625-1.5-.188-.438-.375-.375-.5-.375h-.438c-.125 0-.313.063-.5.25s-.688.688-.688 1.688.75 1.938.875 2.063c.125.125 1.438 2.188 3.5 3.063.5.188.875.313 1.188.375.5.125.938.063 1.313.063.406 0 1.25-.5 1.438-.938.188-.438.188-.813.125-.938-.063-.125-.25-.188-.5-.313z" />
//     </svg>
//   </div>
// </a>


//     </>
//   );
// };

// export default HomeSection;








import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pack from "./photos/packging.png";
import delivery from "./photos/delivery.png";
import phone from "./photos/phone.png";
import tracking from "./photos/tracking.png"
import plane from "./photos/plane.png"
import docs from "./photos/docs.webp"


import deliveryImg from "./photos/box.png"
const changingWords = ["eBay", "Amazon", "Shopify", "Etsy", "Walmart"];
import { ArrowRight } from 'lucide-react';
import QuoteSection from "./QuoteSection";

const services = [
  {
    title: 'Express Courier ',

    description:
      'We specialized in regional as well international courier and cargo package delivery assure our customer a reliable, cost-effective delivery services, premium delivery services, and customized logistics solutions.',
    link: '#',
  },
  {
    title: 'Air Freight',

    description:
      'we strive to simplify your air shipping experience and also make it affordable. We offer fast and convenient services almost anywhere in the world.',
    link: '#',
  },
  {
    title: 'Sea Freight',

    description:
      'When you start to ship freight at high volumes, it’s time to go for sea freight. Our team is their to guide for everything ocean, from choosing the mode to calculating costs and transit times.',
    link: '#',
  },
  {
    title: 'Warehousing',

    description:
      'We have our own & rented warehousing space /arrangements at key locations across the country. Our Warehousing services help you reduce overheads cost but also simplify your end-to-end logistics in the process.',
    link: '#',
  },
  {
    title: 'Custom Clearance',
 
    description:
      'Grand slam known for being one of the top customs and clearing agents in India offering wide variety of services in order to help the clients for Import and Export Customs Clearances',
    link: '#',
  },
  {
    title: 'Cross Border',

    description:
      'We’ll make sure your documents are completed accurately and correctly, so you don’t need to feel intimidated by import and export procedure for Cross Border shipment.',
    link: '#',
  },
];
const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 00-1 1v1H5a1 1 0 00-1 1v2h12V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H9zM4 10h12v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Same-day pick up",
    desc: "Get your order picked up from your doorstep. Order before 2 PM for same day pick up",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 4a1 1 0 000 2h10a1 1 0 100-2H5zm0 4a1 1 0 000 2h6a1 1 0 100-2H5zm0 4a1 1 0 000 2h4a1 1 0 100-2H5z" />
      </svg>
    ),
    title: "No shipping label needed",
    desc: "Avoid the hassle of shipping labels. Book instantly, save time!",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a1 1 0 00-1 1v1H4v12h12V4h-5V3a1 1 0 00-1-1z" />
      </svg>
    ),
    title: "Secure your parcel",
    desc: "Delivery Protect saves you from loss in case of damage",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.882 16.623c-.03.06-.098.116-.198.168a10.94 10.94 0 01-3.095 1.044c-1.635.313-3.563.313-5.198 0A10.94 10.94 0 018.296 16.79c-.1-.052-.168-.109-.198-.168-.115-.23-.217-.462-.303-.697l1.195-1.195a7.933 7.933 0 003.03.593c1.15 0 2.27-.24 3.03-.593l1.195 1.195a8.003 8.003 0 01-.303.697z" />
      </svg>
    ),
    title: "Reliable, Pan-India shipping",
    desc: "Quick pick-up and fast delivery across 18,700+ pin codes",
  },
];

const steps = [
    {
      img: phone,
      title: <> <strong>Schedule</strong> a free pickup</>,
      desc: "Get doorstep pickup for parcels from your location. Book couriers for yourself or your loved ones online from our website or app",
    },
    {
      img: delivery,
      title: <>We arrive at your <strong>doorstep</strong></>,
      desc: "Our partners reach your location within 24 hours of placing the order.",
    },
    {
      img: tracking,
      title: <>Sit back and <strong>relax</strong></>,
      desc: "Your order will be delivered to the chosen destination. Track it from our website or app",
    },
  ];
  
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const IconBox = ({ icon }) => (
  <div className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] rounded-md shadow-lg">
    {icon}
  </div>
);

const HomeSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFF] text-gray-900 flex flex-col md:flex-row items-center px-8 md:px-20 py-24">

{/* Layered gradient shapes */}
<div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-purple-300/30 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/40 to-pink-200/40 blur-[150px] rounded-full"></div>

{/* Geometric neon outline */}
<div className="absolute inset-0 flex justify-center -z-10">
  <div className="w-[70%] h-[70%] border border-gray-300/40 rounded-[3rem] backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.07)]"></div>
</div>

{/* Floating gradient orb */}
<div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

{/* Left Section */}
<div className="relative z-20 max-w-2xl space-y-10">

  {/* Unique Tagline */}
  <div className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-full border border-gray-200 shadow-sm inline-block text-sm tracking-wide text-gray-700">
    ✨ Smart Logistics for Modern Founders
  </div>

  {/* Heading */}
  <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
    Reinventing  
    <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
      International Shipping
    </span>
  </h1>

  {/* Subheading */}
  <p className="text-gray-700 text-xl leading-relaxed max-w-xl">
    A creative, tech-driven shipping platform for new-age startups.  
    Beautifully simple, incredibly powerful, and built for today’s world.
  </p>

  {/* CTA Buttons */}
  <div className="flex gap-5 pt-4">
    <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300">
      Schedule Pickup
    </button>

    <button className="px-8 py-3.5 rounded-full border border-gray-300 bg-white/70 backdrop-blur-xl font-semibold text-gray-700 hover:bg-white hover:border-gray-400 transition-all duration-300">
      Explore Platform
    </button>
  </div>
</div>

{/* Right Visual */}
<div className="relative flex justify-center flex-1 mt-20 md:mt-0">

  {/* Irregular glass shape */}
  <div className="absolute w-[480px] h-[480px] bg-white/40 border border-white/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] rotate-6 -z-10"></div>

  {/* Main Image */}
  <img 
    src={pack} 
    alt="Packaging" 
    className="w-[440px] relative drop-shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
  />

  {/* Neon underglow line */}
  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[320px] h-[4px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-md"></div>
</div>

</section>

      {/* FEATURES SECTION */}
      <section className="min-h-screen bg-[#050507] text-white relative overflow-hidden py-28 px-6 md:px-20">

{/* Background Glows */}
<div className="absolute top-20 -left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-400/20 blur-[150px] rounded-full"></div>

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 relative z-10">
  
  {/* Left Heading */}
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="space-y-5 md:sticky md:top-32"
  >
    <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight">
      Experience 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        elite
      </span>
      <br />
      convenience with <br />
      <span className="font-normal text-gray-400">Doorier Direct</span>
    </h2>

    {/* Accent line */}
    <div className="w-20 h-[3px] bg-gradient-to-r from-blue-600 to-blue-400"></div>

    {/* Subtext */}
    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
      A reimagined way to deliver — smoother, smarter, and built to adapt to your daily workflow.
    </p>
  </motion.div>

  {/* Features */}
  <div className="md:col-span-2 grid sm:grid-cols-2 gap-10">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl 
                   hover:bg-white/10 hover:border-blue-500/40 
                   transition-all duration-300 
                   hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(50,100,255,0.25)]"
      >
        {/* Icon */}
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl inline-flex mb-3">
          <IconBox icon={feature.icon} />
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
          {feature.title}
        </h4>

        {/* Description */}
        <p className="text-gray-400 text-sm">
          {feature.desc}
        </p>
      </motion.div>
    ))}
  </div>

</div>
</section>


{/* section 3 starts here */}

<section className="px-6 md:px-24 py-24 bg-white">

  {/* Heading */}
  <h2 className="text-4xl font-bold mb-3">
    How it <span className="text-blue-600">Works</span>
  </h2>
  <div className="w-16 h-1 bg-blue-600 mb-16"></div>

  {/* Steps Wrapper */}
  <div className="relative max-w-6xl mx-auto">

    {/* Curved Line Connector */}
    <svg
      className="absolute inset-0 w-full h-full -z-10 opacity-40"
      viewBox="0 0 1000 200"
      fill="none"
      stroke="url(#blueGradient)"
      strokeWidth="4"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      <path
        d="M 80 120 
           C 300 10, 700 10, 920 120"
        strokeLinecap="round"
      />
    </svg>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

      {steps.map((step, index) => (
        <div
          key={index}
          className="relative group text-center p-6 bg-white rounded-3xl 
          shadow-md border border-gray-200 hover:-translate-y-2 hover:shadow-xl 
          transition-all duration-300"
        >
          {/* Floating Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-12 h-12 
            rounded-full bg-white flex items-center justify-center
            border-4 border-blue-600 shadow-md group-hover:scale-110 transition">
            <span className="text-xl font-bold text-blue-600">{index + 1}</span>
          </div>

          {/* Image */}
          <img
            src={step.img}
            alt=""
            className="w-full h-48 object-cover rounded-xl mb-5 shadow-sm
            group-hover:shadow-lg transition"
          />

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>

        </div>
      ))}

    </div>
  </div>
</section>

{/* section 4 starts here */}   
    <div className="relative bg-[#001E60] h-32 w-full overflow-hidden">
      {/* Dashed line */}
      <div className="relative bg-black h-32 w-full overflow-hidden">
  {/* Dashed line */}
  <div className="absolute top-1/2 w-full border-t-2 border-dashed border-white/30 transform -translate-y-1/2" />

  {/* Animated Plane */}
  <img
    src={plane}
    alt="plane"
    className="absolute top-1/2 left-0 w-12 h-auto animate-planeFly"
  />
</div>
    </div>

    {/* section 5 starts here  */}
    <section className="relative py-28 px-6 md:px-24 bg-[#f4f7ff] overflow-hidden">

{/* Floating Blue Blobs */}
<div className="absolute top-0 left-0 w-80 h-80 bg-blue-400/30 blur-[120px] rounded-full -z-10"></div>
<div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-700/20 blur-[160px] rounded-full -z-10"></div>

{/* Wrapper */}
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

  {/* Glass Card */}
  <div className="backdrop-blur-xl bg-white/40 border border-white/20 shadow-xl 
                  rounded-3xl p-10 relative">

    {/* Shine Line */}
    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl"></div>

    {/* Tag */}
    <span className="inline-block bg-white/50 backdrop-blur-md text-blue-700
                     px-4 py-1 rounded-full text-sm font-semibold border border-white/30 mb-5">
      DDP — Delivered Duty Paid
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
      Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r 
      from-blue-600 to-indigo-700">DDP Pricing</span><br />
      for a Better Customer Experience
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-lg leading-relaxed mb-4">
      With our <strong>Delivered Duty Paid</strong> service, duties and taxes are 
      calculated **before shipping**, giving you total clarity.
    </p>

    <p className="text-gray-700 text-lg leading-relaxed mb-8">
      Your buyers receive their orders without hidden fees —
      <span className="font-semibold text-gray-900">
        no doorstep charges, no surprises.
      </span>
    </p>

    {/* Button */}
    <a
      href="#"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600
                 text-white px-7 py-3.5 rounded-full text-lg font-semibold shadow-lg
                 hover:shadow-xl hover:-translate-y-1 transition-all">
      Calculate Shipping Cost
      <span className="text-xl">₹</span>
    </a>
  </div>

  {/* Image Right */}
  <div className="flex justify-center relative">

    {/* Glowing Ring */}
    <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 
                    blur-[100px] -z-10"></div>

    {/* Frosted Image Card */}
    <div className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-4 shadow-2xl">
      <img
        src={deliveryImg}
        alt="DDP Delivery"
        className="w-full max-w-md rounded-2xl object-cover shadow-xl"
      />
    </div>

  </div>
</div>
</section>

{/* section 6 starts here */}

<section className="relative bg-[#050507] text-white py-28 px-6 md:px-24 overflow-hidden">

  {/* Ambient Gradient Lights */}
  <div className="absolute -top-20 left-0 w-80 h-80 bg-blue-600/20 blur-[150px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full"></div>

  {/* Content Wrapper */}
  <div className="relative max-w-7xl mx-auto z-10">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-16">
      Delhivery’s <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        suite of solutions
      </span>
      <br />
      <span className="text-gray-300 font-normal">for modern logistics</span>

      <div className="mt-6 w-24 h-[3px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {services.map((service, i) => (
        <div
          key={service.title}
          className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                     hover:bg-white/10 hover:border-blue-500/40 
                     transition-all duration-300 hover:-translate-y-2 
                     shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_25px_rgba(30,100,255,0.2)]"
        >
          {/* Number / Dot */}
          <div className="text-sm font-semibold text-blue-400 opacity-80 mb-2">
            0{ i + 1 }
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          {/* CTA */}
          <a
            href={service.link}
            className="text-blue-400 font-medium inline-flex items-center gap-2 
                       group-hover:gap-3 transition-all"
          >
            Know More
            <ArrowRight size={16} className="transition" />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


{/* section 7 starts here */}

<section className="relative bg-[#f3f7fe] py-24 px-6 md:px-24 overflow-hidden">

  {/* Soft Glow Backgrounds */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 blur-[130px] rounded-full -z-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[160px] rounded-full -z-10"></div>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

    {/* Left Image */}
    <div className="md:w-1/2 relative">

      {/* Floating Glow Ring */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/20 blur-[70px] rounded-full"></div>

      {/* Image Card */}
      <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-xl border border-white/30 p-4">
        <img
          src={docs}
          alt="Documentation"
          className="rounded-2xl w-full max-w-md mx-auto object-cover shadow-lg"
        />
      </div>

      {/* Floating Icons (Decorative) */}
      <div className="absolute -bottom-8 left-4 bg-white/70 backdrop-blur-xl shadow-md px-4 py-2 rounded-full text-sm font-semibold text-blue-700 border border-white/40">
        ✓ Verified Docs
      </div>
      <div className="absolute top-12 -left-6 bg-white/80 backdrop-blur-xl shadow-md px-4 py-2 rounded-full text-sm font-semibold text-indigo-700 border border-white/40">
        ✓ Customs Safe
      </div>

    </div>

    {/* Right Content */}
    <div className="md:w-1/2 space-y-6 text-center md:text-left">

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Easy Documentation &  
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
          Customs Clearance Support
        </span>
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed">
        Get your export paperwork done right with guidance from our  
        <strong className="text-blue-700 font-semibold"> Export Experts</strong>.  
        We simplify the complete process for you, step by step.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed">
        No more  
        <span className="font-medium text-gray-800"> “wrong invoice format”</span>  
        or  
        <span className="font-medium text-gray-800"> “parcel stuck at customs.”</span>
      </p>

      <p className="text-gray-800 text-lg font-semibold leading-relaxed">
        Save time, skip queues, and focus on your business —  
        <span className="text-blue-700">we handle the messy part.</span>
      </p>

    </div>
  </div>
</section>


{/* section 8 starts here */}

<div className="relative min-h-screen bg-[#eef3ff] overflow-hidden">

  {/* Background gradient blobs */}
  <div className="absolute -top-32 -left-24 w-[38rem] h-[38rem] bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-[160px] opacity-60"></div>
  <div className="absolute bottom-[-30%] right-[-20%] w-[40rem] h-[40rem] bg-gradient-to-tr from-yellow-200 to-yellow-100 rounded-full blur-[180px] opacity-50"></div>

  {/* Subtle Noise Texture */}
  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] pointer-events-none"></div>

  {/* Floating Decorative Shapes */}
  <div className="absolute top-40 right-10 w-20 h-20 bg-white/30 rounded-xl backdrop-blur-md border border-white/40 shadow-xl rotate-12"></div>
  <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/30 rounded-full backdrop-blur-lg border border-white/30 shadow-xl"></div>

  {/* Main Content Wrapper */}
  {/* <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center gap-20">

    
    <div className="lg:w-1/2 space-y-8">

      
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 border border-white/30 backdrop-blur-md rounded-full shadow-md">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <p className="text-gray-700 font-medium text-sm">100% Transparent Estimates</p>
      </div>

     
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f1a3a] leading-tight tracking-tight">
        Get a Quote,  
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-2">
          Before You Ship.
        </span>
      </h1>

    
      <p className="text-gray-700 text-lg leading-relaxed">
        A simple, clean, honest pricing experience — designed for businesses that value clarity and speed.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Share your details and we’ll send you a tailored quote that fits your needs —  
        <span className="font-semibold">no hidden charges, no surprises.</span>
      </p>

    </div>

    
    <div className="lg:w-1/2 w-full">
      <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.12)] p-10">

        <h3 className="text-3xl font-extrabold text-[#0f1a3a] mb-8">
          Quick <span className="text-blue-600">Shipping Quote</span>
        </h3>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input className="premium-input" placeholder="First Name" />
          <input className="premium-input" placeholder="Last Name" />
        </div>

        <input className="premium-input mb-4" placeholder="Mobile Number" />
        <input className="premium-input mb-4" placeholder="Email" />

       
        <div className="mb-6">
          <p className="text-gray-900 font-medium mb-2">Selling internationally?</p>
          <div className="flex gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="international" className="premium-radio" /> Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="international" className="premium-radio" /> No
            </label>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-900 font-medium mb-2">E-commerce seller?</p>
          <div className="flex gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="ecommerce" className="premium-radio" /> Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="ecommerce" className="premium-radio" /> No
            </label>
          </div>
        </div>

        
        <div className="mb-8">
          <p className="text-gray-900 font-medium mb-2">Monthly shipment volume</p>
          <select className="premium-input">
            <option>Please Select</option>
            <option>1 - 100</option>
            <option>101 - 500</option>
            <option>500+</option>
          </select>
        </div>


        <button className="w-full py-4 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
          Get My Quote
        </button>

        <p className="text-xs text-gray-600 mt-4 text-center">
          By continuing, you agree to our <span className="text-blue-600 underline">Privacy Policy</span>.
        </p>

      </div>
    </div>

  </div> */}
  <QuoteSection/>
</div>

    
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919999999999" // Replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition duration-300">
    <svg
      className="w-7 h-7 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.375 0 0 5.375 0 12c0 2.125.563 4.063 1.5 5.75L0 24l6.375-1.688C8.063 23.437 10 24 12 24c6.625 0 12-5.375 12-12S18.625 0 12 0zm0 22c-1.75 0-3.438-.5-4.875-1.375l-.375-.25-3.813 1L4.5 17.875l-.25-.375C3.5 16.438 3 14.75 3 13c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm4.688-6.313c-.25-.125-1.5-.75-1.688-.813-.188-.063-.313-.125-.438.125-.125.25-.5.813-.625.938-.125.125-.25.188-.438.063-.188-.125-.75-.25-1.438-.813-.531-.438-.875-.938-.938-1.125-.063-.188 0-.25.125-.375.125-.125.25-.313.375-.438.125-.125.188-.188.25-.313.063-.125.063-.25 0-.375-.063-.125-.438-1.063-.625-1.5-.188-.438-.375-.375-.5-.375h-.438c-.125 0-.313.063-.5.25s-.688.688-.688 1.688.75 1.938.875 2.063c.125.125 1.438 2.188 3.5 3.063.5.188.875.313 1.188.375.5.125.938.063 1.313.063.406 0 1.25-.5 1.438-.938.188-.438.188-.813.125-.938-.063-.125-.25-.188-.5-.313z" />
    </svg>
  </div>
</a>


    </>
  );
};

export default HomeSection;