// // // Company.jsx
// // import React from "react";
// // import heroBg from "./photos/poster.png"; // Make sure this path is correct

// // const Company = () => {
// //   return (
// //     <div
// //       className="relative w-full h-screen bg-cover bg-center flex items-center justify-start"
// //       style={{
// //         backgroundImage: `url(${heroBg})`,
// //       }}
// //     >
// //       {/* Dark Overlay */}
// //       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

// //       {/* Text Content */}
// //       <div className="relative z-10 px-6 md:px-20 max-w-4xl text-white">
// //         <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
// //           We are building the <span className="text-red-600 font-bold">Operating System</span> for Commerce
// //         </h1>
// //         <p className="mt-4 text-base sm:text-lg md:text-xl font-light">
// //           Trusted partner for small businesses, large marketplaces, and every type of business
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Company;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import heroBg from "./photos/poster.png"; // Ensure this is correct

// gsap.registerPlugin(ScrollTrigger);

// const Company = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//     <div
//       className="relative w-full h-screen bg-cover bg-center flex items-center justify-start overflow-hidden"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//       }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40 z-0" />

//       {/* Optional texture overlay */}
//       <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

//       {/* Text Content */}
//       <div
//         ref={textRef}
//         className="relative z-10 px-6 md:px-24 max-w-4xl text-white"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
//           We are building the{" "}
//           <span className="text-red-600 bg-white bg-opacity-10 px-2 rounded-md">
//             Operating System
//           </span>{" "}
//           for Commerce
//         </h1>
//         <p className="mt-6 text-lg md:text-2xl font-light text-gray-200 leading-relaxed max-w-2xl">
//           Trusted partner for small businesses, large marketplaces, and every
//           type of business, empowering digital logistics with scale.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-8 flex gap-4">
//           <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
//             Learn More
//           </button>
//           <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg text-lg font-medium transition">
//             Get Started
//           </button>
//         </div>
//       </div>
      
//     </div>

//     {/* section-2 */}
//     <section className="relative bg-[#0B0D11] text-white py-24 px-6 md:px-24 overflow-hidden">
//       {/* Background radial gradient for depth */}
//       <div className="absolute inset-0 bg-gradient-radial from-[#131517] via-[#0B0D11] to-[#0B0D11] opacity-30 pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//         {/* Left Text Block */}
//         <div ref={textRef}>
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
//             <span className="text-white">About </span>
//             <span className="text-red-600">Delhivery</span>
//           </h2>
//           <div className="w-20 h-1 bg-red-600 mt-3 mb-6 rounded-full" />

//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//             We are India’s largest fully integrated logistics provider, building
//             the operating system for commerce through world-class
//             infrastructure and technology.
//           </p>

//           <p className="mt-6 text-base md:text-lg text-gray-400">
//             Since 2011, we've fulfilled over{" "}
//             <span className="text-white font-semibold">2 billion orders</span>{" "}
//             across India. With a presence in every state, we service{" "}
//             <span className="text-white font-semibold">18,700+ pin codes</span>{" "}
//             via 24 automated sort centres, 94 gateways, and{" "}
//             <span className="text-white font-semibold">2,880 delivery hubs</span>
//             . Our 57,000+ team members deliver 24/7, 365 days a year.
//           </p>
//         </div>

//         {/* Right: Embedded YouTube Video */}
//         <div
//           ref={videoRef}
//           className="relative rounded-2xl shadow-2xl backdrop-blur-sm bg-white/5 border border-white/10 overflow-hidden"
//         >
//           <iframe
//             className="w-full h-64 md:h-96 rounded-lg"
//             src="https://www.youtube.com/embed/xuzyZf-0t60" // Update to actual Delhivery video if needed
//             title="Delhivery Intro Video"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             frameBorder="0"
//           ></iframe>

