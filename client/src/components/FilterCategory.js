import {useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'

const FilterCategory = () => {
    let params = useParams()
    const [products, setProducts] = useState([])


const getData = async () => {
    let data = await fetch(`https://fakestoreapi.com/products/category/${params.category}`)
    let result = await data.json()
    console.log(result)
    setProducts(result)

}
useEffect(() => {
  getData()

  
}, [])

    console.log(params.category)
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



// books.filter(book=> book.genre === params.category)

export default FilterCategory