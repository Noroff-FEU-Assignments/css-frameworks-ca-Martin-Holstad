import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

function ContactForm() {
  return (
    <Container className="contact-form-section">
      <Container>
        <h1 className="fs-2 ms-md-n4 mt-5 mb-4">Submit your details</h1>
      </Container>
      <Form className="contact-form-container p-4">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control size="lg" type="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" />
        </Form.Group>

        <Form.Label htmlFor="basic-url">Website</Form.Label>
        <InputGroup size="lg" className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://
          </InputGroup.Text>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <Form.Group className="text-area mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
        </Form.Group>

        <div className="d-grid">
          <Button size="lg" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default ContactForm
