import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './route.css';

export default () => {
  return (
    <Container>
      <div className="text-center">
        <h1>Latest <Link to="/product/house">House</Link></h1>
      </div>
      <div className="card-deck">
        <div className="card product">
          <img className="card-img-top" src="https://1.bp.blogspot.com/-oMgIvKQd3t8/V2vXnEgy8zI/AAAAAAAA73k/e0EfqlNMyAY4pRGZipIM0rZBapAEQ3u4ACLcB/s800/building_house1.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">House #1</h5>
          </div>
        </div>
        <div className="card product">
          <img className="card-img-top" src="https://1.bp.blogspot.com/-oMgIvKQd3t8/V2vXnEgy8zI/AAAAAAAA73k/e0EfqlNMyAY4pRGZipIM0rZBapAEQ3u4ACLcB/s800/building_house1.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">House #2</h5>
          </div>
        </div>
        <div className="card product">
          <img className="card-img-top" src="https://1.bp.blogspot.com/-oMgIvKQd3t8/V2vXnEgy8zI/AAAAAAAA73k/e0EfqlNMyAY4pRGZipIM0rZBapAEQ3u4ACLcB/s800/building_house1.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">House #3</h5>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1>Latest <Link to="/product/apartment">Apartment</Link></h1>
      </div>
      <div className="card-deck">
        <div className="card product">
          <img className="card-img-top" src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">Apartment #1</h5>
          </div>
        </div>
        <div className="card product">
          <img className="card-img-top" src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">Apartment #2</h5>
          </div>
        </div>
        <div className="card product">
          <img className="card-img-top" src="https://1.bp.blogspot.com/-ZYTAi17K-MM/WeAFbacNq7I/AAAAAAABHjM/lF64P7nexqQDujNis7wiU8In5amQUK_ewCLcBGAs/s800/building_apart2.png" alt="" />
          <div className="card-body">
            <h5 className="card-title">Apartment #3</h5>
          </div>
        </div>
      </div>
    </Container>
  )
}