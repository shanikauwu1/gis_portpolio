function Experience() {
  const experiences = [
    {
      period: "2024 – Present",
      title: "GIS & Geospatial Developer",
      company: "Professional / Academic Projects",
      description:
        "Working with GIS, spatial analysis, remote sensing, and web mapping to create interactive geospatial applications and data-driven solutions.",
      technologies: [
        "ArcGIS Pro",
        "ArcGIS Online",
        "Remote Sensing",
        "Web GIS",
      ],
    },
    {
      period: "2021 – 2024",
      title: "Web Developer",
      company: "BlueWave Labs",
      description:
        "Developed and maintained web applications using React, JavaScript, Node.js, and database technologies. Collaborated on responsive interfaces and data-driven applications.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      period: "2019 – 2021",
      title: "Web Developer",
      company: "Software Development",
      description:
        "Worked on web application development and contributed to frontend and backend solutions using modern web technologies.",
      technologies: ["JavaScript", "PHP", "Laravel", "MySQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="
        border-b
        border-gray-200
        bg-white
        px-6
        py-20
        text-gray-900
        transition-colors
        duration-300

        dark:border-gray-800
        dark:bg-gray-950
        dark:text-white

        md:px-12
        lg:px-20
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14">
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
            My Journey
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
            Experience
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-gray-600
              dark:text-gray-300
            "
          >
            My professional journey across web development, GIS, and geospatial
            technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="
              absolute
              left-[7px]
              top-2
              h-full
              w-px
              bg-gray-300

              dark:bg-gray-700

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title + experience.period}
                className="
                  relative
                  grid
                  md:grid-cols-2
                  md:gap-12
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-1
                    z-10
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-gray-900
                    bg-white

                    dark:border-white
                    dark:bg-gray-950

                    md:left-1/2
                    md:-translate-x-1/2
                  "
                >
                  <div
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-gray-900

                      dark:bg-white
                    "
                  />
                </div>

                {/* Date */}
                <div
                  className={`
                    ml-8
                    pb-2

                    md:ml-0
                    md:pr-12

                    ${
                      index % 2 === 0
                        ? "md:text-right"
                        : "md:order-2 md:pl-12 md:text-left"
                    }
                  `}
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      text-gray-500

                      dark:text-gray-400
                    "
                  >
                    {experience.period}
                  </span>
                </div>

                {/* Experience Card */}
                <div
                  className={`
                    ml-8

                    md:ml-0

                    ${index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}
                  `}
                >
                  <div
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
                    {/* Job Title */}
                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-gray-900

                        dark:text-white
                      "
                    >
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-gray-500

                        dark:text-gray-400
                      "
                    >
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-gray-600

                        dark:text-gray-300
                      "
                    >
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-md
                            border
                            border-gray-300
                            px-2.5
                            py-1
                            text-xs
                            text-gray-600

                            dark:border-gray-700
                            dark:text-gray-400
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
