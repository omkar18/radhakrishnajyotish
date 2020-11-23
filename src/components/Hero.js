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
            {/* <a href="#" data-target="#exampleModal" data-whatever="@mdo" class="btn-get-started scrollto">
              Book Your Appoinment
             </a> */}
            <a href="#" class="btn-get-started scrollto" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Book Your Appoinment</a>

          </div>

          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Book Your Appointment At RadhaKrishna jyotish</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {/* Google Form */}
                  {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciIcJ-Y7944eWhEkUB3xV8nXZZjz1elRI26fPzt9d0rPnY6g/viewform?embedded=true" width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeU9AkrBPxR-WBXZdZTyj06YdbXAzVx8gDNl3miCaAIs7fZQg/viewform?embedded=true" width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero --> */}
      </div>
    )
  }
}

export default Hero
