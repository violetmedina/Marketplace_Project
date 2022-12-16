import React, { useState, useEffect } from 'react'
import {Form,InputGroup, Button} from 'react-bootstrap';
import Categories from './Categories';


const AddNewProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [newProduct, setNewProduct] = useState({})
    const [showProduct, setShowProduct] = useState(false)

// useEffect(() => {
//     setShowProduct(!showProduct)

// }, [newProduct])


const addProduct = (e) => {
    e.preventDefault()
    console.log(category)
    setNewProduct({
        title,
        price,
        description,
        image: 'https://i.pravatar.cc',
        category
    })
    setShowProduct(true)
    // fetch('http://localhost:8080/add-product',{
    //         method:"POST",
    //         body:JSON.stringify(
    //             {
    //                 title,
    //                 price,
    //                 description,
    //                 image: 'https://i.pravatar.cc',
    //                 category
    //             }
    //         )
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    }
    
return (
    <div style={{width:500 + 'px'}}>
<div>AddNewProduct</div>
<form onSubmit={(e)=>addProduct(e)}>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">
        Title
    </InputGroup.Text>
    <Form.Control
        aria-label="Title"
        aria-describedby="inputGroup-sizing-default"
        onChange={(e)=>setTitle(e.target.value)}
        />
</InputGroup>
<InputGroup className="mb-3">
        <InputGroup.Text>$Price</InputGroup.Text>
        <Form.Control aria-label="$Price" onChange={(e)=>setPrice(e.target.value)} />
        {/* <InputGroup.Text>.00</InputGroup.Text> */}
</InputGroup>
<InputGroup>
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Description" onChange={(e)=>setDescription(e.target.value)}/>
</InputGroup>
<Form.Select aria-label="Default select example" onChange={(e)=>setCategory(e.target.value)}>
<option>Category</option>
    <Categories/>
</Form.Select>
<Button type='submit'>Add product</Button>
</form> 
{showProduct ? <div key={newProduct.id} style={{width: 400 + "px", margin: 50 + "px"}}>
                <p>Title: {newProduct.title}</p>
                <p>Category: {newProduct.category}</p>
                <p>Description: {newProduct.description}</p>
                <p>Price: {newProduct.price}</p>
                <img src={newProduct.image}  style={{width: 100 + "px"}}/>
        </div>:''}
    </div>

)
}

export default AddNewProduct