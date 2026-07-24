"use client";

import { useState } from "react";
import {
  HiChevronDown,
  HiChevronUp,
  HiChevronRight,
} from "react-icons/hi";
import EnquiryModal from "./EnquiryModal";

const faqData = {
  course: [
    {
      question:
        "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer AI, Leadership, Data Science, Product Management, FinTech, Cloud Computing, Cyber Security and more.",
    },
  ],

  delivery: [
    {
      question:
        "Can the courses be customized for specific industries or teams?",
      answer:
        "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus.",
    },
    {
      question:
        "Who are the instructors for these programs?",
      answer:
        "All programs are taught by experienced industry professionals with real-world expertise.",
    },
    {
      question:
        "What formats are the programs delivered in?",
      answer:
        "Programs are available Online, Offline and Hybrid according to your business requirements.",
    },
  ],

  misc: [
    {
      question:
        "What is the ideal team size for corporate training?",
      answer:
        "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      question:
        "How do we get started with Accredian?",
      answer:
        "Simply click Enquire Now and our team will contact you to understand your requirements.",
    },
  ],
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const tabs = [
    {
      key: "course",
      title: "About the Course",
    },
    {
      key: "delivery",
      title: "About the Delivery",
    },
    {
      key: "misc",
      title: "Miscellaneous",
    },
  ];

  return (
    <section
      id="faqs"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <h2 className="text-4xl font-bold mb-10 text-black">
          Frequently Asked{" "}
          <span className="text-blue-600">
            Questions
          </span>
        </h2>

        {/* Tabs */}

        <div className="grid md:grid-cols-3 gap-5 mb-12">

          {tabs.map((tab) => (

            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setOpenIndex(0);
              }}
              className={`flex items-center justify-between px-6 py-5 rounded-xl border transition duration-300

              ${
                activeTab === tab.key
                  ? "bg-white shadow-lg border-blue-200"
                  : "bg-white border-gray-300"
              }
              `}
            >
              <span
                className={`font-semibold

                ${
                  activeTab === tab.key
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab.title}
              </span>

              <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                <HiChevronRight className="text-lg text-gray-600" />
              </div>

            </button>

          ))}

        </div>

        {/* FAQ */}

        <div className="space-y-6">

          {faqData[activeTab].map((item, index) => (

            <div
              key={index}
              className="border-b pb-6"
            >

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index
                  )
                }
                className="w-full flex justify-between items-center"
              >

                <h3
                  className={`text-left text-2xl font-bold

                  ${
                    openIndex === index
                      ? "text-blue-600"
                      : "text-black"
                  }`}
                >
                  {item.question}
                </h3>

                {openIndex === index ? (
                  <HiChevronUp className="text-2xl text-gray-600" />
                ) : (
                  <HiChevronDown className="text-2xl text-gray-600" />
                )}

              </button>

              {openIndex === index && (

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  {item.answer}
                </p>

              )}

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-12">

          <button
            onClick={() => setEnquiryOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-xl shadow-lg font-semibold"
          >
            Enquire Now
          </button>

        </div>

      </div>

      <EnquiryModal open={enquiryOpen} setOpen={setEnquiryOpen} />
    </section>
  );
}