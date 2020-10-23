import React, { Component } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const award1 = require("../assets/img/awards/award1.jpg")
const award2 = require("../assets/img/awards/award2.jpg")
const award4 = require("../assets/img/awards/award4.jpg")
const award5 = require("../assets/img/awards/award5.jpg")
const award6 = require("../assets/img/awards/award6.jpg")
const award8 = require("../assets/img/awards/award8.jpg")
const award9 = require("../assets/img/awards/award9.jpeg")

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 1,
  },
}

const images = [
  {
    award: award1,
    text: "Welcome Event This Event is only for event and event",
  },
  {
    award: award2,
    text: "Second",
  },
  {
    award: award4,
    text: "Third",
  },
  {
    award: award5,
    text: "Forth",
  },
  {
    award: award6,
    text: "Fifth",
  },
  {
    award: award8,
    text: "Sixth",
  },
  {
    award: award9,
    text: "Seven",
  },
]

class sliderImg extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <Carousel
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          arrows={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={this.props.deviceType}
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}>
          {images.map((image) => {
            return (
              <div class="container-text">
                <img style={{ width: "100%", height: "100%" }} src={image.award} />
                {/* <div class="centered">{image.text}</div> */}
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default sliderImg
