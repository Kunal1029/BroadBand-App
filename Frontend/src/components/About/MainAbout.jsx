import Network from "../Animation/Network";
import Wave from "../Animation/Wave";
import "./Goals.css";

function MainAbout() {
  return (
    <div>
      {/* <!-- About --> */}
      <section className="about text-light py-5" id="about">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 abtmargin" data-aos="fade-right">
              <p className="mb-3 abtmargin">ABOUT US</p>
              <h1>
                We are top internet <br />
                service company
              </h1>
              <p className="py-2 mt-4 mb-4">
                1 Zeta is your trusted partner in
                <b className="yellowText"> high-speed internet</b>, dedicated to
                delivering
                <b className="yellowText">
                  {" "}
                  affordable, reliable connectivity{" "}
                </b>
                for homes and businesses alike.
              </p>
              <p className="py-2 mt-4 mb-4">
                We believe in making quality internet accessible to all, with
                customer service that&#39;s always ready to help. Experience
                internet without limits – with
                <b className="yellowText"> 1 Zeta </b>, you&#39;re connected to
                more.
              </p>

              <p className="mt-4 mb-4">
                At 1 Zeta, we’re more than just an internet service provider;
                we’re your partner in seamless digital connectivity. Built on
                the belief that fast, reliable internet should be accessible to
                everyone, 1 Zeta is committed to bringing high-quality broadband
                and Wi-Fi solutions to homes and businesses across.
              </p>
            </div>

            <div
              className="col-lg-4 m-auto wifiabout py-sm-0"
              data-aos="fade-down"
            >
              {/* <img
                  className="img-fluid"
                  src="./assets/images/about.png"
                  alt="about"
                /> */}
              <Network isWifi={true} />
              {/* <i className="fa-solid fa-wifi"></i> */}

              {/* </Network> */}

              {/* <Network /> */}
            </div>
          </div>
          {/* <!-- end of row --> */}
        </div>

        <div className="mt-4 mb-4">
          <Wave />
        </div>

        <div className="mt-5 text-center">
          <h2 className="mt-5 mb-4 ">About Our Goals</h2>
          {/* <Goals /> */}

          <div className="container misvis mt-5 ">
            <div className="col-lg-6">
              <img className="w-100" src="./assets/abt1.jpg" alt="" />
            </div>

            <div className=" col-lg-6 vmissions  mv11 p-3">
              <h3 className="mb-3 missions">Our Mission</h3>
              <p>
                Our mission is simple: to deliver affordable, dependable, and
                innovative internet solutions that empower communities to stay
                connected, informed, and productive in a digital world.
              </p>
              <h3 className="mb-4 mt-5">Our Vision</h3>
              <p>
                We envision a world where everyone has access to fast and
                reliable internet, no matter where they are. As we continue to
                grow, we’re dedicated to making high-speed, affordable internet
                a reality for every home and business we serve.
              </p>
            </div>
          </div>

          <div className="CoreValues col-lg-7 container misvis mt-5 mv1 p-4">
            <div className="">
              <h3 className="mb-4">Core Values</h3>
              <p>
              <b>Reliability</b> : We prioritize consistent, high-quality connectivity
                for all users
              </p>
              <p>
                <b>Affordability</b>: High-speed internet shouldn’t come with a high
                price tag
              </p>
              <p>
                <b>Innovation</b> : We stay ahead with cutting-edge technology and
                evolving services
              </p>
              <p><b>Customer-Centricity</b> : Your satisfaction is our top priority</p>
              <p>
                <b>Trust</b> : We build strong relationships through transparency and
                integrity
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainAbout;
