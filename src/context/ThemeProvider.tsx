import { ReactNode, FC, useState, useEffect } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const theme = localStorage.getItem('theme')
    const [isDarkMode, setIsDarkMode] = useState(theme === 'false' ? false : true)

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDarkMode))
    },[isDarkMode])

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}