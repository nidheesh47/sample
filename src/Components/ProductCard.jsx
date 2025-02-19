import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../App.css"


function ProductCard(props) {
  return (
    <Card className='CardBorder shadow-lg p-3 mb-5 bg-body'>
      <Card.Img variant="top" src={props.image}  className='Product-Image'/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>$ {props.price}
        </Card.Text>
        {/* <Card.Text>{props.desc}
        </Card.Text> */}
      </Card.Body>
        <div className='text-center '>
        <Link to = {`/Product/${props.id}`}>
        <Button className='px-5'  variant="primary">Check Product</Button>
        </Link>
        </div>
    </Card>
  );
}

export default ProductCard;