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
          h-20
          max-w-6xl
          grid-cols-3
          items-center
          px-6
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
              text-3xl
              text-gray-600
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-400
              dark:hover:text-(--secondary-dark)

              after:absolute
              after:-bottom-2
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

              dark:after:bg-(--secondary-dark)
            "
          >
            Shanika Ekanayake
          </Link>
        </div>

        {/* ================= CENTER - SOCIAL ICONS ================= */}
        <div className="flex items-center justify-center gap-6">
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
            <FaLinkedinIn size={35} />
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
            <FaGithub size={35} />
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
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* ================= RIGHT - THEME TOGGLE ================= */}
        <div className="flex justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      {/* ================= SECOND ROW ================= */}
      <div
        className="
          border-t
          border-gray-200/60
          bg-gray-50

          dark:border-gray-800/60
          dark:bg-black/90
        "
      >
        <div
          className="
            flex
            h-14
            items-center
            justify-center
            gap-12
          "
        >
          {/* ================= PORTFOLIO ================= */}
          <Link
            to="/#projects"
            className="
              group
              relative
              inline-block
              text-2xl
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

              dark:after:bg-(--secondary-dark)
            "
          >
            Portfolio
          </Link>

          {/* ================= ABOUT ME ================= */}
          <Link
            to="/about"
            className="
              group
              relative
              inline-block
              text-2xl
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
