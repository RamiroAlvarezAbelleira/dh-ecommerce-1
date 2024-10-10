import { useNavigate } from "react-router-dom"
import styles from "./Dashboard.module.css"
import { useEffect } from "react"

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin')

        if (!userLogin) {
            navigate("/login")
        }
    }, [])

    return (
        <div className={styles.container}>
            <div>
                <h1>Dashboard</h1>
                <button>Log Out</button>
            </div>
            <form>
                {/* Series */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="amiiboSeries">Amiibo Series</label>
                    <input
                        type="text"
                        name="amiiboSeries"
                        id="amiiboSeries"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* Character */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="character">Character</label>
                    <input
                        type="text"
                        name="character"
                        id="character"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* Game Series */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="gameSeries">Game Series</label>
                    <input
                        type="text"
                        name="gameSeries"
                        id="gameSeries"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* head */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="head">head</label>
                    <input
                        type="text"
                        name="head"
                        id="head"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* image */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="image">Image url</label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* name */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* Release */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="release">Release date</label>
                    <input
                        type="date"
                        name="release"
                        id="release"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* tail */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="tail">Tail</label>
                    <input
                        type="text"
                        name="tail"
                        id="tail"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* Type */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        name="type"
                        id="type"
                        value={''}
                        onChange={() => { }}
                        required />
                </div>
                {/* Price */}
                <div className={styles.formControlLogin}>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={''}
                        onChange={() => { }}
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