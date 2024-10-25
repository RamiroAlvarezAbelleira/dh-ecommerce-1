import { useNavigate } from "react-router-dom"
import styles from "./Dashboard.module.css"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"
import { Product } from "../../interface"
import { createProduct } from "../../service"
import { toast, Toaster } from "sonner"

const Dashboard = () => {

    const [product, setProduct] = useState({
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        head: '',
        image: '',
        name: '',
        releaseDate: '',
        tail: '',
        type: '',
        price: 0
    })

    const navigate = useNavigate()

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin')

        if (!userLogin) {
            navigate("/login")
        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('userLogin')
        navigate("/login")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const mutation = useMutation((newProduct: Product) => {
        return createProduct(newProduct)
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(product)

        setProduct({
            amiiboSeries: '',
            character: '',
            gameSeries: '',
            head: '',
            image: '',
            name: '',
            releaseDate: '',
            tail: '',
            type: '',
            price: 0
        })
        toast.success('Product created Successfully')
    }

    return (
        <div className={styles.container}>
            <Toaster richColors />
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Series */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="amiiboSeries">Amiibo Series</label>
                    <input
                        type="text"
                        name="amiiboSeries"
                        id="amiiboSeries"
                        value={product.amiiboSeries}
                        onChange={handleChange}
                        required />
                </div>
                {/* Character */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="character">Character</label>
                    <input
                        type="text"
                        name="character"
                        id="character"
                        value={product.character}
                        onChange={handleChange}
                        required />
                </div>
                {/* Game Series */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="gameSeries">Game Series</label>
                    <input
                        type="text"
                        name="gameSeries"
                        id="gameSeries"
                        value={product.gameSeries}
                        onChange={handleChange}
                        required />
                </div>
                {/* head */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="head">head</label>
                    <input
                        type="text"
                        name="head"
                        id="head"
                        value={product.head}
                        onChange={handleChange}
                        required />
                </div>
                {/* image */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="image">Image url</label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        value={product.image}
                        onChange={handleChange}
                        required />
                </div>
                {/* name */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={handleChange}
                        required />
                </div>
                {/* Release */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="releaseDate">Release date</label>
                    <input
                        type="date"
                        name="releaseDate"
                        id="releaseDate"
                        value={product.releaseDate}
                        onChange={handleChange}
                        required />
                </div>
                {/* tail */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="tail">Tail</label>
                    <input
                        type="text"
                        name="tail"
                        id="tail"
                        value={product.tail}
                        onChange={handleChange}
                        required />
                </div>
                {/* Type */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        name="type"
                        id="type"
                        value={product.type}
                        onChange={handleChange}
                        required />
                </div>
                {/* Price */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={handleChange}
                        required />
                </div>
                <div className={styles.formControlLogin}>
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard