import Cards from "./Cards";
import { Col, Container, Row } from "react-bootstrap";

const ListItems = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addToCardHandler = (item) => {
    console.log(item);
  };

  const items = (
    <Row>
      {productsArr.map((itm) => {
        return (
          <Col xs={6}>
            <Cards onClick={addToCardHandler} item={itm} />
          </Col>
        );
      })}
    </Row>
  );
  return (
      <Container className="mt-3" >
        <center>
          <h1>Music</h1>
        </center>
        {items}
      </Container>
  );
};

export default ListItems;
