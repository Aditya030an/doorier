
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pack from "./photos/packging.png";
import delivery from "./photos/delivery.png";
import phone from "./photos/Phone.png";
import tracking from "./photos/tracking.png"
import plane from "./photos/plane.png"
import docs from "./photos/docs.webp"


import deliveryImg from "./photos/box.png"
const changingWords = ["eBay", "Amazon", "Shopify", "Etsy", "Walmart"];
import { ArrowRight } from 'lucide-react';

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
      <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-8">
        {/* Left */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            International Shipping for{" "}
            <span className="text-blue-600 transition-all duration-500">
              {changingWords[wordIndex]}
            </span>
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Affordable, reliable, and built for{" "}
            <span className="text-yellow-500 font-semibold">eCommerce businesses</span>
          </p>
          <p className="text-black font-bold text-sm">
            25,000+ Exporters &nbsp; | &nbsp; 1 Crore+ Orders Shipped &nbsp; | &nbsp; 220+ Countries
          </p>
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Schedule Pickup
          </button>
        </div>

        {/* Right */}
        <div className="relative">
          <img src={pack} alt="Packaging" className="w-[350px] md:w-[420px]" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="min-h-screen bg-[#0A0B0D] text-white px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold leading-tight mb-3">
              Get unmatched <br />
              convenience with <br />
              <span className="font-normal text-gray-300">Doorier Direct</span>
            </h2>
            <div className="w-10 h-1 bg-red-500 mt-3" />
          </motion.div>

          {/* Feature Grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-4 p-4 rounded-xl hover:shadow-xl transition-all hover:bg-[#111111] hover:scale-[1.02]"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <IconBox icon={feature.icon} />
                <div>
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-red-400 transition">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>
      <section className="px-6 md:px-20 py-20 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">
        How it <span className="font-bold text-black">works</span>
      </h2>
      <div className="w-12 h-1 bg-red-500 mb-12"></div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center space-y-4 group transition duration-300 hover:scale-[1.02]"
          >
            <img
              src={step.img}
              alt="step"
              className="mx-auto w-full max-w-xs rounded-lg shadow-md"
            />
            <h4 className="text-lg font-medium">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
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
    <section className="bg-[#f3f7fe] py-20 px-6 md:px-24">
  <div className="flex flex-col-reverse md:flex-row items-center gap-16 max-w-7xl mx-auto">
    
    {/* Left Content */}
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
        DDP Services: <span className="text-blue-600">No Surprise Costs</span><br />
        for Your Buyer
      </h2>
      <p className="text-gray-600 text-lg">
        Our <strong>Delivered Duty Paid</strong> (DDP) model keeps you in control. Duties are calculated upfront and included in your shipping fee.
      </p>
      <p className="text-gray-700 text-lg">
        Your customers receive their orders without unexpected doorstep charges.
        <span className="font-semibold block mt-1">
          No surprises, no frustration — just seamless delivery.
        </span>
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-md text-lg font-semibold transition-all"
      >
        Calculate Shipping Cost <span className="text-xl">₹</span>
      </a>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={deliveryImg}
        alt="DDP Delivery"
        className="w-full max-w-md rounded-3xl shadow-xl object-cover"
      />
    </div>
  </div>
</section>




<section className="bg-[#0A0B0D] text-white py-20 px-4 md:px-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Delhivery’s <span className="font-bold">suite of solutions for</span>
        <div className="h-1 w-16 bg-red-600 mt-3 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.title} className="space-y-4">
           
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
            <a
              href={service.link}
              className="text-red-500 font-medium inline-flex items-center hover:underline"
            >
              Know More <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>





<section className="bg-[#f3f7fe] py-20 px-6 md:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
    {/* Left Image */}
    <div className="md:w-1/2 relative">
      <img
        src= {docs} // Replace with actual image path
        alt="Paperwork and parcel"
        className="rounded-2xl w-full max-w-md mx-auto"
      />
      
      {/* Decorative Icons */}
     
      
    </div>

    {/* Right Content */}
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Easy Documentation and <br className="hidden md:block" />
        Customs Clearance Support
      </h2>
      <p className="text-gray-600 text-lg">
        Get your export paperwork done right as we walk you through exactly what you need.
        Our <strong>Export Experts</strong> simplify the process for you, supporting you every step of the way.
      </p>
      <p className="text-gray-700 text-lg">
        No more “Oops, wrong invoice format” or “Your parcel’s stuck at customs.”
      </p>
      <p className="text-gray-700 text-lg font-medium">
        <strong>Save time, skip queues, and focus on your business</strong> while we handle the messy part.
      </p>

     
    </div>
  </div>
</section>
<div className="min-h-screen bg-[#f4f8ff] flex flex-col lg:flex-row items-center justify-center px-6 py-12">
      
      {/* Left Section */}
      <div className="max-w-xl w-full mb-12 lg:mb-0 lg:mr-16">
        <h2 className="text-3xl font-bold text-[#1a237e] mb-2">
          <span className="text-[#1a237e]">Get Quote</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
        <h3 className="text-4xl font-extrabold text-[#1a237e] leading-snug">
          No hidden charges. Just clear, <br /> upfront pricing
        </h3>
        <p className="mt-6 text-gray-700 leading-relaxed">
          Forget hidden charges and last-minute shocks. Get real-time quotes that reflect exactly what you’ll pay. It’s simple, fair, and built for businesses that value clarity.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong className="font-semibold text-black">Just drop in your details,</strong> and our team will get in touch with the best shipping rates—tailored to your business needs.
        </p>
      </div>

      {/* Right Form Section */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h3 className="text-2xl font-bold mb-6">
          Explore <span className="text-[#1a237e] font-black">Doorier</span><span className="text-yellow-500 font-black"> Pricing</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-4 py-2 w-full" />
          <input type="text" placeholder="Last Name" className="border border-gray-300 rounded px-4 py-2 w-full" />
        </div>

        <input type="text" placeholder="Mobile Number" className="border border-gray-300 rounded px-4 py-2 w-full mb-4" />
        <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 w-full mb-4" />

        <div className="mb-4">
          <p className="mb-2 font-medium">Are you selling Internationally?</p>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input type="radio" name="international" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="international" />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2 font-medium">Are you an e-commerce seller?</p>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input type="radio" name="ecommerce" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="ecommerce" />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2 font-medium">Average monthly volume?</p>
          <select className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="">Please Select</option>
            <option value="1-100">1 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Your registration is subject to our <span className="text-blue-600 underline">Privacy Policy.</span>
        </p>
      </div>
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