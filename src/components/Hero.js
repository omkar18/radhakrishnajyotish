import React, { Component } from "react"

export class Hero extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" class="d-flex align-items-center">
          <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
            <h1>Radha Krishna Jyotish |</h1>
            <h2>Perfect Analysis | Effective Solution</h2>
            <a href="#about" class="btn-get-started scrollto">
              Let's Connect            </a>
          </div>
        </section>
        {/* <!-- End Hero --> */}
      </div>
    )
  }
}

export default Hero
