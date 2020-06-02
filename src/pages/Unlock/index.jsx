import React from 'react'

import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.scss'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import checkImgSrc from '../../assets/images/check.png'

class UnlockPage extends React.Component {
  render() {
    return (
      <div className="unlock-page">
        <section>
          <Container fluid>
            <Row className="c-breadcrumb align-items-center">
              <Col className="my-auto" xs={12} lg={{ span: 10, offset: 2 }}><span>Property Address ></span> Billing Information > Your Order</Col>
            </Row>

            <Row>
              <Col xs={12} lg={{ span: 7, offset: 2 }}>
                <Row>
                  <Col className="py-5" xs={12}>
                    <h1 className="text-center">Unlock your Premium Report</h1><br />
                    <h4 className="text-center">Complete due diligence for a one-time-cost of $499.</h4><br />
                    <hr /><br />
                    <h4 className="text-center">First, confirm the address of the property you want to get the report for.</h4><br /><br /><br />
                    <h6 className="text-center text-uppercase">property address </h6><br />
                    <div className="text-center address d-flex flex-column">
                      <span className="p-3 pl-5 m-auto rounded">
                        <Image src={eyeDropImgSrc} height="20" />
                        3270 21st Street San Francisco, CA</span>
                    </div>
                  </Col>

                  <Col xs={12} className="text-center">
                    <div className="d-flex text-center confirm-to-checkout">
                      <NavLink to="/checkout" className="text-center to-checkout rounded p-3 m-auto">Confirm to Continue</NavLink>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col className="py-lg-5 in-your-report" xs={12} lg={2}>
                <br /><br /><br />
                <h5 className="text-uppercase pl-4">in your report</h5><br />
                <p className="pl-4">
                  <Image src={checkImgSrc} height="20" />Environmental risk assessment over the life of your investment</p><br />
                <p className="pl-4">
                  <Image src={checkImgSrc} height="20" />Clarity on your exposure to the next catastrophic event</p><br />
                <p className="pl-4">
                  <Image src={checkImgSrc} height="20" />Market vulnerability analysis to prepare for the next black swan</p><br />
                <p className="pl-4"><a href="/">See a sample report</a></p><br />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default UnlockPage