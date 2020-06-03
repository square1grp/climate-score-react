import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import checkImgSrc from '../../assets/images/check.png'

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { validated: false }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true })
  }

  render() {
    const { validated } = this.state

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
                        <Form className="w-100" noValidate validated={validated} onSubmit={this.handleSubmit}>
                          <h6 className="text-center text-uppercase">Personal Details </h6><br />

                          <Form.Row>
                            <Form.Group as={Col} xs={12} lg={6}>
                              <Form.Control placeholder="First Name" required />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} lg={6}>
                              <Form.Control placeholder="Last Name" required />
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col}>
                              <Form.Control placeholder="Email Address" required />
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col}>
                              <p>We will send your Premium Report PDF and <br />receipt to this email address within 24 hours.</p>
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col} xs={12} lg={6}>
                              <Form.Control placeholder="Phone Number" required />
                            </Form.Group>
                          </Form.Row>

                          <br /><h6 className="text-center text-uppercase">Billing Address</h6><br />
                          <Form.Row>
                            <Form.Group as={Col}>
                              <Form.Control placeholder="Street Address" required />
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col}>
                              <Form.Control placeholder="City" required />
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col} xs={12} lg={6}>
                              <Form.Control placeholder="State" required />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} lg={6}>
                              <Form.Control placeholder="Zip" required />
                            </Form.Group>
                          </Form.Row>

                          <br /><h6 className="text-center text-uppercase">Credit Card</h6><br />

                          <Form.Row>
                            <Form.Group as={Col} xs={12} lg={9}>
                              <Form.Control placeholder="Credit Card" required />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} lg={3}>
                              <Form.Control placeholder="CVV" required />
                            </Form.Group>
                          </Form.Row>

                          <br /><br />

                          <Form.Row>
                            <Form.Group as={Col} className="text-center">
                              <Button className="to-checkout p-3" type="submit"><b>Fianlize & Pay</b></Button>
                            </Form.Group>
                          </Form.Row>
                        </Form>
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