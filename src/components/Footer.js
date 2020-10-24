import React, { Component } from "react"

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <div class="container d-md-flex py-4">
            <div class="mr-md-auto text-center text-md-left">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Technobility Software</span>
                </strong>
                . All Rights Reserved
              </div>
              {/* <div class="credits">
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div> */}
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="https://www.facebook.com/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%B0%E0%A4%BE%E0%A4%A7%E0%A4%BE%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A3-%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%A4%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%AF-%E0%A4%AF%E0%A4%BE%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BF%E0%A4%95%E0%A5%80-%E0%A4%B5-%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%81-%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0-439477930284566/" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="" class="google-plus">
                <i class="bx bxl-skype"></i>
              </a>
              <a href="" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer --> */}

        <a href="#" class="back-to-top">
          <i class="icofont-simple-up"></i>
        </a>
      </div>
    )
  }
}

export default Footer
