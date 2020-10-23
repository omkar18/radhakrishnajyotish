import React, { Component } from "react"

export class WhyUs extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us" class="why-us">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
                <div class="content">
                  <h3>Why Choose RadhaKrishna for your life change?</h3>
                  <p>RadhaKrishna Joytishya is one of the best reputed consultancy.
                    RadhaKrushna Joytishya will analysis problem from root, and provide
                    a effective solutions. We also analyse problems by using scientific
                    devices like <b>Universal Thermal Aura Scanner,Stone detector
                    ,Distance Calculator.
                    </b>
                  </p>
                  {/* <div class="text-center">
                    <a href="#" class="more-btn">
                      Learn More <i class="bx bx-chevron-right"></i>
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-lg-8 d-flex align-items-stretch">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-receipt"></i>
                        <h4>Perfect Analysis</h4>
                        <p>We have 15+ years of work experience,and handle lot of problems from root.</p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Effective Solutions</h4>
                        <p>Our effective solutions will give 100% results and customer satisfaction. </p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i style={{ fontSize: "30px" }} class="fa fa-users"></i>
                        <h4>Use Scientific Technologies</h4>
                        <p>We are solving problems by using scientific devices.like Universal Thermal Aura Scanner,Stone detector
                    ,Distance Calculator</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Why Us Section --> */}
      </div>
    )
  }
}

export default WhyUs
