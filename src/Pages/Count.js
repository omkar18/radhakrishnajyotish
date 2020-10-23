import React, { Component } from "react"

export class Count extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" class="counts">
          <div class="container">
            <div class="row counters">
              <div class="col-lg-3 col-6 text-center">
                <i style={{ fontSize: "50px" }} class="fa fa-users"></i>
                <span data-toggle="counter-up">1000</span>
                <p>Customers Satisfied</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <i style={{ fontSize: "50px" }} class="fa fa-trophy"></i>
                <span data-toggle="counter-up">20</span>
                <p>Awards</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <i style={{ fontSize: "50px" }} class="fa fa-graduation-cap"></i>
                <span data-toggle="counter-up">15</span>
                <p>Year Of Experience</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <i style={{ fontSize: "50px" }} class="fa fa-globe"></i>
                <span data-toggle="counter-up">15</span>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}
      </div>
    )
  }
}

export default Count
