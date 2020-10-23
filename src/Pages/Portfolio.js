import React, { Component } from "react"
import Carousel from "react-multi-carousel"

const profile1 = require("../assets/img/about/my_profile.png")
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
export class Portfolio extends Component {
  render() {
    return (
      <div>
        <section id="portfolio" class="portfolio">
          <div class="container">
            <div class="section-title" data-aos="fade-left">
              <h2>Media</h2>
            </div>

            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable>
              <div className="media-video card text-left">
                <iframe allowfullscreen="allowfullscreen" width="100%" height="315" src="https://www.youtube.com/embed/P7nyL1HRkcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <div className="card-body">
                  {/* <h5 className="card-title">Hellow</h5>
                  <p className="card-text">Welcome to the event to the event to the event</p> */}
                </div>
              </div>

              <div className="card text-left">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Tm2NZEo5ncU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>{" "}
                <div className="card-body">
                  {/* <h5 className="card-title">Hellow</h5>
                  <p className="card-text">Welcome to the event to the event to the event</p> */}
                </div>
              </div>

              {/* <div className="card text-left">
                <iframe allowfullscreen="allowfullscreen" width="100%" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>{" "}
                <div className="card-body">
                  <h5 className="card-title">Hellow</h5>
                  <p className="card-text">Welcome to the event to the event to the event</p>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div> */}
            </Carousel>
          </div>
        </section>
      </div>
    )
  }
}

export default Portfolio
