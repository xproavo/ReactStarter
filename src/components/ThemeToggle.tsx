import { Moon, Sun } from "lucide-react";

import useTheme from "@/hooks/common/useTheme";

export default function ThemeToggle () {
    const { theme, toggleTheme } = useTheme();

      return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 transition-colors"
            aria-label="Changer le thème"
        >
            {theme === "light" ? (
                <Moon className="text-gray-700" />
            ) : (
                <Sun className="text-yellow-400" />
            )}
        </button>
    );
}