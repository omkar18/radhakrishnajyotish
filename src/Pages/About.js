import React, { Component } from "react"
const profile1 = require("../assets/img/about/dr. Arun Unchegaonkar.jpeg")

export class About extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
          <div class="container">
            <div class="row content">
              <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                {/* <h3>About Us</h3>
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3> */}
                <div class="section-title" data-aos="fade-right">
                  <h2>About Us</h2>
                  <p>
                    <img style={{ width: "180px", height: "250px", border: "10 px solid", borderRadius: "20px" }} src={profile1} />
                  </p>
                  <p style={{ fontSize: "18px", padding: "5px", fontWeight: "bold" }}>Dr. Arun Uttamrao Unchegaonkar</p>
                  <p style={{ fontSize: "18px", padding: "4px", fontWeight: "bold" }}>(DEE Elect. , PHD Astrology MA, Hindi Pandit)</p>
                  <p style={{ fontSize: "18px", padding: "4px", fontWeight: "bold" }}>(Jyotish,Yadniki & Vastu Consultant)</p>
                </div>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
                <p>
                  Dr.Arun Unchegaonkar is one of the most awarded and knowledgeable astrologer in india. He has completed PHD in Astrology.His expertised area's are vastu shastra,Nadi analyst, Ank shastra, Jyotis Vivah, Crystal analyst, Scientific vastu jotish, Kundli analyst, Mobile neumarlogy
                  expert, pyra healing expert, Panchang analyst
                </p>
                <ul>
                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i> Doctorate in astrological Science ( Jyotish Vishv Vidyapeeth Pvt Ltd Colombo Shrilanka)
                  </li>
                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i> Awarded as a Jyotish Dronacharya & Jyotish Brahmrishi
                  </li>
                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i>Awarded as a best astrologer in aryabhatt astronomy award 2020
                  </li>

                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i>Awarded hasta samudrik jyotish gaurav from vishv jyoish, hariphool Delhi
                  </li>

                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i>Awarded as Lal Kitab Pandit.
                  </li>
                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i>Awarded as best Mobile Neumarologist.
                  </li>
                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i>Awarded as best Pyra Healing consultant.
                  </li>
                  <li>
                    <i style={{ marginTop: "10px", fontSize: "25px" }} class="fas fa-award fa-gradient"></i>Awarded as Panchang analyst.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}
      </div>
    )
  }
}

export default About
