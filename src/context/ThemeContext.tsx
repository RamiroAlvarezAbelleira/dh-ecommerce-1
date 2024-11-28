import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    isDarkMode: boolean,
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as ThemeContextType)