import { createContext } from "react";

interface ThemeContextType {
    isDarkMode: boolean,
    handleDarkModeToggle: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)