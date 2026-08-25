import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiQgis,
  SiWordpress,
  SiFigma,
  SiPython,
} from "react-icons/si";

import { TbRoute, TbApi, TbSatellite } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

import { Database, Map, Globe, Code2, Server } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "GIS & Geospatial",
      icon: <Map size={20} />,
      skills: [
        {
          name: "ESRI Suite",
          icon: <Globe size={42} strokeWidth={2} />,
        },
        {
          name: "QGIS",
          icon: <SiQgis />,
        },
        {
          name: "PostGIS",
          icon: <SiPostgresql />,
        },
        {
          name: "ModelBuilder,FME",
          icon: <TbRoute />,
        },
        {
          name: "Remote Sensing",
          icon: <TbSatellite />,
        },
      ],
    },

    {
      title: "Frontend Development",
      icon: <Code2 size={20} />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Sass", icon: <SiSass /> },
      ],
    },

    {
      title: "Backend & Database",
      icon: <Database size={20} />,
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Microsoft Access", icon: <Database /> },
      ],
    },

    {
      title: "APIs, Tools & Platforms",
      icon: <Server size={20} />,
      skills: [
        { name: "REST APIs", icon: <TbApi /> },
        { name: "JSON", icon: <VscJson /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "WordPress", icon: <SiWordpress /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Technologies
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

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
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
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
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
                  {group.icon}
                </div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-gray-900

                    dark:text-white
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* Skill Icons */}
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    {/* Icon */}
                    <div
                      className="
    flex
    h-20
    w-20
    cursor-pointer
    items-center
    justify-center
    rounded-xl

    border
    border-gray-200
    bg-white

    text-4xl
    text-gray-500

    shadow-sm

    transition-all
    duration-300

    group-hover:-translate-y-1
    group-hover:border-(--secondary)
    group-hover:bg-(--secondary)
    group-hover:text-white
    group-hover:shadow-[0_6px_20px_rgba(255,93,151,0.20)]

    dark:border-gray-700
    dark:bg-gray-800
    dark:text-gray-400

    dark:group-hover:border-(--secondary-dark)
    dark:group-hover:bg-(--secondary-dark)
    dark:group-hover:text-white
    dark:group-hover:shadow-[0_6px_20px_rgba(243,166,194,0.18)]
  "
                    >
                      {skill.icon}
                    </div>

                    {/* Tooltip */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-full
                        left-1/2
                        z-20
                        mb-2

                        -translate-x-1/2
                        translate-y-2

                        whitespace-nowrap

                        rounded-md

                        bg-gray-900
                        px-3
                        py-1.5

                        text-xs
                        font-medium
                        text-white

                        opacity-0
                        shadow-lg

                        transition-all
                        duration-200

                        group-hover:translate-y-0
                        group-hover:opacity-100

                        dark:bg-white
                        dark:text-gray-900
                      "
                    >
                      {skill.name}

                      {/* Tooltip Arrow */}
                      <span
                        className="
                          absolute
                          left-1/2
                          top-full

                          -translate-x-1/2

                          border-4
                          border-transparent
                          border-t-gray-900

                          dark:border-t-white
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
