import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import ProductCard from "../../components/ui/ProductCard/ProductCard"
import { getProducts } from "../../service"
import { Product } from "../../interface"
import { Toaster } from "sonner"
import { useQuery } from "react-query"

const Home = () => {

  const { data, isLoading, error} = useQuery('products', getProducts)

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
    </>
  )
}

export default Home