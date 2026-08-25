import { FaCheckCircle } from "react-icons/fa";
import experiences from "../data/experiences.json";

function Experience() {
  return (
    <section
      id="experience"
      className="
        border-b
        border-gray-200
        bg-white
        px-6
        py-20
        font-mono
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
        <div className="mb-12">
          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-gray-900

              dark:text-white

              md:text-4xl
            "
          >
            Work Experience
          </h2>
          <div
            className="
      mt-4
      h-1
      w-12
      rounded-full
      bg-gray-900

      dark:bg-gray-200
    "
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* ================= TIMELINE LINE ================= */}
          <div
            className="
              absolute
              left-1.75
              top-0
              h-full
              w-0.75
              bg-(--secondary)

              dark:bg-(--secondary-dark)

              md:left-[43%]
              md:-translate-x-1/2
            "
          />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.title}-${experience.period}`}
                className="
                  group
                  relative
                  grid
                  grid-cols-1

                  md:grid-cols-[43%_57%]
                "
              >
                {/* ================= TIMELINE CIRCLE ================= */}
                <div
                  className="
    absolute
    -left-1.5
    top-0
    z-20
    h-7
    w-7
    rounded-full

    border-[3px]
    border-(--secondary)
    bg-white

    shadow-sm
    transition-all
    duration-300

    group-hover:bg-(--secondary)
    group-hover:border-(--secondary)

    dark:border-(--secondary-dark)
    dark:bg-gray-950

    dark:group-hover:bg-(--secondary-dark)
    dark:group-hover:border-(--secondary-dark)

    md:left-[43%]
    md:-translate-x-1/2
  "
                >
                  {/* Inner Dot */}
                  <div
                    className="
      absolute
      left-1/2
      top-1/2
      h-2
      w-2
      -translate-x-1/2
      -translate-y-1/2
      rounded-full

      bg-(--secondary)
      group-hover:bg-white

      dark:bg-(--secondary-dark)
      dark:group-hover:bg-gray-950
    "
                  />
                </div>

                {/* ================= LEFT INFORMATION ================= */}
                <div
                  className="
                    ml-12
                    pr-6

                    md:ml-0
                    md:pr-16
                    md:text-right
                  "
                >
                  {/* Period */}
                  <p
                    className="
                      text-md
                      font-semibold
                      tracking-wide
                      text-gray-900

                      dark:text-white

                      md:text-base
                    "
                  >
                    {experience.period}
                  </p>

                  {/* Job Title */}
                  <h3
                    className="
                      mt-2
                      text-lg
                      font-bold
                      text-gray-900

                      transition-colors
                      duration-300

                      dark:text-white
                   

                      md:text-base
                    "
                  >
                    {experience.title}
                  </h3>

                  {/* Company */}
                  <p
                    className="
                      mt-1
                      max-w-xs
                      text-sm
                      leading-5
                      text-gray-500

                      dark:text-gray-400

                      md:ml-auto
                    "
                  >
                    {experience.company}
                  </p>
                </div>

                {/* ================= RIGHT CARD ================= */}
                <div
                  className="
                    ml-12
                    mt-6

                    md:ml-0
                    md:mt-0
                    md:pl-10
                  "
                >
                  <div
                    className="
                      max-w-xl
                      rounded-2xl

                      border
                      border-gray-200
                      bg-gray-50

                      px-6
                      py-5

                      shadow-sm

                      transition-all
                      duration-300

                      group-hover:-translate-y-1
                      group-hover:border-(--secondary)
                      group-hover:bg-(--secondary)
                      group-hover:shadow-[0_8px_30px_rgba(255,93,151,0.12)]

                      dark:border-gray-800
                      dark:bg-gray-900
                      dark:shadow-black/20

                      dark:group-hover:border-(--secondary-dark)
                      dark:group-hover:bg-(--secondary-dark)
                      dark:group-hover:shadow-[0_8px_30px_rgba(243,166,194,0.10)]
                    "
                  >
                    <div className="space-y-3">
                      {experience.description.map((item, descriptionIndex) => (
                        <div
                          key={descriptionIndex}
                          className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              leading-6
                              text-gray-600

                              transition-colors
                              duration-300

                              group-hover:text-white

                              dark:text-gray-400
                            "
                        >
                          {/* Theme Bullet */}
                          <FaCheckCircle
                            className="
                                mt-1
                                shrink-0
                                text-[15px]

                                text-(--secondary)
                                group-hover:text-white

                                transition-transform
                                duration-300

                                group-hover:scale-110

                                dark:text-(--secondary-dark)
                              "
                          />

                          <span>{item}</span>
                        </div>
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
