// import AfterHero from "./AfterHero"

import { Link } from "react-router-dom";
import Network from "../Animation/Network";

function Hero() {
  return (
    <div>
      {/* <!-- Home --> */}
      <section className="home py-5 d-flex align-items-center" id="header">
        <div className="container text-light py-5" data-aos="fade-right">
          <h1 className="headline ">
            Best <span className="home_text">Broadband</span>
            <br />
            Internet Plans For You
          </h1>
          <p className="para para-light py-3">
            Bringing affordable, high-quality internet to every doorstep.
            Whether for work, play, or study, 1 Zeta keeps you connected
            effortlessly.
          </p>
          <div className="d-flex align-items-center">
            <p className="p-2">
              <i className="fas fa-laptop-house fa-lg"></i>
            </p>
            <p>Affordable & Reliable</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="p-2">
              <i className="fas fa-wifi fa-lg"></i>
            </p>
            <p>High-Speed Internet</p>
          </div>

          <div className="homeBtns">
            <div className="my-3">
              <Link className="btn" to={"/mainplan"}>
                View Plans
              </Link>
            </div>
            <div className="my-3">
              <Link className="btn" to={"/maincontact"}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- end of container --> */}
      </section>
      <div className="netHome">
        <Network isWifi={false} />
      </div>

      {/* <!-- Information --> */}
      <section className="information">
        <div className="container-fluid">
          <div className="row text-light">
            <div className="col-lg-4 text-center p-5" data-aos="zoom-in">
              
              <i className="fas fa-tachometer-alt fa-3x p-2"></i>
              <h4 className="py-3">High-Speed Connectivity</h4>
              <p className="para-light">
                Experience blazing-fast internet that keeps up with your
                lifestyle. Whether streaming, gaming, or working from home, 1
                Zeta Fiber delivers consistent, high-speed performance.
              </p>
            </div>
            <div className="col-lg-4 text-center p-5" data-aos="zoom-in">
              <i className="fas fa-clock fa-3x p-2"></i>
              <h4 className="py-3">Reliable Uptime and Performance </h4>
              <p className="para-light">
                Count on a stable, reliable internet connection every day. With
                1 Zeta Fiber, enjoy 99.9% uptime and uninterrupted service that
                keeps you connected when it matters most.
              </p>
            </div>
            <div
              className="col-lg-4 text-center p-5 text-dark"
              data-aos="zoom-in"
            >
              <i className="fas fa-headset fa-3x p-2"></i>
              <h4 className="py-3">24/7 Support</h4>
              <p className="para-light">
                Our support team is always here for you, day or night. Enjoy
                peace of mind with reliable assistance, ensuring your connection
                stays smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of information --> */}
    </div>
  );
}

export default Hero;
