import Carousel from 'react-bootstrap/Carousel';
import { useState,useEffect } from 'react';

const CarouselComponent = () => {

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


return (
    <Carousel style={{width:500 + 'px', height:500 + 'px'}} >
        {products.map(product=>{
            return <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={product.image}
            alt="First slide"
            style={{width:500 + 'px', height:500 + 'px'}}
            />
            <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            </Carousel.Caption>
        </Carousel.Item>
        })}
    </Carousel>
)
}

export default CarouselComponent