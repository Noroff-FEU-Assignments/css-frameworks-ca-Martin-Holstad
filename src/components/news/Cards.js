import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Cards() {
  return (
    <Container className="pt-3">
      <Row className="g-4">
        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-1.jpg" alt="old tv next to a turned on lamp" />
            <Card.Body>
              <Container >
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-2.jpg" alt="green old camera" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-3.jpg" alt="old tv" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-4.jpg" alt="old wooden camera" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-5.jpg" alt="rusty tv frame" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-6.jpg" alt="pink old camera" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-7.jpg" alt="old movies camera" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xl={3}>
          <Card className="news-card">
            <Card.Img variant="top" src="images/news-images/news-8.jpg" alt="turntable" />
            <Card.Body>
              <Container>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <div className="d-grid">
                  <Button variant="primary" size="lg">
                    MORE
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}

export default Cards
