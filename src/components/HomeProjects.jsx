import { Link } from "react-router-dom";
import projects from "../data/projects.json";

function HomeProjects() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        {/* Heading */}
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
            Featured Projects
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

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-gray-800
                dark:bg-gray-900
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
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

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Category + Year */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-(--secondary) dark:text-(--secondary-dark)">
                    {project.category}
                  </span>

                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        bg-gray-100
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        text-gray-600
                        dark:bg-gray-800
                        dark:text-gray-400
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* View More */}
                <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
                  <Link
                    to={`/projects/${project.id}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-gray-900
                      transition-colors
                      hover:text-(--secondary)
                      dark:text-white
                      dark:hover:text-(--secondary-dark)
                    "
                  >
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* All Projects */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-gray-900
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-(--secondary)
              dark:bg-white
              dark:text-gray-900
              dark:hover:bg-(--secondary-dark)
            "
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeProjects;
