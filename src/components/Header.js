import React, { Component } from "react"
const Logo = require("../assets/img/newLogo.png")
export class Header extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" class="fixed-top d-flex align-items-center">
          <div class="container">
            <div class="header-container d-flex align-items-center">
              <div class="logo mr-auto">
                <h1 class="text-light">
                  <a href="index.html">
                    {/* <img class="img-1" src={Logo} style={{ height: "250px", width: "150px" }} /> */}
                    {/* <span>Comapny Name</span> */}
                  </a>
                </h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
              </div>

              <nav class="nav-menu d-none d-lg-block">
                <ul>
                  <li class="active">
                    <a href="#header">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Media</a>
                  </li>
                  {/* <li><a href="#team">Team</a></li>  */}
                  {/* <li class="drop-down">
                    <a href="">Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Drop Down 1</a>
                      </li>
                      <li class="drop-down">
                        <a href="#">Drop Down 2</a>
                        <ul>
                          <li>
                            <a href="#">Deep Drop Down 1</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 2</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 3</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 4</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 5</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <a href="#contact">Contact</a>
                  </li>

                  <li class="get-started">
                    <a href="#about">Get Started</a>
                  </li>
                </ul>
              </nav>
              {/* <!-- .nav-menu --> */}
            </div>
            {/* <!-- End Header Container --> */}
          </div>
        </header>
        {/* <!-- End Header --> */}
      </div>
    )
  }
}

export default Header
