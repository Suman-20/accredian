"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    logo: "/clients/adp.svg",
    text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
  },
  {
    logo: "/clients/bayer.svg",
    text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
  },
  {
    logo: "/clients/rel.png",
    text: `"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees."`,
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="relative z-10 mb-12 text-center md:mb-14">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Client stories
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">

            Testimonials from{" "}

            <span className="text-blue-600">
              Our Partners
            </span>

          </h2>

          <p className="mt-4 text-lg text-slate-600">

            What{" "}

            <span className="text-blue-600">
              Our Clients
            </span>{" "}

            Are Saying

          </p>

        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto! pb-12">

              <div className="group relative flex h-full min-h-80 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 sm:p-9">

                <FaQuoteLeft className="absolute right-8 top-8 text-4xl text-blue-100 transition group-hover:text-blue-200" />

                <Image
                  src={item.logo}
                  alt="Partner logo"
                  width={70}
                  height={70}
                  className="mb-7 h-14 w-24 object-contain object-left"
                />

                <div className="mb-5 flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>

                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  {item.text}
                </p>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}