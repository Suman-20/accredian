import Image from "next/image";

const clients = [
  {
    name: "Reliance",
    logo: "/clients/rel.png",
    width: 130,
  },
  {
    name: "HCL",
    logo: "/clients/hcl.png",
    width: 130,
  },
  {
    name: "IBM",
    logo: "/clients/ibm.png",
    width: 110,
  },
  {
    name: "CRIF",
    logo: "/clients/crif.png",
    width: 130,
  },
  {
    name: "ADP",
    logo: "/clients/adp.svg",
    width: 120,
  },
  {
    name: "Bayer",
    logo: "/clients/bayer.svg",
    width: 90,
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our Proven{" "}
            <span className="text-blue-600">Partnerships</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Successful Collaborations With the{" "}
            <span className="text-blue-600">
              Industry's Best
            </span>
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-10 mt-20 items-center justify-items-center">

          {clients.map((client) => (
            <div
              key={client.name}
              className="hover:scale-110 transition duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={80}
                className="object-contain h-16 w-auto"
              />
            </div>
          ))}

        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden mt-16 overflow-hidden">

          <div className="marquee">

            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 hover:scale-110 transition duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={70}
                  className="object-contain h-14 w-auto"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}