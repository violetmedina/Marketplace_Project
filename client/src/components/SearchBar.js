import {Button, Form, InputGroup} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Categories from './Categories'
const SearchBar = () => {
    const [product, setProduct] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(product,category)
    }
return (
    <form onSubmit={handleSubmit}>
    <InputGroup className="mb-3">
        <Form.Control
            placeholder="Product"
            aria-label="Product"
            aria-describedby="basic-addon2"
            onChange={(e)=>setProduct(e.target.value)}
        />
        <Form.Select aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)}>
            <option>Category</option>
            <Categories/>
        </Form.Select>  
        <Button variant="outline-secondary" id="button-addon2" type='submit'>Search</Button>
    </InputGroup>
    </form>
)
}

export default SearchBar