import { ReactNode } from "react"
import styles from "./Pagination.module.css"
import useThemeContext from "../../../hooks/useThemeContext"

interface PaginationProps {
    handlePreviousPage: () => void,
    handleNextPage: () => void,
    page: ReactNode
}

const Pagination = ({ handlePreviousPage, handleNextPage, page }: PaginationProps) => {

    const { isDarkMode } = useThemeContext()

    return (
        <div className={styles.paginationContainer}>
            <button
                className={styles.paginationButton}
                onClick={handlePreviousPage}
                disabled={page === 1}
            >
                prev
            </button>
            <div className={isDarkMode ? styles.paginationActiveDark : styles.paginationActiveLight}>
                <span>
                    {page}
                </span>
            </div>
            <button
                className={styles.paginationButton}
                onClick={handleNextPage}
            >
                next
            </button>
        </div>
    )
}

export default Pagination