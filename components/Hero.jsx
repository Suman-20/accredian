"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="max-w-7xl mx-auto">

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-[#eef5ff] shadow-xl shadow-blue-100/60">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-14">

            {/* Left Content */}
            <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">

              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                Enterprise learning, reimagined
              </span>

              <h1 className="mt-6 font-extrabold tracking-tight text-slate-950 leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Next-Gen{" "}
                <span className="text-blue-500">Expertise</span>
                <br />
                For Your{" "}
                <span className="text-blue-500">Enterprise</span>
              </h1>

              <p className="mt-6 max-w-2xl text-slate-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-5">

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span className="text-base md:text-lg text-gray-900">
                    Tailored Solutions
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span className="text-base md:text-lg text-gray-900">
                    Industry Insights
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span className="text-base md:text-lg text-gray-900">
                    Expert Guidance
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span className="text-base md:text-lg text-gray-900">
                    Measurable Impact
                  </span>
                </div>

              </div>

              <button
                onClick={() => setOpen(true)}
                className="mt-10 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-10 sm:py-4"
              >
                Enquire Now
              </button>

            </div>

            {/* Right Image */}
            <div className="relative z-10 order-1 lg:order-2 flex justify-center">

              <div className="w-full max-w-70 rounded-3xl border border-white/80 bg-white/60 p-3 shadow-2xl shadow-blue-200/60 sm:max-w-95 md:max-w-125 lg:max-w-155">
                <Image
                  src="/home.jpg"
                  alt="Accredian enterprise learning"
                  width={700}
                  height={700}
                  priority
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>

            </div>

          </div>

        </div>

        </div>
      </section>

      <EnquiryModal open={open} setOpen={setOpen} />
    </>
  );
}

