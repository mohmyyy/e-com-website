import Cards from "./Cards";
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import AboutPage from "../AboutPage/AboutPage";

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

  const ctx = useContext(CartContext);

  const items = (
    <Row>
      {productsArr.map((itm) => {
        return (
          <Col key={itm.price + itm.title} xs={6}>
            <Cards item={itm} />
          </Col>
        );
      })}
    </Row>
  );
  return (
    <Container className="mt-3">
      <center>
        <h1>Music</h1>
      </center>
      {items}
    </Container>
  );
};

export default ListItems;