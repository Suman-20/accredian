import {
  FaLightbulb,
  FaBrain,
  FaUsers,
  FaChartBar,
  FaCog,
  FaGlobe,
  FaMoneyBillWave,
} from "react-icons/fa";

const domains = [
  {
    title: "Product & Innovation Hub",
    icon: <FaLightbulb />,
  },
  {
    title: "Gen-AI Mastery",
    icon: <FaBrain />,
  },
  {
    title: "Leadership Elevation",
    icon: <FaUsers />,
  },
  {
    title: "Tech & Data Insights",
    icon: <FaChartBar />,
  },
  {
    title: "Operations Excellence",
    icon: <FaCog />,
  },
  {
    title: "Digital Enterprise",
    icon: <FaGlobe />,
  },
  {
    title: "Fintech Innovation Lab",
    icon: <FaMoneyBillWave />,
  },
];

export default function DomainExpertise() {
  return (
    <section id="domain" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            <span className="text-blue-600">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {domains.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center justify-center min-h-[170px]

              ${
                index === domains.length - 1
                  ? "lg:col-start-2"
                  : ""
              }`}
            >
              <div className="text-blue-600 text-6xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-center text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}