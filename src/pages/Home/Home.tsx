import { useState } from "react"
import { useQuery } from "react-query"
import { Toaster } from "sonner"
import Hero from "../../components/ui/Hero/Hero"
import ProductCard from "../../components/ui/ProductCard/ProductCard"
import { getProducts } from "../../service"
import styles from "./Home.module.css"
import Pagination from "../../components/ui/Pagination/Pagination"

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
      <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} page={page} />
    </>
  )
}

export default Home