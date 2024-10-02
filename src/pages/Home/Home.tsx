import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import ProductCard from "../../components/ui/ProductCard/ProductCard"
import { getProducts } from "../../service"
import { Product } from "../../interface"
import { Toaster } from "sonner"

const Home = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <div className={styles.container}>
        {products.map((prod) => {
          return <ProductCard key={prod.tail} product={prod} />
        })}
      </div>
    </>
  )
}

export default Home