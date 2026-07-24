"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";

export default function EnquiryModal({ open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "+91",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        country: "+91",
        phone: "",
        company: "",
        domain: "",
        candidates: "",
        mode: "",
        location: "",
        message: "",
      });

      setOpen(false);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[95vh] bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close enquiry form"
          className="absolute top-4 right-4 z-20 rounded-full bg-white/90 p-2 text-3xl text-slate-600 shadow-md hover:text-red-500"
        >
          <HiX />
        </button>

        <div className="grid grid-cols-[34%_66%] sm:grid-cols-[40%_60%] lg:grid-cols-2">

          {/* Image - visible on every device and always stays on the left */}
          <div className="relative min-h-[700px]">
            <Image
              src="/business.jpg"
              alt="Business"
              fill
              className="object-cover"
            />
          </div>

          {/* Right */}
          <div className="overflow-y-auto max-h-[95vh] bg-white p-5 sm:p-8 lg:p-10">

            <h2 className="mb-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Enquire Now
            </h2>

            <p className="mb-8 text-sm text-slate-600">
              Fill in your details and our advisor will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-blue-600"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-blue-600"
              />

              <div className="flex gap-3">

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="max-w-24 border-b-2 border-slate-300 bg-white py-3 text-slate-900 outline-none focus:border-blue-600"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+880">🇧🇩 +880</option>
                </select>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="min-w-0 flex-1 border-b-2 border-slate-300 bg-white py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
                />

              </div>

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
              />

              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 outline-none focus:border-blue-600"
              >
                <option value="">Select Domain</option>
                <option>AI</option>
                <option>Data Science</option>
                <option>Cyber Security</option>
                <option>Cloud</option>
                <option>Leadership</option>
              </select>

              <input
                name="candidates"
                type="number"
                value={formData.candidates}
                onChange={handleChange}
                placeholder="No. of Candidates"
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
              />

              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 outline-none focus:border-blue-600"
              >
                <option value="">Mode of Delivery</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>

              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
                className="w-full border-b-2 border-slate-300 bg-white py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
              />

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full resize-none rounded-lg border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
              />

              <button
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}