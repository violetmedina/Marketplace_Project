import React from 'react'
import { useDispatch } from 'react-redux'
import {add_fetched_products} from '../actions/creators/productActions'
const DataFetch = () => {
    const dispatch = useDispatch()
    const [categories, setCategories] = useState([])


    const getCategories = async() => {
        let results = await fetch("https://fakestoreapi.com/products/categories")
        let data = await results.json()
        dispatch(add_fetched_products(data))
    }


useEffect(()=>{
getCategories()
},[])

  return (
    <div>DataFetch</div>
  )
}

export default DataFetch