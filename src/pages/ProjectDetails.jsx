import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.json";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  // --------------------------------
  // Project Not Found
  // --------------------------------
  if (!project) {
    return (
      <main
        className="
          min-h-screen
          bg-white
          text-gray-900
          dark:bg-gray-950
          dark:text-white
        "
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Projects
          </p>

          <h1 className="mt-4 text-4xl font-bold">Project Not Found</h1>

          <Link
            to="/#projects"
            className="
              mt-8
              inline-flex
              rounded-md
              border
              border-gray-300
              px-5
              py-2.5
              text-sm
              font-medium
              text-gray-700

              transition

              hover:border-gray-900
              hover:bg-gray-900
              hover:text-white

              dark:border-gray-700
              dark:text-gray-300

              dark:hover:border-white
              dark:hover:bg-white
              dark:hover:text-gray-900
            "
          >
            ← Back to All Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-gray-900
        transition-colors
        duration-300

        dark:bg-gray-950
        dark:text-gray-100
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* ========================================= */}
        {/* Back to Projects */}
        {/* ========================================= */}

        <Link
          to="/projects"
          className="
            inline-flex
            items-center
            text-sm
            font-medium
            text-gray-500

            transition

            hover:text-gray-900

            dark:text-gray-400
            dark:hover:text-white
          "
        >
          ← Back to Projects
        </Link>

        {/* ========================================= */}
        {/* Project Header */}
        {/* ========================================= */}

        <section className="mt-10">
          {/* Category */}
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-gray-500

              dark:text-gray-400
            "
          >
            {project.category}
          </p>

          {/* Title */}
          <h1
            className="
              mt-4
              max-w-5xl
              text-4xl
              font-bold
              tracking-tight
              text-gray-900

              dark:text-white

              sm:text-5xl
              md:text-6xl
            "
          >
            {project.title}
          </h1>

          {/* Project Description */}
          <p
            className="
              mt-6
              max-w-4xl
              text-base
              leading-8
              text-gray-600

              dark:text-gray-300

              md:text-lg
            "
          >
            {project.description}
          </p>

          {/* Project Information */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400">
                Year
              </p>

              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                {project.year}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400">
                Type
              </p>

              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                {project.projectType}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md
                  border
                  border-gray-300
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-gray-600

                  dark:border-gray-700
                  dark:text-gray-300
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Live Project */}
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md
                bg-gray-900
                px-5
                py-2.5
                text-sm
                font-medium
                text-white

                transition

                hover:bg-gray-700

                dark:bg-white
                dark:text-gray-900
                dark:hover:bg-gray-200
              "
            >
              View Project
            </a>

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
                py-2.5
                text-sm
                font-medium
                text-gray-700

                transition

                hover:border-gray-900
                hover:text-gray-900

                dark:border-gray-700
                dark:text-gray-300

                dark:hover:border-gray-400
                dark:hover:text-white
              "
            >
              Source Code
            </a>
          </div>
        </section>

        {/* ========================================= */}
        {/* Main Project Image */}
        {/* ========================================= */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            shadow-sm

            dark:border-gray-800
            dark:bg-gray-900
            dark:shadow-black/20
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              max-h-[650px]
              w-full
              object-cover
            "
          />
        </div>

        {/* ========================================= */}
        {/* Overview */}
        {/* ========================================= */}

        <section className="mt-20">
          <div className="mb-8 flex items-center gap-5">
            <h2
              className="
                text-2xl
                font-bold
                text-gray-900

                dark:text-white

                md:text-3xl
              "
            >
              Project Overview
            </h2>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          <p
            className="
              max-w-4xl
              text-base
              leading-8
              text-gray-600

              dark:text-gray-300
            "
          >
            {project.overview}
          </p>
        </section>

        {/* ========================================= */}
        {/* Objectives */}
        {/* ========================================= */}

        <section className="mt-16">
          <div className="mb-8 flex items-center gap-5">
            <h2
              className="
                text-2xl
                font-bold
                text-gray-900

                dark:text-white

                md:text-3xl
              "
            >
              Objectives
            </h2>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.objectives.map((objective, index) => (
              <div
                key={index}
                className="
                  flex
                  gap-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-5

                  dark:border-gray-800
                  dark:bg-gray-900
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-900
                    text-xs
                    font-medium
                    text-white

                    dark:bg-white
                    dark:text-gray-900
                  "
                >
                  {index + 1}
                </span>

                <p
                  className="
                    text-sm
                    leading-6
                    text-gray-600

                    dark:text-gray-300
                  "
                >
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* Methodology */}
        {/* ========================================= */}

        <section className="mt-20">
          <div className="mb-10 flex items-center gap-5">
            <h2
              className="
                text-2xl
                font-bold
                text-gray-900

                dark:text-white

                md:text-3xl
              "
            >
              Methodology
            </h2>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="relative ml-4 border-l border-gray-200 dark:border-gray-800">
            {project.methodology.map((item) => (
              <div key={item.step} className="relative pb-10 pl-10 last:pb-0">
                {/* Timeline Dot */}
                <span
                  className="
                    absolute
                    -left-[7px]
                    top-1
                    h-3
                    w-3
                    rounded-full
                    bg-gray-900

                    dark:bg-white
                  "
                />

                {/* Step */}
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-gray-400
                  "
                >
                  Step {item.step}
                </p>

                {/* Title */}
                <h3
                  className="
                    mt-2
                    text-lg
                    font-semibold
                    text-gray-900

                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    max-w-3xl
                    text-sm
                    leading-7
                    text-gray-600

                    dark:text-gray-300
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* Results */}
        {/* ========================================= */}

        <section className="mt-20">
          <div className="mb-10 flex items-center gap-5">
            <h2
              className="
                text-2xl
                font-bold
                text-gray-900

                dark:text-white

                md:text-3xl
              "
            >
              Results
            </h2>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {project.results.map((result) => (
              <div
                key={result.label}
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-6

                  dark:border-gray-800
                  dark:bg-gray-900
                "
              >
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-gray-400
                  "
                >
                  {result.label}
                </p>

                <p
                  className="
                    mt-3
                    text-lg
                    font-semibold
                    text-gray-900

                    dark:text-white
                  "
                >
                  {result.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* Gallery */}
        {/* ========================================= */}

        {project.gallery?.length > 0 && (
          <section className="mt-20">
            <div className="mb-10 flex items-center gap-5">
              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-900

                  dark:text-white

                  md:text-3xl
                "
              >
                Project Gallery
              </h2>

              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((item, index) => (
                <figure
                  key={index}
                  className="
                    group
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50

                    dark:border-gray-800
                    dark:bg-gray-900
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <figcaption
                    className="
                      border-t
                      border-gray-200
                      px-5
                      py-3
                      text-sm
                      text-gray-500

                      dark:border-gray-800
                      dark:text-gray-400
                    "
                  >
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* ========================================= */}
        {/* Back to Projects */}
        {/* ========================================= */}

        <div
          className="
            mt-20
            border-t
            border-gray-200
            pt-8

            dark:border-gray-800
          "
        >
          <Link
            to="/projects"
            className="
              inline-flex
              text-sm
              font-medium
              text-gray-600

              transition

              hover:text-gray-900

              dark:text-gray-400
              dark:hover:text-white
            "
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
