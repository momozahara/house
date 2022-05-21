import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import './style.css';

export default () => {
  return (
    <div>
      <div className="text-center" style={{ marginTop: "2rem" }}>
        <h1>Apartment</h1>
      </div>
      <Row className="justify-content-center">
        <Card>
          <Row className="no-gutters">
            <Col md="4">
              <Card.Img src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title><h3>Apartment #1</h3></Card.Title>
                <Card.Text>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus ut metus id ornare. Fusce vitae feugiat nisl, sed tincidunt urna. Quisque efficitur nisl ipsum, id egestas ante pulvinar non. Aenean tincidunt et erat vel dapibus. Pellentesque malesuada dictum sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last update date.</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className="no-gutters">
            <Col md="4">
              <Card.Img src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title><h3>Apartment #2</h3></Card.Title>
                <Card.Text>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus ut metus id ornare. Fusce vitae feugiat nisl, sed tincidunt urna. Quisque efficitur nisl ipsum, id egestas ante pulvinar non. Aenean tincidunt et erat vel dapibus. Pellentesque malesuada dictum sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last update date.</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row className="no-gutters">
            <Col md="4">
              <Card.Img src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title><h3>Apartment #3</h3></Card.Title>
                <Card.Text>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus ut metus id ornare. Fusce vitae feugiat nisl, sed tincidunt urna. Quisque efficitur nisl ipsum, id egestas ante pulvinar non. Aenean tincidunt et erat vel dapibus. Pellentesque malesuada dictum sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last update date.</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  )
}