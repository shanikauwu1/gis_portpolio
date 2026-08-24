import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-gray-200/70
        bg-gray-50

        transition-colors
        duration-300

        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* SE Logo */}
        <div className="relative text-2xl font-bold tracking-tight">
          <span className="text-gray-800 dark:text-gray-200">S</span>

          <span
            className="
              absolute
              left-3
              top-0
              text-gray-500

              dark:text-gray-400
            "
          >
            E
          </span>
        </div>

        {/* Copyright */}
        <p
          className="
            text-sm
            text-gray-500

            dark:text-gray-400
          "
        >
          © {new Date().getFullYear()} Shanika Ekanayake
        </p>

        {/* Contact Icons */}
        <div className="flex items-center gap-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-gray-500
              transition-colors
              duration-200

              hover:text-[var(--secondary)]

              dark:text-gray-400
              dark:hover:text-[var(--secondary-dark)]
            "
          >
            <FaLinkedinIn size={28} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-gray-500
              transition-colors
              duration-200

              hover:text-[var(--secondary)]

              dark:text-gray-400
              dark:hover:text-[var(--secondary-dark)]
            "
          >
            <FaGithub size={28} />
          </a>

          {/* Email */}
          <a
            href="mailto:your@email.com"
            aria-label="Email"
            className="
              text-gray-500
              transition-colors
              duration-200

              hover:text-[var(--secondary)]

              dark:text-gray-400
              dark:hover:text-[var(--secondary-dark)]
            "
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
