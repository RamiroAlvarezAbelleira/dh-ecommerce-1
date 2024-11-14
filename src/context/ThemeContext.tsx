import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    isDarkMode: Boolean,
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as ThemeContextType)