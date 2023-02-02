import { useState } from "react";
import { Button, Form } from "react-bootstrap";
//  Name,email Id, phone number
import "./ContactUs.css";
const ContactUs = () => {
  const [contact,setContact] = useState({
    name:'',
    email:'',
    phNum:''
  });
  const nameChangeHandler = (event) => {
    setContact({...contact,name:event.target.value})
  }
  const emailChangeHandler = (event) => {
    setContact({...contact,email:event.target.value})
  }
  const phNumChangeHandler = (event) => {
    setContact({...contact,phNum:event.target.value})
  }
  
  const buttonControlHandler =async (event)=> {
    event.preventDefault()
    const response = await fetch("https://be-gin-2f479-default-rtdb.firebaseio.com/ecom.json",{
      method: 'POST',
      body:JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    
    
  }
  return (
    <Form onSubmit={buttonControlHandler} >
        <Form.Group>
          <Form.Label htmlFor="nameInput">Name</Form.Label>
          <Form.Control onChange={nameChangeHandler} type="text" id="nameInput" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="emailInput">Email</Form.Label>
          <Form.Control onChange={emailChangeHandler} type="email" id="emailInput" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="detailsInput">Phone No.</Form.Label>
          <Form.Control onChange={phNumChangeHandler} type="numbers" id="detailsInput" placeholder="Contact Details" />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
  );
};
export default ContactUs;
