import Image from "next/image";

export default function CAT() {
  return (
    <section
      id="cat"
      className="py-20 px-5 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our Proven Approach to{" "}
            <span className="text-blue-600">
              Learning Excellence
            </span>
          </p>

        </div>

        {/* Image */}
        <div className="bg-[#eef5ff] rounded-3xl shadow-lg p-4 sm:p-6 lg:p-10">

          <Image
            src="/cat-framework.svg"
            alt="CAT Framework"
            width={1200}
            height={700}
            priority
            className="w-full h-auto object-contain"
          />

        </div>

      </div>
    </section>
  );
}