import {Form ,Button}from 'react-bootstrap';
const Contactform = () => {
    
  const submitform = (e) => {
    const name = document.getElementById("textname").value;
    const gender = document.getElementById("selectgender").value;
    const message = document.getElementById("messagedata").value;
    e.preventDefault();
    if (name && gender && message) {
      document.getElementById("hellodata").innerHTML =
        "thank you for submmiting";

      setTimeout(() => {
        document.getElementById("hellodata").innerHTML = "";
      }, 3000);
    }
  };

  const resetdata = () => {
    document.getElementById("contactform").reset();
  };

  return (
    <div className="container1">
      <Form
        id="contactform"
        onSubmit={(e) => {
          submitform(e);
        }}
      >
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" id='textname' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender:</Form.Label>
        <Form.Select aria-label="Default select example" id='selectgender'>
        <option value="">Select Option</option>
          <option value="Male">Male</option>
          <option value="female">femaile</option>
    </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" placeholder="Leave a comment here"  id='messagedata'/>
        </Form.Group>
        <div className='col-sec-2 '>
        <Button variant="primary" type="submit">submitt</Button>
        <Button variant="danger" onClick={(e) => resetdata(e) }>reset</Button>
        </div>
      </Form>
      <div id="hellodata"></div>
    </div>
  );
};

export default Contactform;
