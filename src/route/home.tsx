import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './route.css';

export default () => {
  return (
    <Container>
      <div className="text-center">
        <h1>Latest <Link to="/product/house">House</Link></h1>
      </div>
      <CardGroup bsPrefix="card-deck">
        <Card className="product">
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-oMgIvKQd3t8/V2vXnEgy8zI/AAAAAAAA73k/e0EfqlNMyAY4pRGZipIM0rZBapAEQ3u4ACLcB/s800/building_house1.png" alt="" />
          <Card.Body>
            <h5 className="card-title">House #1</h5>
          </Card.Body>
        </Card>
        <Card className="product">
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-oMgIvKQd3t8/V2vXnEgy8zI/AAAAAAAA73k/e0EfqlNMyAY4pRGZipIM0rZBapAEQ3u4ACLcB/s800/building_house1.png" alt="" />
          <Card.Body>
            <h5 className="card-title">House #1</h5>
          </Card.Body>
        </Card>
        <Card className="product">
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-oMgIvKQd3t8/V2vXnEgy8zI/AAAAAAAA73k/e0EfqlNMyAY4pRGZipIM0rZBapAEQ3u4ACLcB/s800/building_house1.png" alt="" />
          <Card.Body>
            <h5 className="card-title">House #1</h5>
          </Card.Body>
        </Card>
      </CardGroup>
      <div className="text-center">
        <h1>Latest <Link to="/product/apartment">Apartment</Link></h1>
      </div>
      <CardGroup bsPrefix="card-deck">
        <Card className="product">
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
          <Card.Body>
            <h5 className="card-title">Apartment #1</h5>
          </Card.Body>
        </Card>
        <Card className="product">
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
          <Card.Body>
            <h5 className="card-title">Apartment #1</h5>
          </Card.Body>
        </Card>
        <Card className="product">
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
          <Card.Body>
            <h5 className="card-title">Apartment #1</h5>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  )
}