import React from 'react'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card"

function MobileAccordion() {
  return (
    <>
      <Container className="d-md-none">
        <Accordion defaultActiveKey="0">
          <Card className="accordion-card-one">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              First
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Container>
                  <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
                  <img className="tab-image lg=1" src="images/tab-images/tab-1.jpg" alt="old tv" />
                  <p className="tab-social-media text-center text-md-start">SHARE <i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></p>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Second
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Container>
                  <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
                  <img className="tab-image" src="images/tab-images/tab-2.jpg" alt="red wall with many picutres" />
                  <p className="tab-social-media text-center text-md-start">SHARE <i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></p>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="accordion-card-three">
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Third
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
                <img className="tab-image" src="images/tab-images/tab-3.jpg" alt="window with a crack" />
                <p className="tab-social-media text-center text-md-start">SHARE <i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  )
}

export default MobileAccordion
