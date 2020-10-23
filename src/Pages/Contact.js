import React, { Component } from "react"

export class Contact extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-4" data-aos="fade-right">
                <div class="section-title">
                  <h2>Contact</h2>
                  {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>
              </div>

              <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                <iframe
                  style={{ border: "0px", width: "100%", height: "270px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.820928233933!2d75.27000621491393!3d19.889781986626264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99c2cc819af9%3A0x4e4009ad8527cace!2sKasliwal%20Tarangan%2C%20Maharashtra%20431002!5e0!3m2!1sen!2sin!4v1600766110202!5m2!1sen!2sin"
                  frameborder="0"
                  allowfullscreen></iframe>
                <div class="info mt-4">
                  <i class="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>Kasliwal Tarangan,Ellora Road,Mitmita,Aurangabad</p>
                </div>
                <div class="row">
                  <div class="col-lg-6 mt-4">
                    <div class="info">
                      <i class="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p>unchegaonkar@yahoo.com</p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="info w-100 mt-4">
                      <i class="icofont-phone"></i>
                      <h4>Call:</h4>
                      <p>+91 9422930668</p>
                      <p>+91 9503554326</p>
                    </div>
                  </div>
                </div>

                <form class="php-email-form mt-4">
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div class="validate"></div>
                    </div>
                    <div class="col-md-6 form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div class="validate"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </div>
    )
  }
}

export default Contact
