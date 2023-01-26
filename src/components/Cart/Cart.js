import { useContext } from "react";
import {
  Button,
  Card,
  Image,
  Table,
  CloseButton,
} from "react-bootstrap";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext)
  const cartItems = ctx.items.map((item) => {
    return (
      <tr>
        <td>
          <tr>
            <td>
              <Image
                src={item.imageUrl}
                style={{ marginRight: "15px" }}
                width="50px"
              ></Image>
            </td>
            <td>
              <span>{item.title}</span>
            </td>
          </tr>
        </td>
        <td>{item.price}</td>
        <td>
          <tr>
            <td>{item.quantity}</td>
            <td>
              <Button>Remove</Button>{" "}
            </td>
          </tr>
        </td>
      </tr>
    );
  });
  return (
    <Card>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Cart{" "}
        <span>
          <CloseButton onClick={props.onClose} />
        </span>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </Table>
    </Card>
  );
};

export default Cart;
