import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Footer() {
  return (
    <footer className="bg-white">

      <Container>
        <Row>
          <Col md={6} className="footer-social-media pt-4 pt-md-3">
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <div>
                <i class="fab fa-vimeo-v fs-1"></i>
              </div>
              <div>
                <i class="fab fa-youtube fs-1"></i>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-between">
            <p className="ms-md-n5">hello@yay.com</p>
            <p >Copyright 2020</p>
          </Col>
        </Row>
      </Container>

    </footer >
  )
}

export default Footer
