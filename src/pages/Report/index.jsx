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

  getBackgroundColor = (avgScore) => {
    if (!avgScore)
      return ['#FFFFF', '#FFFFFF']

    if (avgScore <= 8)
      return ['rgba(111, 207, 151, 1.0)', 'rgba(111, 207, 151, 0.2)']

    if (avgScore <= 21)
      return ['rgba(46, 244, 174, 1.0)', 'rgba(46, 244, 174, 0.2)']

    if (avgScore <= 42)
      return ['rgba(206, 252, 109, 1.0)', 'rgba(206, 252, 109, 0.2)']

    if (avgScore <= 61)
      return ['rgba(255, 239, 97, 1.0)', 'rgba(255, 239, 97, 0.2)']

    if (avgScore <= 72)
      return ['rgba(255, 216, 78, 1.0)', 'rgba(255, 216, 78, 0.2)']

    if (avgScore <= 92)
      return ['rgba(255, 121, 24, 1.0)', 'rgba(255, 121, 24, 0.2)']

    return ['rgba(255, 47, 47, 1.0)', 'rgba(255, 47, 47, 0.2)']
  }

  getDoughnutChartData(score) {
    return {
      datasets: [{
        data: [score, 100 - score],
        backgroundColor: this.getBackgroundColor(score),
        hoverBackgroundColor: this.getBackgroundColor(score)
      }]
    };
  }


  render() {
    let { score } = this.props

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

                  <Col className="avg-score mb-3" xs={12} lg={4}>
                    <h2 className="text-center mb-5">Moderate risk</h2>

                    <div className="donut-chart">
                      <Doughnut data={this.getDoughnutChartData(score.avgScore)} options={{ events: {}, tooltips: { enabled: false } }} />

                      <p className="m-0 score"><span className="m-auto"><b>{score.avgScore}</b> / 100</span></p>
                    </div>
                  </Col>

                  <Col xs={12} lg={8}>
                    <Row>
                      <Col className="mb-3" xs={12} lg={4}>
                        <div className="single-score border rounded px-3 py-4">
                          <h5 className="text-center text-uppercase">Drought</h5>
                          <h6 className="text-center">High risk</h6>

                          <div className="donut-chart mb-4">
                            <Doughnut data={this.getDoughnutChartData(score.droughtScore)} options={{ events: {}, tooltips: { enabled: false } }} />

                            <p className="m-0 score"><span className="m-auto"><b>{score.droughtScore}</b></span></p>
                          </div>

                          <p className="summary text-center">
                            <small>
                              You have a <b>44% higher</b> drought risk than average in <b>California</b>
                              <br />
                            Your risk level is forecasted to <b>increase by 52%</b>
                            </small>
                          </p>
                        </div>
                      </Col>

                      <Col className="mb-3" xs={12} lg={4}>
                        <div className="single-score border rounded px-3 py-4">
                          <h5 className="text-center text-uppercase">Temperature</h5>
                          <h6 className="text-center">Extreme risk</h6>

                          <div className="donut-chart mb-4">
                            <Doughnut data={this.getDoughnutChartData(score.temperatureScore)} options={{ events: {}, tooltips: { enabled: false } }} />

                            <p className="m-0 score"><span className="m-auto"><b>{score.temperatureScore}</b></span></p>
                          </div>

                          <p className="summary text-center">
                            <small>
                              Any day that is <b>82° F or more</b> is considered hot for your home.<br />
                              Historically, you’ve had <b>4 hot days per year.</b> Your 30 year forecast is <b>7 hot days per year.</b>
                            </small>
                          </p>
                        </div>
                      </Col>

                      <Col className="mb-3" xs={12} lg={4}>
                        <div className="single-score border rounded px-3 py-4">
                          <h5 className="text-center text-uppercase">Fire</h5>
                          <h6 className="text-center">Very low risk</h6>

                          <div className="donut-chart mb-4">
                            <Doughnut data={this.getDoughnutChartData(score.fireScore)} options={{ events: {}, tooltips: { enabled: false } }} />

                            <p className="m-0 score"><span className="m-auto"><b>{score.fireScore}</b></span></p>
                          </div>

                          <p className="summary text-center">
                            <small>
                              You have <b>82% lower</b> fire risk than the average in <b>California</b>.
                            </small>
                          </p>
                        </div>
                      </Col>

                      <Col className="mb-3" xs={12} lg={4}>
                        <div className="single-score border rounded px-3 py-4">
                          <h5 className="text-center text-uppercase">Flood</h5>
                          <h6 className="text-center">Low risk</h6>

                          <div className="donut-chart mb-4">
                            <Doughnut data={this.getDoughnutChartData(score.floodScore)} options={{ events: {}, tooltips: { enabled: false } }} />

                            <p className="m-0 score"><span className="m-auto"><b>{score.floodScore}</b></span></p>
                          </div>

                          <p className="summary text-center">
                            <small>
                              Your property <b>is not affected</b> by coastal flooding.
                              </small>
                          </p>
                        </div>
                      </Col>

                      <Col className="mb-3" xs={12} lg={4}>
                        <div className="single-score border rounded px-3 py-4">
                          <h5 className="text-center text-uppercase">Rain</h5>
                          <h6 className="text-center">Very high risk</h6>

                          <div className="donut-chart mb-4">
                            <Doughnut data={this.getDoughnutChartData(score.rainScore)} options={{ events: {}, tooltips: { enabled: false } }} />

                            <p className="m-0 score"><span className="m-auto"><b>{score.rainScore}</b></span></p>
                          </div>

                          <p className="summary text-center">
                            <small>
                              When you get <b>1.2”</b> in two days, it is considered extreme rain for your home.<br/>
                              Historically, you’ve had <b>10 extreme rain events</b> per year. Your forecast is <b>2 more extreme rain events</b> per year every year.
                            </small>
                          </p>
                        </div>
                      </Col>

                      <Col className="mb-3 d-flex flex-column" xs={12} lg={4}>
                        <h4 className="mt-auto">Science made actionable</h4>
                        <p>Climate Score taps trusted climate data from preeminent universities and government agencies. It is being developed by leading climate scientists.</p>
                      </Col>
                    </Row>
                  </Col>

                </Row>
              </Col>

              <Col xs={12}>
                <p className="text-center text-uppercase full-report my-5">
                  <NavLink to="/unlock">Get Your Full Report</NavLink>
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