import { Button, Card, Container, Col } from "react-bootstrap";
const Cards = (props) => {
  console.log(props.item);
  return (
        <Card style={{ width: "20rem" }}>
          <h3>{props.item.title}</h3>
          <Card.Img variant="top" src={props.item.imageUrl} />
          <Card.Body>
            <Card.Text>
              <Card.Title>${props.item.price}</Card.Title>
            </Card.Text>
            <Button onClick = {props.onClick}>Add to Card</Button>
          </Card.Body>
        </Card>
  );
};
export default Cards;
