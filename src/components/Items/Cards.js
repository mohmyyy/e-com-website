import { useContext } from "react";
import { Button, Card, Container, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
const Cards = (props) => {
  const ctx = useContext(CartContext)
  const addToCardHandler = (event) => {
    event.preventDefault();
    const quantity = +1
    ctx.addToItems({...props.item,quantity:quantity})
  }
  return (
        <Card style={{ width: "20rem" }}>
          <h3>{props.item.title}</h3>
          <Card.Img variant="top" src={props.item.imageUrl} />
          <Card.Body>
            <Card.Text>
              <Card.Title>${props.item.price}</Card.Title>
            </Card.Text>
            <Button type="click" onClick = {addToCardHandler}>Add to Card</Button>
          </Card.Body>
        </Card>
  );
};
export default Cards;
