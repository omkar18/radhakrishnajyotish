import React, { Component } from "react"
const manLogo = require("../assets/img/testimonials/manLogo.png")
const womenLogo = require("../assets/img/testimonials/women.png")


export class Testimonials extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" class="testimonials section-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="section-title" data-aos="fade-right">
                  <h2>Testimonials</h2>
                  <p>Words Of Appreciations Endorsing Our Quality Astrology</p>
                </div>
              </div>
              <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                <div class="owl-carousel testimonials-carousel">
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Dr. Unchegaonkar's work on astrology is commendable.It has helped me
                      a lot in my difficult situations.I told my problem to Dr. Unchegaonkar,
                      and he analysis my problem and provide effective solutions.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={womenLogo} class="testimonial-img" alt="" />
                    <h3>Mrs. Tirmare</h3>
                    <h4>Engineer</h4>
                  </div>

                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Dr. Unchegaonkar's is knowledgeable astrologist.His guidance will change
                      my life.Because of his effective solutions will give me good job,and also
                      solved my weeding problems.
                      Many Many Thanks...
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={manLogo} class="testimonial-img" alt="" />
                    <h3>
                      Mr. Rajesh Kamthekar
                    </h3>
                    <h4>Service</h4>
                  </div>

                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Dr.Unchegaonkar's studied up to ITI in very difficult conditions and got a job in MSEB's
                      Thermal Power Station at Parli.
While doing the job, he did a diploma in engineering. After doing all this, he turned his
attention to astrology and various pujas.

I have done Shanti Puja for my daughter as well as Kalash Puja and Vastu Puja for them.

I also took advice from them about the wedding card and it was very valuable to us.

                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={manLogo} class="testimonial-img" alt="" />
                    <h3>Mr. Satish Nirmale</h3>
                    <h4>Service</h4>
                  </div>

                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Dr. Unchegaonkar Hello,
                      You inspected the land of our petrol pump with your
                      aura machine and asked us to take a bore at the spot where,
                      the water started flowing.The rest is about our future.
                      The same should be guided from time to time.
                      Thanks...
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={manLogo} class="testimonial-img" alt="" />
                    <h3>Mr. Hemant Kausadikar</h3>
                    <h4>journalist</h4>
                  </div>
                  {/* 
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={profile1} class="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}
      </div>
    )
  }
}

export default Testimonials
