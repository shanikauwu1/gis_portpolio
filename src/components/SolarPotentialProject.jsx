import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiArcgis } from "react-icons/si";
import { Link } from "react-router-dom";
import SolarMap from "./SolarMap";

function SolarPotentialProject() {
  return (
    <section
      id="solar-project"
      className="
        w-full
        border-b
        border-gray-200
        bg-white
        py-20
        dark:border-gray-800
        dark:bg-gray-950
        sm:py-24
      "
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ================= TITLE ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-(--secondary)
              dark:text-(--secondary-dark)
            "
          >
            Featured Web GIS Project
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
              dark:text-white
            "
          >
            JavaScript ArcGIS Map SDK
          </h2>

          {/* ================= SUBTITLE ================= */}
          <h3
            className="
              mt-4
              text-xl
              font-semibold
              text-gray-700
              sm:text-2xl
              dark:text-gray-200
            "
          >
            Residential Solar Energy Analysis
          </h3>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              dark:text-gray-400
            "
          >
            An interactive Web GIS application exploring rooftop solar potential
            across residential neighbourhoods in Calgary using spatial analysis
            and ArcGIS Online.
          </p>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {/* React */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
            "
          >
            <FaReact className="text-lg text-(--secondary) dark:text-(--secondary-dark)" />
            React
          </div>

          {/* JavaScript */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
            "
          >
            <FaJsSquare className="text-lg text-(--secondary) dark:text-(--secondary-dark)" />
            JavaScript
          </div>

          {/* ArcGIS */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
            "
          >
            <SiArcgis className="text-lg text-(--secondary) dark:text-(--secondary-dark)" />
            ArcGIS Maps SDK
          </div>

          {/* Python */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
            "
          >
            <FaPython className="text-lg text-(--secondary) dark:text-(--secondary-dark)" />
            Python
          </div>

          {/* ArcGIS Online */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-200
              bg-gray-50
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
            "
          >
            <SiArcgis className="text-lg text-(--secondary) dark:text-(--secondary-dark)" />
            ArcGIS Online
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-12">
          <div
            className="
              overflow-hidden
              rounded-2xl
              border-2
              border-gray-200
              bg-gray-50
              shadow-xl
              shadow-gray-400/10
              dark:border-gray-700
              dark:bg-gray-900
              dark:shadow-black/20
            "
          >
            {/* Map Header */}
            <div
              className="
                border-b
                border-gray-200
                px-5
                py-4
                dark:border-gray-700
              "
            >
              <div className="flex items-center gap-2">
                <SiArcgis
                  className="
                    text-lg
                    text-(--secondary)
                    dark:text-(--secondary-dark)
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-gray-800
                    dark:text-gray-200
                  "
                >
                  Calgary Residential Solar Potential
                </span>
              </div>
            </div>

            {/* ArcGIS Map Container */}
            <div
              id="solar-map"
              className="
                h-[450px]
                w-full
                bg-gray-100
                dark:bg-gray-800
                sm:h-[550px]
                lg:h-[600px]
              "
            >
              <SolarMap />
            </div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {/* View Full Project */}
          <Link
            to="/solar-potential"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-gray-900
              px-5
              py-3
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-gray-900/20
              transition-all
              duration-300
              hover:bg-(--secondary)
              hover:shadow-(--secondary)/30
              dark:bg-white
              dark:text-gray-900
              dark:hover:bg-(--secondary-dark)
            "
          >
            View Full Project
            <FaArrowRight
              className="
                text-xs
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* Source Code */}
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-300
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-gray-700
              transition-all
              duration-300
              hover:border-(--secondary)
              hover:text-(--secondary)
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
              dark:hover:border-(--secondary-dark)
              dark:hover:text-(--secondary-dark)
            "
          >
            <FaGithub />
            Source Code
          </a>

          {/* ArcGIS Web Map */}
          <a
            href="YOUR_ARCGIS_WEBMAP_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-gray-300
              bg-white
              px-5
              py-3
              text-sm
              font-medium
              text-gray-700
              transition-all
              duration-300
              hover:border-(--secondary)
              hover:text-(--secondary)
              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
              dark:hover:border-(--secondary-dark)
              dark:hover:text-(--secondary-dark)
            "
          >
            <SiArcgis />
            Open Web Map
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SolarPotentialProject;
