import Network from "../Animation/Network";
import Wave from "../Animation/Wave";
import Goals from "./Goals";

function MainAbout() {
  return (
    <div>
      {/* <!-- About --> */}
      <section className="about  text-light py-5" id="about">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 mt-5" data-aos="fade-right">
              <p className="mb-3 mt-5">ABOUT US</p>
              <h1>
                We are top internet <br />
                service company
              </h1>
              <p className="py-2 ">
                1 Zeta is your trusted partner in
                <b className="text-primary">high-speed internet</b>, dedicated
                to delivering
                <b className="text-primary">
                  affordable, reliable connectivity
                </b>
                for homes and businesses alike.
              </p>
              <p className="py-2 ">
                We believe in making quality internet accessible to all, with
                customer service that&#39;s always ready to help. Experience
                internet without limits – with
                <b className="text-primary">1 Zeta </b>, you&#39;re connected to
                more.
              </p>

              <p>
                At 1 Zeta, we’re more than just an internet service provider;
                we’re your partner in seamless digital connectivity. Built on
                the belief that fast, reliable internet should be accessible to
                everyone, 1 Zeta is committed to bringing high-quality broadband
                and Wi-Fi solutions to homes and businesses across
                [region/city].
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

         <Wave/>
        </div>
        <div className="mt-5">
          <h2 className="mt-5 mb-4 text-center">About Our Goals</h2>
          <Goals />
        </div>
      </section>
    </div>
  );
}

export default MainAbout;
