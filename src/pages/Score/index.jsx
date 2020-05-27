import React from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2';


import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import arrowDownImgSrc from '../../assets/images/arrow-down.png'
import './style.scss'

class ScorePage extends React.Component {
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

  render() {
    let { score } = this.props
    if (!score || !score.avgScore) score.avgScore = 0
    // const avgScore = 42

    const data = {
      datasets: [{
        data: [score.avgScore, 100 - score.avgScore],
        backgroundColor: this.getBackgroundColor(score.avgScore),
        hoverBackgroundColor: this.getBackgroundColor(score.avgScore)
      }]
    };

    return (
      <section>
        <Container>
          <Row>
            <Col className="pt-lg-5" xs={12}>
              <h1 className="text-center">How will climate change affect your home?</h1>
            </Col>

            <Col className="address justify-content-center d-flex align-items-center mb-5" xs={12}>
              <Image className="mr-3" src={eyeDropImgSrc} height="20" />
                3270 21st Street San Francisco, CA
            </Col>

            <Col lg={{ span: 6, offset: 3 }}>
              <div className="score-panel py-4 mb-5">
                <h5 className="text-uppercase text-center">Your Score</h5>
                <br />
                <h2 className="text-center mb-5">Moderate risk</h2>

                <div className="donut-chart">
                  <Doughnut data={data} options={{ events: {}, tooltips: { enabled: false } }} />

                  <p className="m-0 score"><span className="m-auto"><b>{score.avgScore}</b> / 100</span></p>
                </div>

                <div className="p-3" />
              </div>
            </Col>

            <Col xs={12}>
              <p className="text-center text-uppercase">
                Find out why
                <br />
                <Image src={arrowDownImgSrc} />
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

// integrate redux-state to props
const mapStateToProps = (state) => ({
  ...state.score
})

// integrate redux-actions to props
const mapDispatchToProps = {}

// create visualization component integrated with redux-saga
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScorePage)