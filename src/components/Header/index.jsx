import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.scss'
import logoImgSrc from '../../assets/images/logo-white.png'

class Header extends React.Component {
  render() {
    return (
      <Container fluid className='header-container'>
        <Row>
          <Col className="p-5 px-lg-5 py-lg-4 text-center text-lg-left">
            <Image src={logoImgSrc} height='80' />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Header