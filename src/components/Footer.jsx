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
          h-16
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4

          sm:h-18
          sm:px-6

          md:h-20
          md:px-6
        "
      >
        {/* ================= SE LOGO ================= */}
        <div className="shrink-0">
          <a
            href="/"
            aria-label="Home"
            className="
              group
              relative
              inline-block
              text-xl
              font-bold
              tracking-tight
              text-gray-800
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-200
              dark:hover:text-(--secondary-dark)

              sm:text-2xl

        
            "
          >
            <span>S</span>

            <span
              className="
                text-gray-500
                transition-colors
                duration-300

                group-hover:text-(--secondary)

                dark:text-gray-400
                dark:group-hover:text-(--secondary-dark)
              "
            >
              E
            </span>
          </a>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <p
          className="
            min-w-0
            truncate
            text-center
            text-xs
            text-gray-500

            sm:text-sm

            dark:text-gray-400
          "
        >
          © {new Date().getFullYear()} Shanika Ekanayake
        </p>

        {/* ================= CONTACT ICONS ================= */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-3

            sm:gap-4

            md:gap-5
          "
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shanikajayawardane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-gray-500
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-400
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
              text-gray-500
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-400
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
            href="mailto:shanikau@gmail.com"
            aria-label="Email"
            className="
              text-gray-500
              transition
              duration-300

              hover:-translate-y-0.5
              hover:text-(--secondary)

              dark:text-gray-400
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
      </div>
    </footer>
  );
}

export default Footer;
