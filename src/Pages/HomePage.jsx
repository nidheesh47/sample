import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Homepage() {
  const [productList, SetProductList] = useState([]);

  useEffect(() => {
    let Products = axios
      .get("https://fakestoreapi.com/products")
      .then((json) => SetProductList(json.data));
  }, []);

  return (
    < >
    <Container className="container-fluid">
    <Row >
      {productList.map((product) => (
        <Col  xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} className="p-o m-0" key={product.id}>
        <ProductCard 
        id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          desc={product.description}
        ></ProductCard>
        </Col>
      ))}
      </Row>
      </Container>
    </>
  );
}

export default Homepage;
