import React from "react";
import ProductPageCard from "../Components/ProductPageCard";
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function ProductPage() {

  let { id } = useParams();
  
  const [products,SetProducts] = useState([])

  useEffect(()=>{
    let ProductList = axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((json) => SetProducts(json.data));
  },[])

  return (
    <>
  <ProductPageCard
  key={products.id}
  image ={products.image}
  price ={products.price}
  desc ={products.description}
  title ={products.title}
  />
  </>
  ) 
}

export default ProductPage;
