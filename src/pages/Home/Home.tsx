import { useState } from "react"
import { useQuery } from "react-query"
import { Toaster } from "sonner"
import Hero from "../../components/ui/Hero/Hero"
import ProductCard from "../../components/ui/ProductCard/ProductCard"
import { getProducts } from "../../service"
import styles from "./Home.module.css"

const Home = () => {

  const [page, setPage] = useState(1)

  const { data, isLoading, error } = useQuery(
    ['products', page], 
    () => getProducts(page), 
    { keepPreviousData: true }
  )

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <div className={styles.container}>
        {data?.map((prod) => {
          return <ProductCard key={prod.tail} product={prod} />
        })}
      </div>
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
    </>
  )
}

export default Home