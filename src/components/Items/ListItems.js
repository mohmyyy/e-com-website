import Cards from "./Cards";
import { Col, Container } from "react-bootstrap";

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
  const items = (
    <div className="row">
      {productsArr.map((itm) => {
        return (
          <div className="col-md-5">
            <center>
              <Cards item={itm} />
            </center>
          </div>
        );
      })}
    </div>
  );
  return (
    <section>
      <Container>
        <center>
          <h1>Music</h1>
        </center>
        <div className=""> </div>
        {items}
      </Container>
    </section>
  );
};

export default ListItems;