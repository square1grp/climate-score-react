import React from 'react'
import './style.scss'
import { Container, Row, Col, Carousel, Image, InputGroup, FormControl } from 'react-bootstrap'

import heroOneImgSrc from '../../assets/images/Hero-1.png'
import heroTwoImgSrc from '../../assets/images/Hero-2.png'
import heroThrImgSrc from '../../assets/images/Hero-3.png'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'

class HomePage extends React.Component {
  render() {
    return (
      <section className='hero-container' fluid>
        <Carousel controls={false} indicators={false} interval={2500}>
          {[heroOneImgSrc, heroTwoImgSrc, heroThrImgSrc].map((imgSrc) => {
            return (
              <Carousel.Item>
                <Image src={imgSrc} />
              </Carousel.Item>
            )
          })}
        </Carousel>

        <div className='hero-content d-flex'>
          <Row className='mx-0 w-100'>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <h1 className='text-center mb-5'>How will climate change<br />affect your home?</h1>
              <p className="text-center mb-3">Get your <b>FREE</b> Climate score</p>

              <Row className="input-address-container">
                <Col lg={{ span: 8, offset: 2 }}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="input-address">
                        <Image src={eyeDropImgSrc} height="20" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Enter an address, neighborhood, city or ZIP code"
                      aria-describedby="input-address"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}

export default HomePage