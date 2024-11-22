// import Gradient from "./Animation/Gradient"

// import Counter from "./Counter"

function Footer() {
  return (
    <div>
       {/* <!-- Footer --> */}
       <section className="footer text-light">
        <div className="container">
          <div className="row" data-aos="fade-right">
            <div className="col-lg-4 py-4 py-md-5">
              <div className="d-flex align-items-center">
                <h4 className="">ZetaOne</h4>
                {/* <Gradient /> */}
              </div>
              <p className="py-3 para-light">
                Bhanot Market, 1 Turner Road, Majra, Dehradun, Uttarakhand -
                248002 <br />
                <a href="">
                  <i className="fa fa-phone me-2" aria-hidden="true" ></i>
                  <span style={{wordBreak: "break-word" }}>Call +91-9012359090</span> <br />
                </a>
                <a href="">
                  <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                  <span style={{wordBreak: "break-word" }}>onezetaassociate@gmail.com</span>
                </a>
              </p>

              <div className="d-flex">
                <div className="me-3">
                  <a href="#your-link">
                    <i className="fab fa-facebook-f fa-xl py-2"></i>
                  </a>
                </div>
                <div className="me-3">
                  <a href="#your-link">
                    <i className="fab fa-twitter fa-xl py-2"></i>
                  </a>
                </div>
                <div className="me-3">
                  <a href="https://www.instagram.com/1zetafiber/" target="_blank">
                    <i className="fab fa-instagram fa-xl py-2"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end of col --> */}

            <div className="col-lg-4 py-4 py-md-5">
              <div>
                <h4 className="py-2">Quick Links</h4>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="#about">
                    <p className="ms-3">About</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="#">
                    <p className="ms-3">Services</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="#">
                    <p className="ms-3">Plans</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="#">
                    <p className="ms-3">Contact</p>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end of col --> */}

            <div className="col-lg-4 py-4 py-md-5">
              <div>
                <h4 className="py-2">Useful Links</h4>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="privacy.html">
                    <p className="ms-3">Privacy</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="terms.html">
                    <p className="ms-3">Terms</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="#your-link">
                    <p className="ms-3">Disclaimer</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a href="#your-link">
                    <p className="ms-3">FAQ</p>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end of col --> */}

            {/* <!-- end of col --> */}
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of footer --> */}

      {/* <!-- Bottom --> */}
      <div className="bottom py-2 text-light">
        <div className="container d-flex justify-content-between">
          <div>
            <p>Copyright ©1zeta</p>
            <br />
          </div>
          <div>
            <i className="fab fa-cc-visa fa-lg p-1"></i>
            <i className="fab fa-cc-mastercard fa-lg p-1"></i>
            <i className="fab fa-cc-paypal fa-lg p-1"></i>
            <i className="fab fa-cc-amazon-pay fa-lg p-1"></i>
          </div>
        </div>
        {/* <!-- end of container --> */}
      </div>
      {/* <!-- end of bottom --> */}

      {/* <Counter /> */}
    </div>
  )
}

export default Footer
