import React from 'react'
import Container from "react-bootstrap/Container"
import Tabs from "react-bootstrap/Tabs"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Tab() {
  return (
    <Container className="d-none d-md-block">
      <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="first" title="First">
          <Row>
            <Col md={5} lg={4} xl={3}>
              <img className="tab-image lg=1" src="images/tab-images/tab-1.jpg" alt="old tv" />
            </Col>
            <Col md={7} lg={8} xl={9}>
              <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
              <p className="tab-social-media">SHARE <i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></p>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="second" title="Second">
          <Row>
            <Col md={5} lg={4} xl={3}>
              <img className="tab-image" src="images/tab-images/tab-2.jpg" alt="red wall with many picutres" />
            </Col>
            <Col md={7} lg={8} xl={9}>
              <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
              <p className="tab-social-media">SHARE <i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></p>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="third" title="Third">
          <Row>
            <Col md={5} lg={4} xl={3}>
              <img className="tab-image" src="images/tab-images/tab-3.jpg" alt="window with a crack" />
            </Col>
            <Col md={7} lg={8} xl={9}>
              <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
              <p className="tab-social-media">SHARE <i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></p>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container >
  )
}

export default Tab
