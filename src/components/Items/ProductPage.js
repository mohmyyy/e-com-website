import { useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import classes from "./ProductPage.module.css"

const ProductPage = (props) => {
  const ctx = useContext(CartContext)
  console.log(ctx.productDetails)
  const params = useParams();
  console.log(params.productId)
  let Image1 = null
  let Image2 = null
  let Image3 = null
  const Image = {
    Image1:null,
    Image2:null,
    Image3:null
  }

  if(params.productId === 'p1'){
    Image3 = "https://media.istockphoto.com/id/1192236158/photo/explosion-of-colored-powder-on-black-background.webp?s=1024x1024&w=is&k=20&c=h7vSosF9lqaJ0Cl0NPNVBmV2ymMZSATGcfZv-SIMH7c="
    Image2 = 'https://media.istockphoto.com/id/1053667384/photo/abstract-colored-dust-explosion-on-a-black-background-abstract-powder-splatted-background.webp?s=1024x1024&w=is&k=20&c=wpZrg-kHkSDZKrZpu_iG9dsp5xMGdkojcfLqpwLGVWE='
    Image1 = 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
  } else if(params.productId === 'p2'){
    Image2 = "https://media.istockphoto.com/id/1192236158/photo/explosion-of-colored-powder-on-black-background.webp?s=1024x1024&w=is&k=20&c=h7vSosF9lqaJ0Cl0NPNVBmV2ymMZSATGcfZv-SIMH7c="
    Image3 = 'https://media.istockphoto.com/id/1053667384/photo/abstract-colored-dust-explosion-on-a-black-background-abstract-powder-splatted-background.webp?s=1024x1024&w=is&k=20&c=wpZrg-kHkSDZKrZpu_iG9dsp5xMGdkojcfLqpwLGVWE='
    Image1 = 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
  }
  else if(params.productId === 'p3'){
    Image2 = "https://media.istockphoto.com/id/1192236158/photo/explosion-of-colored-powder-on-black-background.webp?s=1024x1024&w=is&k=20&c=h7vSosF9lqaJ0Cl0NPNVBmV2ymMZSATGcfZv-SIMH7c="
    Image3 = 'https://media.istockphoto.com/id/1053667384/photo/abstract-colored-dust-explosion-on-a-black-background-abstract-powder-splatted-background.webp?s=1024x1024&w=is&k=20&c=wpZrg-kHkSDZKrZpu_iG9dsp5xMGdkojcfLqpwLGVWE='
    Image1 = 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
  }
  else if(params.productId === 'p4'){
    Image3 = "https://media.istockphoto.com/id/1192236158/photo/explosion-of-colored-powder-on-black-background.webp?s=1024x1024&w=is&k=20&c=h7vSosF9lqaJ0Cl0NPNVBmV2ymMZSATGcfZv-SIMH7c="
    Image2 = 'https://media.istockphoto.com/id/1053667384/photo/abstract-colored-dust-explosion-on-a-black-background-abstract-powder-splatted-background.webp?s=1024x1024&w=is&k=20&c=wpZrg-kHkSDZKrZpu_iG9dsp5xMGdkojcfLqpwLGVWE='
    Image1 = 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
  }
  const addToCard = (item) => {
    console.log(item)
    console.log(ctx)
    const quantity = +1;
    ctx.addToItems({ ...ctx.productDetails, quantity: quantity })

  }
  return (
    <Container className="container my-5">
      <Card className="mt-5 border-0">
        <Row className="row justify-content-center">
          <h1 className="m-5 text-lg-center text-md-start">
            {params.productId}
          </h1>
          <Col lg={6} sm={8} className="text-center"  >
            <Card.Img
              className="img-fluid"
              style={{ width: "400px" }}
              variant="top"
              src={Image1}
            />
            <Card.Img
              className="img-fluid"
              style={{ width: "400px" }}
              variant="top"
              src={Image2}
            />
            <Card.Img
              className="img-fluid"
              style={{ width: "400px" }}
              variant="top"
              src={Image3}
            />
          </Col>
          <Col lg={4} sm={8}>
            <Card.Text md="4" lg="6">
              <h2>{ctx.productDetails.title}</h2>
            </Card.Text>
            <Card.Text md="4" lg="6">
              <h4>{ctx.productDetails.price}</h4>
            </Card.Text>
            <Button type="click" onClick={()=>addToCard(ctx.productDetails)}>Add to Card</Button>
          </Col>
        </Row>
      </Card>
      <div className="bg-light m-5 p-5">
        <div className="text-center">
          <h2 className = "mb-5">Customer Review</h2>
        </div>
      <Row >
        <Col lg={4} sm={8}>
          <Card className="text-center border-0">
            <Card.Title className="mt-3"> Mohammed </Card.Title>
            <Card.Body> This is so far best product</Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={8}>
          <Card className="text-center border-0">
            <Card.Title className="mt-3"> Ahmed </Card.Title>
            <Card.Body> I'll rate this product a 5 Star</Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={8}>
          <Card className="text-center border-0">
            <Card.Title className="mt-3"> Abdul </Card.Title>
            <Card.Body> Great product </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
  );
};
export default ProductPage;
