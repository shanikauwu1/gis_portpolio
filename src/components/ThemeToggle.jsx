import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative
        flex
        h-7
        w-12
        items-center
        rounded-full
        border
        border-gray-200
        bg-gray-300/80
        p-1
        transition-all
        duration-300

        sm:h-8
        sm:w-14

        md:h-9
        md:w-16

        dark:border-gray-500
        dark:bg-gray-800
      "
    >
      {/* Sliding circle */}
      <span
        className={`
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-sm
          transition-transform
          duration-300

          sm:h-6
          sm:w-6

          md:h-7
          md:w-7

          dark:bg-gray-950

          ${
            darkMode
              ? "translate-x-5 sm:translate-x-6 md:translate-x-7"
              : "translate-x-0"
          }
        `}
      >
        {darkMode ? (
          <Moon
            className="
              h-3
              w-3

              sm:h-3.5
              sm:w-3.5

              md:h-[15px]
              md:w-[15px]

              text-gray-200
            "
            strokeWidth={2}
          />
        ) : (
          <Sun
            className="
              h-3
              w-3

              sm:h-3.5
              sm:w-3.5

              md:h-[15px]
              md:w-[15px]

              text-gray-800
            "
            strokeWidth={2}
          />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
