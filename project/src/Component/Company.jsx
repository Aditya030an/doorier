

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "./photos/poster.png";
import { CheckCircle } from "lucide-react";
import {  PlaneTakeoff, PlaneLanding, FileText, Home } from "lucide-react";
import billboard from "./photos/billboard.png";

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
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-start">

{/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center scale-110 animate-[zoom_15s_ease-in-out_infinite_alternate]"
  style={{ backgroundImage: `url(${heroBg})` }}
/>

{/* Black Luxury Gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/20" />

{/* Blue Cinematic Glow */}
<div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/30 blur-[140px] opacity-50 rounded-full"></div>

{/* Noise Texture */}
<div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] mix-blend-overlay"></div>

{/* Floating Light Orbs */}
<div className="absolute top-20 right-20 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full animate-[float1_6s_ease-in-out_infinite_alternate]"></div>

<div className="absolute bottom-24 left-20 w-32 h-32 bg-blue-300/10 blur-2xl rounded-full animate-[float2_7s_ease-in-out_infinite_alternate]"></div>

{/* CONTENT */}
<div className="relative z-10 px-6 md:px-24 max-w-4xl text-white">

  {/* Heading */}
  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
    <span className="block">We are building the</span>

    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">
      Operating System
    </span>

    <span className="block -mt-2">for Commerce</span>
  </h1>

  {/* Description Box */}
  <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-xl leading-relaxed 
    backdrop-blur-xl bg-white/10 p-6 rounded-2xl border border-white/20 shadow-2xl">
    Trusted partner for small businesses, large marketplaces, and every type
    of business — empowering digital logistics with scale.
  </p>

  {/* CTA Buttons */}
  <div className="mt-10 flex gap-4">

    {/* Primary CTA */}
    <button className="px-8 py-3 rounded-xl text-lg font-semibold
      bg-gradient-to-r from-blue-500 to-blue-700
      shadow-xl shadow-blue-900/40 hover:scale-105 
      transition duration-300">
      Learn More
    </button>

    {/* Secondary CTA */}
    <button className="px-8 py-3 rounded-xl text-lg font-semibold
      bg-white/10 border border-white/20 backdrop-blur-md
      hover:bg-white/20 transition duration-300">
      Get Started
    </button>

  </div>
</div>
</div>



      {/* ABOUT SECTION */}
      <section className="relative bg-[#07080B] text-white py-28 px-6 md:px-24 overflow-hidden">

{/* Radial Gradient Base */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.18),rgba(7,8,11,0.9))]"></div>

{/* Moving Blue Glow Orbs */}
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[130px] rounded-full animate-[float1_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-10 right-20 w-64 h-64 bg-blue-700/20 blur-[150px] rounded-full animate-[float2_10s_ease-in-out_infinite]"></div>

{/* Fine Grain Noise Overlay */}
<div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] mix-blend-overlay pointer-events-none" />

{/* Vertical Decorative Lines */}
<div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

<div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

  {/* Text Section */}
  <div className="space-y-6">

    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
      <span className="text-white">About </span>
      <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
        Doorier
      </span>
    </h2>

    {/* Small Glow Line */}
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-[0_0_25px_#3b82f6]"></div>

    {/* Tagline Card */}
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        Doorier Express was founded with a simple vision — to make international 
        shipping easy, efficient, and dependable for growing businesses.
      </p>
    </div>

    {/* Long Description */}
    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
      We operate in the cross-border courier space, handling both imports and
      exports with full support for documentation, customs clearance, and
      last-mile delivery. Our focus is on Ex-Works shipments, where we manage
      everything from pickup at origin to delivery at your door.
      <br /><br />
      Being based near IGI Airport, New Delhi lets us stay aligned with India’s 
      international logistics backbone. Our experienced and responsive team 
      ensures your parcels reach the destination—without delays or surprises.
    </p>
  </div>

  {/* Video Block */}
  <div className="relative group">

{/* Glass Card */}
<div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/5 border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]">
  <img
    src={billboard}
    alt="Doorier Showcase"
    className="w-full h-72 md:h-96 object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
  />
</div>

{/* Floating glow element */}
<div className="absolute -top-6 -right-6 w-10 h-10 bg-blue-500 rotate-45 blur-sm opacity-80 group-hover:opacity-100 transition"></div>

{/* Premium soft glow border */}
<div className="absolute inset-0 rounded-3xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-500"></div>
</div>

</div>
</section>


<section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-24 px-6 md:px-24 overflow-hidden">

  {/* Soft Ambient Glow Blobs */}
  <div className="absolute -top-28 -left-28 w-[26rem] h-[26rem] bg-blue-300/30 blur-[130px] rounded-full z-0"></div>
  <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-indigo-400/30 blur-[140px] rounded-full z-0"></div>

  {/* Fine Grain Noise */}
  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-soft-light pointer-events-none" />

  {/* Vertical Glow Line */}
  <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-300/40 to-transparent"></div>

  {/* Header */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight">
      <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">Why</span>
      <span className="text-gray-900"> Doorier?</span>
    </h2>

    {/* Cards */}
    <div className="grid gap-12 md:grid-cols-2">
      {features.map(({ title, description }, index) => (
        <div
          key={index}
          className="group p-7 bg-white/70 rounded-3xl backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.15)] 
          hover:shadow-[0_12px_50px_-12px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-500">
          
          {/* Decorative Hover Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition bg-gradient-to-br from-blue-500 to-indigo-500 blur-xl"></div>

          <div className="flex items-start gap-5 relative z-10">
            <div className="p-2 bg-indigo-100 rounded-xl shadow group-hover:bg-indigo-200 transition duration-300">
              <CheckCircle className="text-indigo-600 w-7 h-7 group-hover:scale-110 transition-transform" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition duration-300">
                {title}
              </h3>

              <p className="mt-3 text-gray-600 text-[17px] leading-relaxed group-hover:text-gray-800 transition">
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