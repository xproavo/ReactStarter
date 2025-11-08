import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type Theme = "light" | "dark";

export default function useTheme() {
    const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return {theme, toggleTheme};
}