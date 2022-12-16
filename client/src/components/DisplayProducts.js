import { useEffect, useState } from "react"
import {axios} from 'axios'
const DisplayProducts = () => {
const [products, setProducts] = useState([])
    const getProducts = async() => {
        let results = await fetch("https://fakestoreapi.com/products")
        let data = await results.json()
        setProducts(data)
        console.log(data)
    }

   
    useEffect(() => {
        getProducts()
        console.log(products)
    }, [])

// console.log(categories)

return (
    <>{products.map(product=>{
        return <div key={product.id} style={{width: 400 + "px", margin: 50 + "px"}}>
                <p>Title: {product.title}</p>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating.rate}</p>
                <img src={product.image}  style={{width: 400 + "px"}}/> 
            </div>
    })}</>
)
}

export default DisplayProducts