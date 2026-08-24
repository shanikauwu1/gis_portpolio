import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-white dark:border-gray-800/60 dark:bg-gray-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* SE Logo */}
        <div className="relative text-xl font-bold tracking-tight">
          <span className="text-gray-800 dark:text-gray-200">S</span>

          <span className="absolute left-3 top-0 text-gray-500 dark:text-gray-400">
            E
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 Shanika Ekanayake
        </p>

        {/* Contact Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition-colors duration-200 hover:text-[#E88BAF] dark:text-gray-400 dark:hover:text-[#FFD1E4]"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition-colors duration-200 hover:text-[#E88BAF] dark:text-gray-400 dark:hover:text-[#FFD1E4]"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="mailto:your@email.com"
            aria-label="Email"
            className="text-gray-500 transition-colors duration-200 hover:text-[#E88BAF] dark:text-gray-400 dark:hover:text-[#FFD1E4]"
          >
            <FaEnvelope size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
