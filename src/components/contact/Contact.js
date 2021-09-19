import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

function Contact() {
  return (
    <main>
      <Container>
        <Row>
          <Col md="auto" md={{ order: 'last' }}>
            <Container>
              <ContactInfo />
            </Container>
          </Col>
          <Col md="auto" md={{ order: 'first' }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Contact
