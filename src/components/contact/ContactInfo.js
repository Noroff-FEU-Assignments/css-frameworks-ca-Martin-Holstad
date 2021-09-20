import Container from "react-bootstrap/Container"

function ContactInfo() {
  return (
    <Container className="contact-info-container">
      <div className="d-flex gap-4">
        <p><i className="fas fa-envelope fs-2"></i></p>
        <p>hello@yay.com</p>
      </div>
      <div className="d-flex gap-4">
        <p><i className="fas fa-phone fs-2"></i></p>
        <p> 123 456 7890</p>
      </div>
      <div className="d-flex gap-4">
        <p><i className="fas fa-map-marker-alt fs-2 me-2"></i></p>
        <p> 123 Some Street Somewhere Some City 10000</p>
      </div>
    </Container>
  )
}

export default ContactInfo
