import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section
      id="edge"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            The{" "}
            <span className="text-blue-600">
              Accredian Edge
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Key Aspects of{" "}
            <span className="text-blue-600">
              Our Strategic Training
            </span>
          </p>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:flex justify-center">
          <Image
            src="/edge-desktop.svg"
            alt="Accredian Edge Desktop"
            width={1200}
            height={600}
            priority
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>

        {/* Mobile + Tablet Image */}
        <div className="lg:hidden flex justify-center">
          <Image
            src="/edge-mobile.svg"
            alt="Accredian Edge Mobile"
            width={700}
            height={700}
            priority
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}