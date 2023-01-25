import { Button, Card, Container, Image, Table,CloseButton } from "react-bootstrap";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const cartItems = cartElements.map((item) => {
    return (
        <tr>
          <td>
          <Image src={item.imageUrl} width="50px" ></Image>
          <span style={{margin:"15px"}}>{item.title}</span>
          </td>
          <td>{item.price}</td>
          <td>{item.quantity} <Button>Remove</Button> </td>
        </tr>
    );
  });
  return (
    <Card>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Cart <span><CloseButton onClick={props.onClose} /></span></h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
          {cartItems}
          </tbody>
      </Table>
    </Card>
  );
};

export default Cart;
