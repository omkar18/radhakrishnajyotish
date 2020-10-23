import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Heroscope from "./Pages/Heroscope"
import About from "./Pages/About"
import Count from "./Pages/Count"
import WhyUs from "./Pages/WhyUs"
import Services from "./Pages/Services"
import Portfolio from "./Pages/Portfolio"
import SliderImg from "./Pages/sliderImg"
import Testimonials from "./Pages/Testimonials"
import Team from "./Pages/Team"
import Contact from "./Pages/Contact"
import Footer from "./components/Footer"
export class App extends Component {
  render() {
    return (
      <div>
        {/* Header Section */}
        <Header />
        {/* Hero Section */}
        <Hero />
        <Heroscope />

        <main id="main">
          {/* About Page */}
          <About />
          {/* Count Page */}
          <Count />
          {/* Why Us Page*/}

          {/* SliderImg Page*/}
          <SliderImg />
          <WhyUs />
          {/* Service Page */}
          <Services />

          {/* Portfolio Page*/}
          <Portfolio />

          {/* Testimonials Page*/}
          <Testimonials />

          {/* Team Page*/}
          {/* <Team /> */}

          {/* Contact Page */}
          <Contact />
        </main>
        {/* <!-- End #main --> */}

        {/* Footer Section */}
        <Footer />
      </div>
    )
  }
}

export default App
