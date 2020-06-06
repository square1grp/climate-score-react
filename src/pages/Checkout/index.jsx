import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { Container, Row, Col, Image, } from 'react-bootstrap'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import checkImgSrc from '../../assets/images/check.png'
import CheckoutForm from "./CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe("pk_test_51GqMLtJRjq8u23eq6jc6vFvTWouABOklPhGq5dFOm0nw2VoWKyrm3JUFqM8IzuQUqHFatdCEbKR0QJiSlYFlMvGc00NyxnAfyr");

class CheckoutPage extends React.Component {
  render() {
    return (
      <div className="checkout-page">
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
                    <h5 className="text-center">Complete due diligence for a one-time-cost of $499.</h5><br />
                    <hr className="m-0" /><br />
                    <h6 className="text-center text-uppercase">property address </h6>
                    <div className="text-center address d-flex flex-column">
                      <span className="px-5 py-3 m-auto rounded">
                        <Image src={eyeDropImgSrc} height="20" />
                        3270 21st Street San Francisco, CA</span>
                    </div><br />
                    <hr className="m-0" /><br />
                    <h5 className="text-center">Next, enter your payment details. All fields are required.</h5><br /><br />

                    <Col xs={12} lg={{ span: 6, offset: 3 }}>
                      <Row>
                        <Elements stripe={promise}>
                          <CheckoutForm />
                        </Elements>
                      </Row>
                    </Col>
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


// integrate redux-state to props
const mapStateToProps = (state) => ({
})

// integrate redux-actions to props
const mapDispatchToProps = {
}

// create visualization component integrated with redux-saga
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage)