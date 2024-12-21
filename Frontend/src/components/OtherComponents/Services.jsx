// import SocialMedia from "./Animation/SocialMedia";
import "../../App.css";

function Services() {
  const cardData = [
    {
      iTag: "fa-house fa-solid fa-lg text-white",
      h4Tag: "HOME BROADBAND",
      pTag: "Experience ultra-fast internet with our fiber-optic broadband plans, designed for seamless streaming, gaming, and working from home.",
    },
    {
      iTag: "fa-solid fa-wifi text-white",
      h4Tag: "HOME WIFI",
      pTag: "Get consistent and reliable Wi-Fi coverage across your home or office with our top-tier routers and Wi-Fi equipment, ensuring smooth connectivity in every corner.",
    },
    {
      iTag: "fa-solid fa-phone text-white",
      h4Tag: "Computer Networking Solutions",
      pTag: "Optimize your network infrastructure with our professional computer networking services, including setup, maintenance, and troubleshooting of local area networks (LANs), ensuring seamless connectivity across all devices.",
    },
    {
      iTag: "fa-solid fa-mobile-screen-button text-white",
      h4Tag: "BUSINESS SOLUTIONS",
      pTag: "Tailored broadband services for businesses, offering dedicated bandwidth, enhanced security, and superior reliability for your professional needs.",
    },
    {
      iTag: "fa-solid fa-shield-halved text-white",
      h4Tag: "SMART HOME",
      pTag: "Enhance your smart home with seamless connectivity for all your devices, from smart thermostats to security cameras, ensuring everything works flawlessly with high-speed internet.",
    },
    {
      iTag: "fa-solid fa-tv text-white",
      h4Tag: "TV SETUP BOX",
      pTag: "Enjoy seamless television streaming with our integrated TV setup box, providing access to your favourite channels, on-demand content, and more, all with a high-quality viewing experience.",
    },
  ];

  return (
    <div>
      {/* <!-- Services --> */}
      <section
        className="services d-flex align-items-center py-5 ourServiceImg"
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
            {cardData.map((k, i) => (
              <div className="col-lg-4 " key={i}>
                <div className="card bg-transparent tempService">
                  <div className="d-flex  gap-3 mt-4 mb-4 align-item-center">
                    <div className="ripplebutton">
                      <i className={`${k.iTag}`}></i>
                    </div>

                    <h5 className="ms-2">{k.h4Tag}</h5>
                  </div>

                  <p className="para-light">{k.pTag}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of services --> */}

      {/* <section className=" border bg-warning">
        <SocialMedia />
      </section> */}

      <section
        className="services d-flex align-items-center py-5 ourServiceImgMob"
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
            {cardData.map((k, i) => (
              <div className="col-lg-4 " key={i}>
                <div className="card bg-transparent tempService">
                  <div className="d-flex  gap-3 mt-4 mb-4 align-item-center">
                    <div className="ripplebutton">
                      <i className={`${k.iTag}`}></i>
                    </div>

                    <h5 className="ms-2">{k.h4Tag}</h5>
                  </div>

                  <p className="para-light">{k.pTag}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
    </div>
  );
}

export default Services;
