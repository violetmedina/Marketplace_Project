import Nav from 'react-bootstrap/Nav';
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function CategoryNav() {

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const navigate = useNavigate()
    const getCategories = async() => {
        let results = await fetch("https://fakestoreapi.com/products/categories")
        let data = await results.json()
        setCategories(data)
    }
useEffect(()=>{
getCategories()
},[])


return (
    <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item> <Nav.Link onClick={()=>navigate(`/category/saved`)}>&#9829; Saved </Nav.Link></Nav.Item>
        {categories.map(category =>{
            return <Nav.Item> <Nav.Link onClick={()=>navigate(`/category/${category}`)}>{category}</Nav.Link></Nav.Item>
        })}
    </Nav>
);
}

export default CategoryNav;