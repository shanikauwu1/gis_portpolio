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
        relative flex h-9 w-16 items-center
        rounded-full
        border border-gray-200
        bg-gray-100
        p-1
        transition-all duration-300
        dark:border-gray-700
        dark:bg-gray-800
      "
    >
      {/* Sliding circle */}
      <span
        className={`
          flex h-7 w-7 items-center justify-center
          rounded-full
          bg-white
          shadow-sm
          transition-transform duration-300
          dark:bg-gray-950
          ${darkMode ? "translate-x-7" : "translate-x-0"}
        `}
      >
        {darkMode ? (
          <Moon size={15} strokeWidth={2} className="text-gray-200" />
        ) : (
          <Sun size={15} strokeWidth={2} className="text-gray-800" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
