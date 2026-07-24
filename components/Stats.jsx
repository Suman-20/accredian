const stats = [
  {
    number: "10K+",
    title: "Professionals Trained For Exceptional Career Success",
  },
  {
    number: "200+",
    title: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    number: "5K+",
    title: "Active Learners Engaged In Dynamic Courses",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Our impact
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
            Our <span className="text-blue-600">Track Record</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600 text-lg">
            The Numbers Behind{" "}
            <span className="text-blue-600">Our Success</span>
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/60 md:px-8 md:py-10"
            >
              {/* Number */}
              <div className="rounded-2xl bg-blue-600 px-8 py-4 text-4xl font-extrabold tracking-tight text-white shadow-lg shadow-blue-600/20 transition group-hover:scale-105">
                {item.number}
              </div>

              {/* Text */}
              <p className="mt-7 text-lg leading-8 font-semibold text-slate-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
