import { ReactNode } from "react"
import styles from "./Pagination.module.css"

interface PaginationProps {
    handlePreviousPage: () => void,
    handleNextPage: () => void,
    page: ReactNode
}

const Pagination = ({ handlePreviousPage, handleNextPage, page }: PaginationProps) => {
    return (
        <div className={styles.paginationContainer}>
            <button
                className={styles.paginationButton}
                onClick={handlePreviousPage}
                disabled={page === 1}
            >
                prev
            </button>
            <div className={styles.paginationActive}>
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