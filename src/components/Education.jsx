import education from "../data/education.json";

function Education() {
  return (
    <section
      id="education"
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
            Education
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

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.id}
              className="
                group
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[var(--secondary)]
                hover:bg-[var(--secondary)]
                hover:shadow-[0_8px_30px_rgba(255,93,151,0.12)]

                dark:border-gray-800
                dark:bg-gray-900
                dark:shadow-black/20

                dark:hover:border-[var(--secondary-dark)]
                dark:hover:bg-[var(--secondary-dark)]
                dark:hover:shadow-[0_8px_30px_rgba(243,166,194,0.10)]
              "
            >
              {/* Top Row */}
              <div className="mb-6 flex items-center justify-between">
                {/* Graduation Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl

                    border
                    border-gray-200
                    bg-white
                    text-lg

                    transition-colors
                    duration-300

                    group-hover:border-white
                    group-hover:bg-white/20

                    dark:border-gray-700
                    dark:bg-gray-100

                    dark:group-hover:border-white
                    dark:group-hover:bg-white/20
                  "
                >
                  🎓
                </div>

                {/* Year */}
                <span
                  className="
                    text-sm
                    font-medium
                    text-gray-500

                    transition-colors
                    duration-300

                    group-hover:text-white/90

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
                  leading-7
                  tracking-tight
                  text-gray-900

                  transition-colors
                  duration-300

                  group-hover:text-white

                  dark:text-white
                "
              >
                {item.degree}
              </h3>

              {/* Divider */}
              <div
                className="
                  mb-4
                  h-px
                  bg-gray-200

                  transition-colors
                  duration-300

                  group-hover:bg-white/30

                  dark:bg-gray-800
                "
              />

              {/* Institution */}
              <p
                className="
                  font-medium
                  text-gray-700

                  transition-colors
                  duration-300

                  group-hover:text-white

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

                  transition-colors
                  duration-300

                  group-hover:text-white/80

                  dark:text-gray-400
                "
              >
                {item.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
