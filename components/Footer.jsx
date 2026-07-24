"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white py-16 px-5 md:bg-white md:text-gray-900">
        <div className="max-w-7xl mx-auto">

          {/* Top */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* Left */}
            <div>
              <Image
                src="/logo.jpg"
                alt="Accredian"
                width={200}
                height={60}
                className="h-auto w-40 sm:w-50"
              />

              <div className="flex flex-wrap gap-5 text-3xl text-gray-200 mt-8 md:text-gray-700">
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-blue-600 transition">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-blue-600 transition">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="text-center lg:text-right">
              <button
                onClick={() => setOpen(true)}
                className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
              >
                Enquire Now
              </button>

              <p className="mt-3 text-gray-300 md:text-gray-600">
                Speak with our Advisor
              </p>
            </div>

          </div>

          <hr className="my-10" />

          {/* Bottom */}
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-3xl font-bold mb-6 text-white md:text-black">
                Accredian
              </h3>

              <ul className="space-y-4 text-gray-200 text-lg md:text-gray-700">
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Blog</a>
                </li>

                <li>
                  <a href="#">Why Accredian</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-white md:text-black">
                Contact Us
              </h3>

              <p className="text-lg leading-8 text-gray-200 md:text-gray-700">
                Email us :
                <span className="text-blue-600">
                  {" "}
                  enterprise@accredian.com
                </span>
              </p>

              <p className="text-lg mt-5 leading-8 text-gray-200 md:text-gray-700">
                <span className="font-semibold text-white md:text-gray-900">Office Address:</span><br />
                4th Floor, 250, Phase IV,<br />
                Udyog Vihar, Sector 18,<br />
                Gurugram, Haryana
              </p>
            </div>

          </div>

          <hr className="my-10" />

          <p className="text-center text-gray-300 md:text-gray-600">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd.
            All Rights Reserved.
          </p>

        </div>
      </footer>

      {/* Popup Modal */}
      <EnquiryModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}