//           {/* Decorative top-right red block */}
//           <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-600 rotate-45 shadow-lg"></div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Company;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "./photos/poster.png";
import { CheckCircle } from "lucide-react";
import {  PlaneTakeoff, PlaneLanding, FileText, Home } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
const features = [
    {
      title: "Professional, Not Pretentious",
      description:
        "We're lean, focused, and growing — without making big promises we can’t keep.",
    },
    {
      title: "One-Stop Logistics",
      description:
        "End-to-end control of your shipment, so you don’t have to manage multiple vendors.",
    },
    {
      title: "Customs Expertise",
      description:
        "We make compliance simple, with experienced handlers at IGI Airport.",
    },
    {
      title: "Personalized Service",
      description:
        "We're responsive, accountable, and available — a real team behind every shipment.",
    },
  ];
  
const Company = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const aboutTextRef = useRef(null);
  const videoRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    // Hero text animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      }
    );

    // About text block animation
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: "top 85%",
        },
      }
    );

    // Video animation
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-start overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40 z-0" />

        {/* Optional noise overlay */}
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

        {/* Hero Content */}
        <div
          ref={heroRef}
          className="relative z-10 px-6 md:px-24 max-w-4xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
            We are building the{" "}
            <span className="text-red-600 bg-white bg-opacity-10 px-2 rounded-md">
              Operating System
            </span>{" "}
            for Commerce
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-light text-gray-200 leading-relaxed max-w-2xl">
            Trusted partner for small businesses, large marketplaces, and every
            type of business, empowering digital logistics with scale.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
              Learn More
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg text-lg font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="relative bg-[#0B0D11] text-white py-24 px-6 md:px-24 overflow-hidden">
        {/* Subtle radial background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#131517] via-[#0B0D11] to-[#0B0D11] opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Block */}
          <div ref={aboutTextRef}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-white">About </span>
              <span className="text-red-600">Doorier</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mt-3 mb-6 rounded-full" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Doorier Express was founded with a simple vision — to make international shipping easy, efficient, and dependable for growing businesses.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-400">
            We operate in the cross-border courier space, handling both imports and exports with full support for documentation, customs clearance, and last-mile delivery. Our focus is on Ex-Works shipments, where we manage everything from pickup at origin to delivery at your door.
We’re based near IGI Airport, New Delhi, allowing us to stay connected with the core of India’s international logistics infrastructure. Our team is experienced, responsive, and committed to getting your parcels where they need to go — without delays or surprises.

            </p>
          </div>

          {/* YouTube Video Block */}
          <div
            ref={videoRef}
            className="relative rounded-2xl shadow-2xl backdrop-blur-sm bg-white/5 border border-white/10 overflow-hidden"
          >
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/xuzyZf-0t60"
              title="Delhivery Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>

            {/* Decorative red square */}
            <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-600 rotate-45 shadow-lg"></div>
          </div>
        </div>
      </section>



      <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-20 px-6 md:px-24 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500 opacity-20 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-indigo-700 tracking-tight">
  Why <span className="text-gray-900">Doorier?</span>
</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {features.map(({ title, description }, index) => (
            <div
              key={index}
              className="group p-6 bg-white/90 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left backdrop-blur-lg"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-indigo-600 w-7 h-7 group-hover:scale-110 transition" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition duration-200">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600 group-hover:text-gray-800 text-[17px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    <section className="bg-white py-20 px-6 md:px-24 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-700">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Simple and Straightforward Process — for both Imports and Exports
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Imports */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-lg transition bg-indigo-50">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
              <PlaneLanding className="text-indigo-500" /> For Imports
            </h3>
            <ul className="space-y-4 pl-4 list-disc text-gray-700 text-[17px] leading-relaxed">
              <li>We coordinate pickup from your supplier abroad (Ex-Works)</li>
              <li>Shipment reaches India via air or sea</li>
              <li>We handle customs clearance and duty (if required)</li>
              <li>We deliver it to your doorstep</li>
            </ul>
          </div>

          {/* Exports */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-lg transition bg-indigo-50">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
              <PlaneTakeoff className="text-indigo-500" /> For Exports
            </h3>
            <ul className="space-y-4 pl-4 list-disc text-gray-700 text-[17px] leading-relaxed">
              <li>We pick up your shipment</li>
              <li>Handle documentation and clearance</li>
              <li>Ship it via air or sea</li>
              <li>Ensure safe delivery to your buyer</li>
            </ul>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-16">
          <button className="px-6 py-3 text-lg font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Company;