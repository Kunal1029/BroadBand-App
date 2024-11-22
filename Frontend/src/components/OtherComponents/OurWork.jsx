import CountUp from 'react-countup';

function OurWork() {
  return (
    <div>
      {/* <!-- Work --> */}
      <section className="work d-flex align-items-center py-2">
        <div className="container text-light">
          <div className="row ">
            <div className="col-lg-7 ms-auto text-center d-flex align-items-center justify-content-center" data-aos="fade-right">
              <img className="img-fluid d-lg-block d-none" src="./assets/images/about.png" alt="work" />
              <img className="img-fluid d-lg-none" src="./assets/images/about.jpg" alt="work" />
            </div>

            <div className="col-lg-5 ms-auto d-flex align-items-center px-4 py-3">

              <div className="row">
                <div className="text-center text-lg-start py-4 pt-lg-0">
                  <p>OUR WORK</p>
                  <h2 className="py-2">Explore unlimited possibilities</h2>
                  <p className="para-light ">
                    Enjoy seamless browsing, crystal-clear video calls, and fast
                    downloads with a network you can trust – 1 Zeta is here to
                    elevate your digital experience.
                  </p>
                </div>
                <div className="container" data-aos="fade-up">
                  <div className="row g-5">
                    {/* PROJECTS COMPLETED */}
                    <div className="col-6 text-start">
                      <i className="fas fa-briefcase fa-2x text-start"></i>
                      <h2 className="purecounter">
                        <CountUp end={1258} duration={3} />
                      </h2>
                      <p>PROJECTS COMPLETED</p>
                    </div>
                    
                    {/* AWARDS */}
                    <div className="col-6">
                      <i className="fas fa-award fa-2x"></i>
                      <h2 className="purecounter">
                        <CountUp end={150} duration={3} />
                      </h2>
                      <p>AWARDS</p>
                    </div>
                    
                    {/* CUSTOMER ACTIVE */}
                    <div className="col-6">
                      <i className="fas fa-users fa-2x"></i>
                      <h2 className="purecounter">
                        <CountUp end={1255} duration={3} />
                      </h2>
                      <p>CUSTOMER ACTIVE</p>
                    </div>
                    
                    {/* GOOD REVIEWS */}
                    <div className="col-6">
                      <i className="fas fa-clock fa-2x"></i>
                      <h2 className="purecounter">
                        <CountUp end={1157} duration={3} />
                      </h2>
                      <p>GOOD REVIEWS</p>
                    </div>
                  </div>
                </div>
                {/* <!-- end of container --> */}
              </div>
              {/* <!-- end of row --> */}
            </div>
            {/* <!-- end of col-lg-5 --> */}
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of work --> */}
    </div>
  );
}

export default OurWork;
