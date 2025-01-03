import { Link } from "react-router-dom";
import Network from "../Animation/Network";

function About() {
  return (
    <div>
      {/* <!-- About --> */}
      <section 
        className="about abts d-flex align-items-center text-light  py-1"
        id="about"
      >
        <div className="container mb-5">
          <div className="row d-flex align-items-center  justify-content-between">
            <div className="col-lg-8" data-aos="fade-right">
              <p className="mb-3 mt-4">ABOUT US</p>
              <h1>
                We are top internet <br />
                service company
              </h1>
              <p className="py-2 para-light mb-4 mt-4">
                1 Zeta is your trusted partner in 
                <b className="yellowText"> high-speed internet</b>, dedicated
                to delivering 
                 <b className="yellowText"> affordable, reliable connectivity </b>
                for homes and businesses alike.
              </p>
              <p className="py-2 para-light">
                We believe in making quality internet accessible to all, with
                customer service that&#39;s always ready to help. Experience
                internet without limits – with
                <b className="yellowText"> 1 Zeta </b>, you&#39;re connected to
                more.
              </p>

              <div className="my-3 mt-5">
                <Link className="btn" to={"/mainabout"}>
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 m-auto wifiabout py-sm-0"
              data-aos="fade-down"
             
            >
                {/* <img
                  className="img-fluid"
                  src="./assets/images/about.png"
                  alt="about"
                /> */}
                <Network isWifi={true}  />
                {/* <i className="fa-solid fa-wifi"></i> */}
                
                {/* </Network> */}
                
              {/* <Network /> */}
            </div>
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of about --> */}
    </div>
  );
}

export default About;
