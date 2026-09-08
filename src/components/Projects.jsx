import { Link } from "react-router-dom";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section
      id="#projects"
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
              text-gray-900

              dark:text-white

              md:text-4xl
            "
          >
            Projects
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

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6

                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-(--secondary)
                hover:shadow-[0_8px_30px_rgba(255,93,151,0.12)]

                dark:border-gray-800
                dark:bg-gray-900
                dark:shadow-black/20

                dark:hover:border-(--secondary-dark)
                dark:hover:shadow-[0_8px_30px_rgba(243,166,194,0.10)]
              "
            >
              {/* ================= TITLE ================= */}
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
                  text-gray-900

                  transition-colors
                  duration-300

                  group-hover:text-[var(--secondary)]

                  dark:text-white
                  dark:group-hover:text-[var(--secondary-dark)]

                  md:text-2xl
                "
              >
                {project.title}
              </h3>

              {/* ================= SUBTITLE ================= */}
              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-gray-500

                  dark:text-gray-500
                "
              >
                {project.category}
              </p>

              {/* ================= DIVIDER ================= */}
              <div
                className="
                  my-5
                  h-px
                  bg-gray-200

                  dark:bg-gray-800
                "
              />

              {/* ================= TECHNOLOGIES ================= */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-md
                      border
                      border-gray-300
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-gray-600

                      transition-colors
                      duration-300

                      group-hover:border-(--secondary)
                      group-hover:bg-(--secondary)
                      group-hover:text-white

                      dark:border-gray-600
                      dark:text-gray-300

                      dark:group-hover:border-(--secondary-dark)
                      dark:group-hover:bg-(--secondary-dark)
                      dark:group-hover:text-gray-900
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* ================= FULL WIDTH IMAGE ================= */}
              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200

                  transition-all
                  duration-300

                  group-hover:shadow-[0_8px_30px_rgba(255,93,151,0.12)]
                  dark:border-gray-700
                  
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-64
                    w-full
                    object-cover

                    transition-transform
                    duration-500

                    group-hover:scale-105
                  "
                />
              </div>

              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-gray-600

                  dark:text-gray-400
                "
              >
                {project.shortDescription}
              </p>

              {/* ================= BUTTONS ================= */}
              <div className="mt-6 flex items-center gap-3">
                {/* Full View */}
                <Link
                  to={`/projects/${project.id}`}
                  className="
    animated-button
    group
    relative
    inline-flex
    items-center
    gap-2
    overflow-hidden
    rounded-md
    bg-gray-900
    px-5
    py-2
    text-sm
    font-medium
    text-white

    shadow-lg
    shadow-gray-900/20

    transition-all
    duration-300

    hover:bg-(--secondary)
    hover:shadow-lg
    hover:shadow-(--secondary)/30

    dark:bg-white
    dark:text-gray-900
    dark:hover:bg-(--secondary-dark)
  "
                >
                  Full View
                </Link>

                {/* Source Code */}
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    rounded-md
    border
    border-gray-300
    bg-gray-200
    px-5
    py-2
    text-sm
    font-medium
    text-gray-900

    transition-all
    duration-300

    hover:border-(--secondary)
    hover:bg-(--secondary)
    hover:text-white

    dark:border-gray-700
    dark:bg-gray-800
    dark:text-gray-100

    dark:hover:border-(--secondary-dark)
    dark:hover:bg-(--secondary-dark)
    dark:hover:text-gray-900
  "
                >
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
