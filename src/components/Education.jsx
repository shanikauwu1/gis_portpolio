const education = [
  {
    degree: "Bachelor of GIS (BGIS)",
    institution: "SAIT",
    location: "Calgary, Alberta",
    year: "2026",
  },
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Peradeniya",
    location: "Sri Lanka",
    year: "2019 – 2021",
  },
  {
    degree: "Bachelor of Science in Computer Science & Technology",
    institution: "Uva Wellassa University",
    location: "Sri Lanka",
    year: "2007 – 2011",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="
        border-b
        border-gray-200
        bg-white
        py-20
        text-gray-900
        transition-colors
        duration-300

        dark:border-gray-800
        dark:bg-gray-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <p
            className="
              mb-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-gray-500

              dark:text-gray-400
            "
          >
            Education
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-gray-900

              dark:text-white

              md:text-4xl
            "
          >
            Academic Background
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-gray-600

              dark:text-gray-300
            "
          >
            My academic background combines Geographic Information Systems,
            computer science, and web development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-lg

                dark:border-gray-800
                dark:bg-gray-900
                dark:shadow-black/20

                dark:hover:border-gray-700
                dark:hover:shadow-black/40
              "
            >
              {/* Top Row */}
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl

                    bg-gray-200
                    text-gray-700

                    dark:bg-gray-800
                    dark:text-gray-200
                  "
                >
                  <span className="text-lg">🎓</span>
                </div>

                <span
                  className="
                    text-sm
                    font-medium
                    text-gray-500

                    dark:text-gray-400
                  "
                >
                  {item.year}
                </span>
              </div>

              {/* Degree */}
              <h3
                className="
                  mb-3
                  text-xl
                  font-semibold
                  text-gray-900

                  dark:text-white
                "
              >
                {item.degree}
              </h3>

              {/* Institution */}
              <p
                className="
                  font-medium
                  text-gray-700

                  dark:text-gray-200
                "
              >
                {item.institution}
              </p>

              {/* Location */}
              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500

                  dark:text-gray-400
                "
              >
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
