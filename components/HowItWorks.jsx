import {
  HiOutlineChartBar,
  HiOutlineDesktopComputer,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";

const steps = [
  {
    no: "1",
    icon: <HiOutlineChartBar />,
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
  },
  {
    no: "2",
    icon: <HiOutlineDesktopComputer />,
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    no: "3",
    icon: <HiOutlinePresentationChartLine />,
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">
              Skill Development
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {steps.map((step) => (
            <div
              key={step.no}
              className="relative bg-[#eef5ff] rounded-2xl shadow-lg border border-blue-200 p-10 text-center hover:-translate-y-2 transition duration-300"
            >
              {/* Number */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center font-bold text-blue-700">
                {step.no}
              </div>

              {/* Side Lines */}
              <div className="absolute left-0 top-16 h-36 w-2 bg-blue-600 rounded-r-full"></div>
              <div className="absolute right-0 top-16 h-36 w-2 bg-blue-600 rounded-l-full"></div>

              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl mx-auto shadow-lg mb-8">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}