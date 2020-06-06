import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { Container, Row, Col, Image, } from 'react-bootstrap'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import checkImgSrc from '../../assets/images/check.png'

export default class OrderCompletePage extends React.Component {
  render() {
    return (
      <div className="order-complete-page">
        <section>
          <Container fluid>
            <Row className="c-breadcrumb align-items-center">
              <Col className="my-auto" xs={12} lg={{ span: 10, offset: 2 }}><span>Property Address ></span> Billing Information > Your Order</Col>
            </Row>

            <br />

            <Row>
              <Col className="py-5" xs={12} lg={{ span: 7, offset: 2 }}>
                <h1 className="text-center">Order confirmed!</h1>
                <br />
                <h3 className="text-center">Your Premium Report now is being generated now.</h3>
                <br />
                <h5 className="text-center">We will email the PDF along with your receipt to <br />email@emailaddress.com in the next 24 hours.</h5>
              </Col>

              <Col className="py-lg-5 in-your-report" xs={12} lg={2} />
            </Row>

            <Row>
              <Col xs={12} lg={{ span: 7, offset: 2 }}>
                <div className="order-details p-5 m-auto">
                  <h5 className="text-center text-uppercase">Property Address</h5><br />
                  <h6 className="d-flex align-items-center"><Image className="mr-2 ml-auto" src={checkImgSrc} /><span className="mr-auto">3270 21st Street San Francisco, CA</span></h6>
                  <hr />
                  <h5 className="text-center text-uppercase">Order number</h5><br />
                  <h6 className="text-center">#422562</h6><br />
                  <h5 className="text-center text-uppercase">Billing info</h5><br />
                  <h6 className="text-center">$499 billed to card ending in **93</h6>
                </div>
              </Col>

              <Col className="py-lg-5 in-your-report" xs={12} lg={2}>
                <h5 className="text-uppercase">have feedback?</h5><br />
                <p>We want to hear from you. You can always get in touch with us at <a href="javascript:void(0)">info@climatescore.com.</a></p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}