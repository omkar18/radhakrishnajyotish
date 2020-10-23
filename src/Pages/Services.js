import React, { Component } from "react"

// Import images for services
const service1 = require("../assets/img/services/Forma-1.png")
const service2 = require("../assets/img/services/Forma-2.png")
const service3 = require("../assets/img/services/Forma-3.png")
const service4 = require("../assets/img/services/Forma-4.png")
const service5 = require("../assets/img/services/Forma-5.png")
const service6 = require("../assets/img/services/Forma-6.png")
const service7 = require("../assets/img/services/Forma-7.png")
const service8 = require("../assets/img/services/Forma-8.png")

export class Services extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" class="services section-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="section-title" data-aos="fade-right">
                  <h2>Services</h2>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-md-6 d-flex align-items-stretch">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service1} />
                      </div>
                      <h4>
                        <a href="">Vastu</a>
                      </h4>
                      <p>
                        We are Expert in Bhumi parikshan,
                        Sheelanyas,
                        Dwarnirman,
                         Vastu Parikshan,
                         complete vastu puja etc.
                         </p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service2} />
                      </div>
                      <h4>
                        <a href="">Astrology</a>
                      </h4>
                      <p>
                        We are expert in Bhavishya kathan by Ashtakvarg,
                        Krusnmurti, Lal Kitab,vedic Astrology & Ramal Shastra
                        technologies.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service3} />
                      </div>
                      <h4>
                        <a href="">Career</a>
                      </h4>
                      <p>We are expert to solve career growth problems, consulting to choose right career paths.</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service4} />
                      </div>
                      <h4>
                        <a href="">Love & Relationship</a>
                      </h4>
                      <p>We are expert to solve marriage related problems,divorce problems</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service5} />
                      </div>
                      <h4>
                        <a href="">Health</a>
                      </h4>
                      <p>
                        We are expert to solve health problems by using scientific devices.
                        We are able to calulate positive energies.
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service6} />
                      </div>
                      <h4>
                        <a href="">Business</a>
                      </h4>
                      <p>We are expert to solve business growth problems,able to solve perfect business decisions.</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service7} />
                      </div>
                      <h4>
                        <a href="">Wealth</a>
                      </h4>
                      <p>We expert to solve Wealth as well as personal and social life problems.</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon">
                        <img src={service8} />
                      </div>
                      <h4>
                        <a href="">Making Patrika</a>
                      </h4>
                      <p>Making computerized Patrika in different sizes like A4(Full Size),half (2 in 1) and Quarter,

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}
      </div>
    )
  }
}

export default Services
