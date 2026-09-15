import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-gray-200/70
        bg-white/90
        backdrop-blur-md

        dark:border-gray-800/70
        dark:bg-gray-950/90
      "
    >
      {/* ================= FIRST ROW ================= */}
      <div
        className="
          mx-auto
          grid
          h-16
          max-w-6xl
          grid-cols-3
          items-center
          px-4
          sm:h-18
          sm:px-6
          md:h-20
        "
      >
        {/* ================= LEFT - NAME ================= */}
        <div className="justify-self-start">
          <Link
            to="/"
            className="
              group
              relative
              inline-block
              text-xl
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-400
              dark:hover:text-(--secondary-dark)

              after:absolute
              after:-bottom-1
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-left
              after:scale-x-0
              after:bg-(--secondary)
              after:transition-transform
              after:duration-300
              after:content-['']

              hover:after:scale-x-100

              sm:text-2xl
              sm:after:-bottom-2

              md:text-3xl

              dark:after:bg-(--secondary-dark)
            "
          >
            Shanika Ekanayake
          </Link>
        </div>

        {/* ================= CENTER - SOCIAL ICONS ================= */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3

            sm:gap-5
            md:gap-6
          "
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shanikajayawardane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-300
              dark:hover:text-(--secondary-dark)
            "
          >
            <FaLinkedinIn
              className="
                h-5
                w-5

                sm:h-6
                sm:w-6

                md:h-7
                md:w-7
              "
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shanikauwu1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-300
              dark:hover:text-(--secondary-dark)
            "
          >
            <FaGithub
              className="
                h-5
                w-5

                sm:h-6
                sm:w-6

                md:h-7
                md:w-7
              "
            />
          </a>

          {/* Email */}
          <a
            href="mailto:shanikaugmail.com"
            aria-label="Email"
            className="
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-300
              dark:hover:text-(--secondary-dark)
            "
          >
            <FaEnvelope
              className="
                h-5
                w-5

                sm:h-6
                sm:w-6

                md:h-7
                md:w-7
              "
            />
          </a>
        </div>

        {/* ================= RIGHT - THEME TOGGLE ================= */}
        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      {/* ================= SECOND ROW ================= */}
      <div
        className="
          border
          border-gray-200/60
          bg-gray-200

          dark:border-gray-800/60
          dark:bg-black/90
        "
      >
        <div
          className="
            flex
            h-11
            items-center
            justify-center
            gap-7

            sm:h-12
            sm:gap-9

            md:h-14
            md:gap-12
          "
        >
          {/* ================= PORTFOLIO ================= */}
          <Link
            to="/"
            className="
              group
              relative
              inline-block
              text-base
              font-medium
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-300
              dark:hover:text-(--secondary-dark)

              after:absolute
              after:-bottom-1
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-left
              after:scale-x-0
              after:bg-(--secondary)
              after:transition-transform
              after:duration-300
              after:content-['']

              hover:after:scale-x-100

              sm:text-lg

              md:text-2xl

              dark:after:bg-(--secondary-dark)
            "
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="
              group
              relative
              inline-block
              text-base
              font-medium
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-300
              dark:hover:text-(--secondary-dark)

              after:absolute
              after:-bottom-1
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-left
              after:scale-x-0
              after:bg-(--secondary)
              after:transition-transform
              after:duration-300
              after:content-['']

              hover:after:scale-x-100

              sm:text-lg

              md:text-2xl

              dark:after:bg-(--secondary-dark)
            "
          >
            Projects
          </Link>

          {/* ================= ABOUT ME ================= */}
          <Link
            to="/about"
            className="
              group
              relative
              inline-block
              text-base
              font-medium
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-300
              dark:hover:text-(--secondary-dark)

              after:absolute
              after:-bottom-1
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-left
              after:scale-x-0
              after:bg-(--secondary)
              after:transition-transform
              after:duration-300
              after:content-['']

              hover:after:scale-x-100

              sm:text-lg

              md:text-2xl

              dark:after:bg-(--secondary-dark)
            "
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
