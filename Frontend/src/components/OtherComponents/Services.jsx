// import SocialMedia from "./Animation/SocialMedia";

function Services() {
  return (
    <div>
      {/* <!-- Services --> */}
      <section
        className="services d-flex align-items-center py-5"
        id="services"
      >
        <div className="container text-light mt-4 ">
          <div className="text-center pb-4">
            <p>OUR SERVICES</p>
            <h2 className="py-2">Explore unlimited possibilities</h2>
            <p className="para-light">
              Whether you&#39;re working from home, streaming your favourite
              shows, or connecting with loved ones, 1 Zeta keeps you online
              without interruptions. Our high-speed, affordable internet adapts
              to your lifestyle, so you can focus on what matters most.
            </p>
          </div>
          <div className="row gy-4 py-2 mt-3" data-aos="zoom-in">
            <div className="col-lg-4 ">
              <div className="card border-0 border-0 bg-transparent ">
                {/* <div className="d-flex gap-3"> */}
                  
                <div className="ripplebutton">
                  <i className=" fa-house fa-solid fa-lg text-white"></i>
                </div>

                <h4 className="py-2">HOME BROADBAND</h4>
                {/* </div> */}

                <p className="para-light">
                  Experience ultra-fast internet with our fiber-optic broadband
                  plans, designed for seamless streaming, gaming, and working
                  from home.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 bg-transparent">
                <div className="ripplebutton">
                  <i className="fa-solid fa-wifi text-white"></i>
                </div>
                <h4 className="py-2">HOME WIFI</h4>
                <p className="para-light">
                  Get consistent and reliable Wi-Fi coverage across your home or
                  office with our top-tier routers and Wi-Fi equipment, ensuring
                  smooth connectivity in every corner.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 bg-transparent">
                <div className="ripplebutton">
                  <i className="fa-solid fa-phone text-white "></i>
                </div>
                <h4 className="py-2">Computer Networking Solutions</h4>
                <p className="para-light">
                  Optimize your network infrastructure with our professional
                  computer networking services, including setup, maintenance,
                  and troubleshooting of local area networks (LANs), ensuring
                  seamless connectivity across all devices.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 bg-transparent">
                <div className="ripplebutton">
                  <i className="fa-solid fa-mobile-screen-button text-white"></i>
                </div>
                <h4 className="py-2">BUSINESS SOLUTIONS</h4>
                <p className="para-light">
                  Tailored broadband services for businesses, offering dedicated
                  bandwidth, enhanced security, and superior reliability for
                  your professional needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 bg-transparent">
                <div className="ripplebutton">
                  <i className="fa-solid fa-shield-halved text-white"></i>{" "}
                </div>
                <h4 className="py-2">SMART HOME</h4>
                <p className="para-light">
                  Enhance your smart home with seamless connectivity for all
                  your devices, from smart thermostats to security cameras,
                  ensuring everything works flawlessly with high-speed internet.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 bg-transparent">
                <div className="ripplebutton">
                  <i className="fa-solid fa-tv text-white"></i>{" "}
                </div>
                <h4 className="py-2">TV SETUP BOX</h4>
                <p className="para-light">
                  Enjoy seamless television streaming with our integrated TV
                  setup box, providing access to your favourite channels,
                  on-demand content, and more, all with a high-quality viewing
                  experience.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of services --> */}

      {/* <section className=" border bg-warning">
        <SocialMedia />
      </section> */}
    </div>
  );
}

export default Services;
