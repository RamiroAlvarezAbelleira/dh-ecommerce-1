import { useEffect, useState } from "react"
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import ProductCard from "../../components/ui/ProductCard/ProductCard"

const Home = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {

    try {
      const response = await fetch(`http://localhost:3000/products`)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }

  }


  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)
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