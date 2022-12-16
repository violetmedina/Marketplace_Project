import { useState, useEffect } from "react"
import {Form} from 'react-bootstrap';
const Categories = () => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const getCategories = async() => {
        let results = await fetch("https://fakestoreapi.com/products/categories")
        let data = await results.json()
        setCategories(data)
    }
useEffect(()=>{
getCategories()
},[])

return (
    <>
    {categories.map((category,index)=>{
    return  <option key={index} value={category}>{category}</option>
})}</>
)
}

export default Categories