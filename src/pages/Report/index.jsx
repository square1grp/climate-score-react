import React from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2';

import { NavLink } from 'react-router-dom'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import arrowDownImgSrc from '../../assets/images/arrow-down.png'

import './style.scss'

import scoreActions from '../../redux/actions/score'

class ReportPage extends React.Component {
  componentDidMount() {
    this.props.fetchScoreData('3650 Rosecrans Street. San Diego. CA 92110')
  }
  render() {
    const { score } = this.props
    return (
      <div className="report-page">
        <section>
          <Container fluid>
            <Row>
              <Col className="pt-lg-5" xs={12}>
                <h1 className="text-center">How will climate change affect your home?</h1>
              </Col>

              <Col className="address justify-content-center d-flex align-items-center mb-5" xs={12}>
                <Image className="mr-3" src={eyeDropImgSrc} height="20" />
                {score.address}
              </Col>

              <Col xs={12}>
                <Row className="m-auto score-panels p-4 rounded">
                  <Col xs={12}>
                    <h6 className="text-center text-uppercase">Your scorecard</h6>
                  </Col>

                  <Col xs={12} lg={5}>

                  </Col>

                </Row>
              </Col>

              <Col xs={12}>
                <p className="text-center text-uppercase full-report">
                  <NavLink to="/">Get Your Full Report</NavLink>
                  <br />
                  <Image src={arrowDownImgSrc} />
                </p>
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
  ...state.score
})

// integrate redux-actions to props
const mapDispatchToProps = {
  ...scoreActions
}

// create visualization component integrated with redux-saga
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportPage)