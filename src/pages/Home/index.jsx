import React from 'react'
import './style.scss'
import { Container, Row, Col, Carousel, Image, InputGroup, FormControl, Button } from 'react-bootstrap'

import heroOneImgSrc from '../../assets/images/Hero-1.png'
import heroTwoImgSrc from '../../assets/images/Hero-2.png'
import heroThrImgSrc from '../../assets/images/Hero-3.png'
import eyeDropImgSrc from '../../assets/images/eye-drop.png'
import scoreBaseImgSrc from '../../assets/images/score-base.png'
import headshot1ImgSrc from '../../assets/images/Headshot1.png'
import headshot2ImgSrc from '../../assets/images/Headshot2.png'
import headshot3ImgSrc from '../../assets/images/Headshot3.png'
import headshot4ImgSrc from '../../assets/images/Headshot4.png'
import headshot5ImgSrc from '../../assets/images/Headshot5.png'
import headshot6ImgSrc from '../../assets/images/Headshot6.png'

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';


class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputAddr: '',
      inputAddrPlaceholder: 'Enter an address, neighborhood, city or ZIP code'
    }
  }

  updateDimensions = () => {
    if (window.innerWidth >= 768) {
      this.setState({
        inputAddrPlaceholder: 'Enter an address, neighborhood, city or ZIP code'
      })
    } else {
      this.setState({
        inputAddrPlaceholder: 'Enter an address or ZIP code'
      })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)

    this.updateDimensions()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  handleChange = address => {
    this.setState({ inputAddr: address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => console.log(results))
      .catch(error => console.error('Error', error));
  };

  render() {
    const { inputAddr, inputAddrPlaceholder } = this.state

    return (
      <>
        <section className="hero">
          <Container fluid>
            <Row>
              <Col xs={12} className="p-0">
                <Carousel controls={false} indicators={false} interval={2500}>
                  {[heroOneImgSrc, heroTwoImgSrc, heroThrImgSrc].map((imgSrc, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <Image src={imgSrc} />
                      </Carousel.Item>
                    )
                  })}
                </Carousel>

                <Row className="hero-content mx-0 w-100">
                  <Col xs={12} lg={{ span: 6, offset: 3 }}>
                    <h1 className="text-center mb-5">How will climate change <br className="d-none d-lg-block" />affect your home?</h1>
                    <p className="text-center mb-3 text-uppercase">Get your <b>FREE</b> Climate score</p>

                    <Row className="input-address-container">
                      <Col lg={{ span: 8, offset: 2 }}>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="input-address">
                              <Image src={eyeDropImgSrc} height="20" />
                            </InputGroup.Text>
                          </InputGroup.Prepend>

                          <PlacesAutocomplete
                            value={inputAddr}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                          >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                              <div className="w-100">
                                <FormControl
                                  {...getInputProps({
                                    className: 'location-search-input',
                                  })}
                                  placeholder={inputAddrPlaceholder}
                                  aria-describedby="input-address"
                                />
                                <div className="autocomplete-dropdown-container">
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="our-mission">
          <Container>
            <Row>
              <Col xs={12}>
                <h5 className="text-center text-uppercase mb-3 mb-lg-5">Our Mission</h5>

                <h1 className="text-center">Actionable climate change insight for your property.</h1>
              </Col>

              <Col md={5}>
                <h5 className="text-center">Peace of mind for buyers and owners</h5>
                <p className="text-center">Climate Score helps home buyers make informed decisions by delivering scientific predictions on climate change risks to individual properties.</p>
              </Col>

              <Col md={2} />

              <Col md={5}>
                <h5 className="text-center">Competitive edge for investors</h5>
                <p className="text-center">Climate Score helps investors understand and prepare for climate change related risks. We provide a practical analysis of your existing portfolio and critical information during due diligence.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="climate-score px-4 px-lg-0">
          <Container>
            <Row>
              <Col xs={12}>
                <h5 className="text-center text-uppercase mb-3 mb-lg-5">WHAT IS CLIMATE SCORE?</h5>

                <h1 className="text-center">Climate change info for investors and property owners.</h1>
              </Col>
            </Row>

            <Row>
              <Col className="pt-lg-5" xs={12} lg={4}>
                <div className="w-100 property">
                  <h5 className="text-center">Your risk for the next 30 years</h5>
                  <p className="text-center">Climate Score is the first definitive, easy-to-use property rating service based on expected changes to the world’s climate.</p>
                </div>

                <div className="w-100 property">
                  <h5 className="text-center">Your individual factors asessed</h5>
                  <p className="text-center">Climate Score also gives you granular data on future risk of Fire, Flood, Temperature, Drought and Storm.</p>
                </div>
              </Col>

              <Col className="scorebase-column p-5 " xs={12} lg={4}>
                <h6 className="text-center text-uppercase">Your score</h6>

                <div className="score-base d-flex flex-column" style={{ backgroundImage: `url(${scoreBaseImgSrc})` }}>
                  <h2 className="text-center mb-5">Moderate risk</h2>
                  <p className="score text-center m-auto"><b>42</b> / 100</p>
                </div>
              </Col>

              <Col className="pt-lg-5" xs={12} lg={4}>
                <div className="w-100 property">
                  <h5 className="text-center">A simple scoring system</h5>
                  <p className="text-center">Climate Score aggregates the climate hazards of flood, fire, temperature, drought, and storm into a single score for your property.</p>
                </div>

                <div className="w-100 property">
                  <h5 className="text-center">Science made actionable</h5>
                  <p className="text-center">Climate Score taps trusted climate data from preeminent universities and government agencies and was developed by leading climate scientists.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="about-us">
          <Container>
            <Row>
              <Col xs={12}>
                <h5 className="text-center text-uppercase mb-3 mb-lg-5">About us</h5>

                <h2 className="text-center mb-5">Founded by science, real estate and technology veterans with a passion for transparency, conservation, and consumer advocacy.</h2>
              </Col>

              {
                [
                  headshot1ImgSrc,
                  headshot2ImgSrc,
                  headshot3ImgSrc,
                  headshot4ImgSrc,
                  headshot5ImgSrc,
                  headshot6ImgSrc,
                ].map((headshotImgSrc, index) => {
                  return (
                    <Col key={index} className="text-center p-lg-5 mb-3" xs={6} lg={4}>
                      <Image className="mb-3" src={headshotImgSrc} />
                      <h5 className="mb-3" className="text-center">Sam Eckhouse</h5>
                      <h6 className="text-center">Lorem Ipsum</h6>
                      <h6 className="text-center"><a href="#">LinkedIn</a></h6>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        </section>

        <section className="news-letter">
          <Container>
            <Row>
              <Col xs={12}>
                <h5 className="text-center text-uppercase mb-3 mb-lg-5">Stay in touch</h5>

                <h2 className="text-center mb-5">Get the latest with our newsletter</h2>
              </Col>

              <Col className="mb-5" xs={12} lg={{ span: 4, offset: 4 }}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter your email address..."
                    aria-label="Enter your email address..."
                  />
                  <InputGroup.Append>
                    <Button>Go</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>

              <Col xs={12}>
                <h6 className="text-center">Have a question or feedback for us?</h6>
                <p className="text-center">Send us a note at <b>info@climatescore.com</b> and we will <br />get back to you as soon as possible.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default HomePage