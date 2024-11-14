import { ReactNode, FC, useState } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}