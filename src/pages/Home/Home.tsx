import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import ProductCard from "../../components/ui/ProductCard/ProductCard"
import { getProducts } from "../../service/products"

const Home = () => {

  const [products, setProducts] = useState([])

  


  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
      <Hero />
      <div className={styles.container}>
        {products.map((prod: any) => {
          return <ProductCard key={prod.tail} product={prod}/>
        })}
      </div>
    </>
  )
}

export default Home