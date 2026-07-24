import Image from "next/image";
import {
  HiOutlineDesktopComputer,
  HiOutlineXCircle,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";

export default function StrategicSkills() {
  return (
    <section id="strategic" className="py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-14">

            {/* Left Side (Desktop Only) */}
            <div className="hidden lg:block">

              <p className="text-white text-2xl font-medium">
                Who Should Join?
              </p>

              <h2 className="text-white text-5xl xl:text-6xl font-bold mt-2 leading-tight">
                Strategic Skill
                <br />
                Enhancement
              </h2>

              <div className="mt-10">
                <Image
                  src="/strategic.png"
                  alt="Strategic"
                  width={500}
                  height={500}
                  className="w-full max-w-md object-contain"
                  priority
                />
              </div>

            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">

              {/* Card 1 */}
              <div className="text-center sm:text-left">
                <HiOutlineDesktopComputer className="text-white text-5xl mx-auto sm:mx-0 mb-4" />

                <h3 className="text-white text-2xl font-bold">
                  Tech Professionals
                </h3>

                <p className="text-blue-100 mt-2">
                  Enhance expertise, embrace tech, drive innovation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center sm:text-left">
                <HiOutlineXCircle className="text-white text-5xl mx-auto sm:mx-0 mb-4" />

                <h3 className="text-white text-2xl font-bold">
                  Non-Tech Professionals
                </h3>

                <p className="text-blue-100 mt-2">
                  Adapt digitally, collaborate in tech environments.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center sm:text-left">
                <HiOutlineAcademicCap className="text-white text-5xl mx-auto sm:mx-0 mb-4" />

                <h3 className="text-white text-2xl font-bold">
                  Emerging Professionals
                </h3>

                <p className="text-blue-100 mt-2">
                  Develop powerful skills for rapid career growth.
                </p>
              </div>

              {/* Card 4 */}
              <div className="text-center sm:text-left">
                <HiOutlineBriefcase className="text-white text-5xl mx-auto sm:mx-0 mb-4" />

                <h3 className="text-white text-2xl font-bold">
                  Senior Professionals
                </h3>

                <p className="text-blue-100 mt-2">
                  Strengthen leadership, enhance strategic decisions.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}