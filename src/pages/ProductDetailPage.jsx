import { useParams } from "react-router-dom"

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const ProductDetailPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect( ()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then( res => console.log(res.data))
        .catch( err => console.log(err))
    })

    return (
        <>

            <Link to={`/product`}>
                <i className="fa-solid fa-arrow-left"></i>
            </Link>

            <div>L'ID E': {id}</div>   
            <div className="fakestore-card">
                <img src={product.image} alt={product.title} />
                <p className="title">{product.title}</p>
                <p className="price">€ {product.price}</p>
            </div>
   
        </>
    )

}

export default ProductDetailPage 