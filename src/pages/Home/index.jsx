import React from 'react'
import './style.scss'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap'

import heroOneImgSrc from '../../assets/images/Hero-1.png'
import heroTwoImgSrc from '../../assets/images/Hero-2.png'
import heroThrImgSrc from '../../assets/images/Hero-3.png'

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
      </section>
    )
  }
}

export default HomePage