import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './style.scss'

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className='footer-container'>
        <Row>
          <Col className="text-center py-4 py-lg-5">
            Copyright © 2020 Climate Score
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer