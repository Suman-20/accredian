import Image from "next/image";

const courses = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    image: "/course/program.jpg",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/course/industry.jpg",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/course/topic.jpg",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/course/level.jpg",
  },
];

export default function CourseSegmentation() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Tailored{" "}
            <span className="text-blue-600">
              Course Segmentation
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Explore{" "}
            <span className="text-blue-600">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative w-full h-56">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-blue-600">
                  {course.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {course.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
