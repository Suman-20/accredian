"use client";

import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import EnquiryModal from "./EnquiryModal";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">

          <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row items-center justify-between">

            <div className="absolute right-0 top-0 w-[450px] h-[450px] rounded-full bg-blue-500 opacity-30"></div>

            <div className="relative flex items-center gap-5">

              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
                <FiHeadphones className="text-blue-600 text-5xl" />
              </div>

              <div>

                <h2 className="text-white text-2xl md:text-4xl font-bold">
                  Want to Learn More About Our Training Solutions?
                </h2>

                <p className="text-white mt-2">
                  Get Expert Guidance for Your Team's Success!
                </p>

              </div>

            </div>

            <button
              onClick={() => setOpen(true)}
              className="relative mt-8 lg:mt-0 shrink-0 whitespace-nowrap bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100"
            >
              Contact Us
              <HiOutlineChevronRight />
            </button>

          </div>

        </div>
      </section>

      <EnquiryModal open={open} setOpen={setOpen} />
    </>
  );
}