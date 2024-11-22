function MyLocation() {
  return (
    <div>
      {/* <!-- Location --> */}
      <section className="location text-light py-5">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center">
              <div className="p-2">
                <i className="far fa-map fa-3x"></i>
              </div>
              <div className="ms-2">
                <h6 className="mb-1">ADDRESS</h6>
                <p style={{ lineHeight: "15px" }}>
                  Bhanot Market, 1 Turner Road, Majra, Dehradun, Uttarakhand -
                  248002
                </p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <div className="p-2">
                <i className="fas fa-mobile-alt fa-3x"></i>
              </div>
              <div className="ms-2 ">
                <h6>CALL FOR QUERY</h6>
                <p>(+91)-9012359090</p>
              </div>
            </div>
            <div className="col-lg-4  d-flex align-items-center">
              <div className="p-2">
                <i className="far fa-envelope fa-3x"></i>
              </div>
              <div className="ms-2">
                <h6>SEND US MESSAGE</h6>
                <p className="" style={{ wordBreak: "break-word" }}>
                  onezetaassociate@gmail.com
                </p>
              </div>
            </div>
            {/* <div className="col-lg-3 d-flex align-items-center">
              <div className="p-2">
                <i className="far fa-clock fa-3x"></i>
              </div>
              <div className="ms-2">
                <h6>OPENING HOURS</h6>
                <p>09:00 AM - 18:00 PM</p>
              </div>
            </div> */}
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of location --> */}
    </div>
  );
}

export default MyLocation;
