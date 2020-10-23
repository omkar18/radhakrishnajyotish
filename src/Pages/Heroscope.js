import React, { Component } from "react"
const c1 = require("../assets/img/clients/c1.png")
const c2 = require("../assets/img/clients/c2.png")
const c3 = require("../assets/img/clients/c3.png")
const c4 = require("../assets/img/clients/c4.png")
const c5 = require("../assets/img/clients/c5.png")
const c6 = require("../assets/img/clients/c6.png")
const c7 = require("../assets/img/clients/c7.png")
const c8 = require("../assets/img/clients/c8.png")
const c9 = require("../assets/img/clients/c9.png")
const c10 = require("../assets/img/clients/c10.png")
const c11 = require("../assets/img/clients/c11.png")
const c12 = require("../assets/img/clients/c12.png")

export class Heroscope extends Component {
  render() {
    return (
      <div>
        <section id="clients" class="clients">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <img src={c1} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="200">
                <img src={c2} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="300">
                <img src={c3} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="400">
                <img src={c4} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="500">
                <img src={c5} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="600">
                <img src={c6} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="600">
                <img src={c7} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="600">
                <img src={c8} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <img src={c9} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <img src={c10} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <img src={c11} class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <img src={c12} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Heroscope
