import {Products} from "../interface"

export const getProducts = async ():Promise<Products[]> => {

    try {
        const response = await fetch(`http://localhost:3000/products`)

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error("Failed to fetch products")
        }
    } catch (error: any) {
        throw new Error("Network error: " + error.message)
    }

}