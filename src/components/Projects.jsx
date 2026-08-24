import { Link } from "react-router-dom";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section
      id="projects"
      className="
        border-b
        border-gray-200
        bg-white
        py-24
        text-gray-900
        transition-colors
        duration-300

        dark:border-gray-800
        dark:bg-gray-950
        dark:text-gray-100
      "
    >
      <div className="mx-auto max-w-7xl px-6">
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
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-2">
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
                hover:border-gray-400
                hover:shadow-xl

                dark:border-gray-800
                dark:bg-gray-900/80
                dark:shadow-black/20

                dark:hover:border-gray-600
                dark:hover:shadow-2xl
              "
            >
              {/* Project Title */}
              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-gray-900

                  dark:text-gray-100
                "
              >
                {project.title}
              </h3>

              {/* Category */}
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

              {/* Divider */}
              <div
                className="
                  my-5
                  h-px
                  bg-gray-200

                  dark:bg-gray-800
                "
              />

              {/* Technology Tags */}
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

                      dark:border-gray-600
                      dark:text-gray-300
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="grid items-center gap-7 md:grid-cols-2">
                {/* Description */}
                <div>
                  <p
                    className="
                      text-sm
                      leading-7
                      text-gray-600

                      dark:text-gray-400
                    "
                  >
                    {project.shortDescription}
                  </p>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {/* Full View */}
                    <Link
                      to={`/projects/${project.id}`}
                      className="
                        rounded-md
                        border
                        border-gray-400
                        px-5
                        py-2
                        text-sm
                        font-medium
                        text-gray-800

                        transition

                        hover:border-gray-900
                        hover:bg-gray-900
                        hover:text-white

                        dark:border-gray-500
                        dark:text-gray-200

                        dark:hover:border-white
                        dark:hover:bg-white
                        dark:hover:text-gray-900
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
                        px-5
                        py-2
                        text-sm
                        font-medium
                        text-gray-600

                        transition

                        hover:border-gray-600
                        hover:text-gray-900

                        dark:border-gray-700
                        dark:text-gray-400

                        dark:hover:border-gray-500
                        dark:hover:text-white
                      "
                    >
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Project Image */}
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-200

                    dark:border-gray-700
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-56
                      w-full
                      object-cover

                      transition
                      duration-500

                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
