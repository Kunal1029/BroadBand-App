/* eslint-disable react/no-unescaped-entities */
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
                Bhanot Market, 1 Turner Road, Majra, Dehradun, <br />
                Uttarakhand - 248002 <br />
                <a href="">
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>
                  <span style={{ wordBreak: "break-word" }}>
                    Call +91-9012359090
                  </span>{" "}
                  <br />
                </a>
                <a href="">
                  <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                  <span style={{ wordBreak: "break-word" }}>
                    onezetaassociate@gmail.com
                  </span>
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
                  <a
                    href="https://www.instagram.com/1zetafiber/"
                    target="_blank"
                  >
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
                  <a>
                    <p
                      className="ms-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Privacy
                    </p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a>
                    <p
                      className="ms-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdropTC"
                    >
                      Terms
                    </p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i
                    className="fas fa-caret-right"
                    style={{ color: "#FE7C22" }}
                  ></i>
                  <a >
                    <p className="ms-3"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdropDIS">Disclaimer</p>
                  </a>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* privacy modal */}

      <div
        className="modal fade "
        style={{ backgroundColor: "#02255d5e" }}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl ">
          <div className="modal-content">
            <div className="modal-header  p-3">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Privacy Policy
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  p-4">
              <div className="" style={{ color: "#02255d" }}>
                <p className="mb-4">Last updated: November 27, 2024</p>
                <p className="mb-3">
                  {" "}
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </p>
                <p className="mb-3">
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the Free
                  Privacy Policy Generator.
                </p>
                <h5 className="mt-4 mb-4" style={{ color: "#fe7c22" }}>
                  Interpretation and Definitions
                </h5>
                <h6 className="" style={{ color: "#fe7c22" }}>
                  Interpretation
                </h6>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.{" "}
                </p>
                <h6 className="mt-4" style={{ color: "#fe7c22" }}>
                  Definitions
                </h6>{" "}
                <p className="mb-2">For the purposes of this Privacy Policy:</p>
                <div>
                  <p>
                    <b> Account</b> means a unique account created for You to
                    access our Service or parts of our Service.
                  </p>{" "}
                  <b> Affiliate</b> means an entity that controls, is controlled
                  by or is under common control with a party, where
                  &rdquo;control&#34; means ownership of 50% or more of the
                  shares, equity interest or other securities entitled to vote
                  for election of directors or other managing authority.
                  <p>
                    <b> Company</b> (referred to as either &#34;the
                    Company&#34;, &#34;We&#34;, &#34;Us&#34; or &#34;Our&#34; in
                    this Agreement) refers to ONEZETA ASSOCIATE PRIVATE LIMITED,
                    Bhanot Market, 1 Turner Road,Majra, Dehradun,Uttarakhand -
                    248002.
                  </p>
                  <p>
                    <b> Cookies</b> are small files that are placed on Your
                    computer, mobile device or any other device by a website,
                    containing the details of Your browsing history on that
                    website among its many uses.
                  </p>
                  <p>
                    <b> Country</b> refers to: Uttarakhand, India
                  </p>
                  <p>
                    <b> Device</b> means any device that can access the Service
                    such as a computer, a cellphone or a digital tablet.
                  </p>
                  <p>
                    <b> Personal Data</b> is any information that relates to an
                    identified or identifiable individual.
                  </p>
                  <p>
                    <b> Service</b> refers to the Website.
                  </p>
                  <p>
                    <b> Service Provider</b> means any natural or legal person
                    who processes the data on behalf of the Company. It refers
                    to third-party companies or individuals employed by the
                    Company to facilitate the Service, to provide the Service on
                    behalf of the Company, to perform services related to the
                    Service or to assist the Company in analyzing how the
                    Service is used.
                  </p>
                  <p>
                    <b>Usage Data</b> refers to data collected automatically,
                    either generated by the use of the Service or from the
                    Service infrastructure itself (for example, the duration of
                    a page visit).
                  </p>
                  <p>
                    <b>Website</b> refers to 1 Zeta Fiber, accessible from
                    https://1zeta.com/
                  </p>
                  <p>
                    <b>You</b> means the individual accessing or using the
                    Service, or the company, or other legal entity on behalf of
                    which such individual is accessing or using the Service, as
                    applicable.
                  </p>
                </div>
                <h5 className=" mt-5" style={{ color: "#fe7c22" }}>
                  Collecting and Using Your Personal Data
                </h5>
                <h6 className="mt-4 mb-3" style={{ color: "#fe7c22" }}>
                  Types of Data Collected
                </h6>
                <p className="mb-2">Personal Data</p>
                <p>
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <p className="mt-3 mb-3">
                  Email address <br />
                  First name and last name <br />
                  Phone number <br />
                  Usage Data
                </p>
                <p className="mt-4 mb-3" style={{ color: "#fe7c22" }}>
                  Usage Data <br /> <br />
                  Usage Data is collected automatically when using the Service.{" "}
                </p>
                <p className="mb-4">
                  Usage Data may include information such as Your Device&#39;s
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data. <br />
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                  <br /> We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
                <h6 className="mb-4" style={{ color: "#fe7c22" }}>
                  Tracking Technologies and Cookies
                </h6>
                <p className="mb-3">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </p>
                <ul>
                  <li className="mb-3">
                    <b>Cookies or Browser Cookies.</b> A cookie is a small file
                    placed on Your Device. You can instruct Your browser to
                    refuse all Cookies or to indicate when a Cookie is being
                    sent. However, if You do not accept Cookies, You may not be
                    able to use some parts of our Service. Unless you have
                    adjusted Your browser setting so that it will refuse
                    Cookies, our Service may use Cookies.
                  </li>
                  <li className="mb-3">
                    <b>Web Beacons. </b>Certain sections of our Service and our
                    emails may contain small electronic files known as web
                    beacons (also referred to as clear gifs, pixel tags, and
                    single-pixel gifs) that permit the Company, for example, to
                    count users who have visited those pages or opened an email
                    and for other related website statistics (for example,
                    recording the popularity of a certain section and verifying
                    system and server integrity).
                  </li>
                </ul>
                <p className="mb-3">
                  <p className="mb-3">
                    {" "}
                    Cookies can be &rdquo;Persistent &rdquo; or &rdquo;Session
                    &rdquo; Cookies. Persistent Cookies remain on Your personal
                    computer or mobile device when You go offline, while Session
                    Cookies are deleted as soon as You close Your web browser.
                    Learn more about cookies on the Free Privacy Policy website
                    article.
                  </p>
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                  <br />
                  <div className="ms-5 mt-4">
                    <h6>
                      <b>Necessary / Essential Cookies</b>
                    </h6>
                    <p>Type: Session Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </p>

                    <h6 className="mt-4">
                      <b>Cookies Policy / Notice Acceptance Cookies</b>
                    </h6>
                    <p>Type: Persistent Cookiess</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </p>

                    <h6 className="mt-4">
                      <b>Functionality Cookies</b>
                    </h6>
                    <p>Type: Persistent Cookiess</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies allow us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </p>
                  </div>{" "}
                  <br />
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </p>
                <h6>
                  <b>Use of Your Personal Data</b>
                </h6>
                <p>
                  The Company may use Personal Data for the following purposes:{" "}
                  <br />
                  <div className="ms-5 mt-3 mb-4">
                    <b>To provide and maintain our Service</b>, including to
                    monitor the usage of our Service.
                    <br />
                    <b>To manage Your Account</b>: to manage Your registration
                    as a user of the Service. The Personal Data You provide can
                    give You access to different functionalities of the Service
                    that are available to You as a registered user.
                    <br />
                    <b>For the performance of a contract</b>: the development,
                    compliance and undertaking of the purchase contract for the
                    products, items or services You have purchased or of any
                    other contract with Us through the Service.
                    <br />
                    <b>To contact You</b>: To contact You by email, telephone
                    calls, SMS, or other equivalent forms of electronic
                    communication, such as a mobile application&#39;s push
                    notifications regarding updates or informative
                    communications related to the functionalities, products or
                    contracted services, including the security updates, when
                    necessary or reasonable for their implementation.
                    <br />
                    <b>To provide You</b> with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless You have opted not to
                    receive such information.
                    <br />
                    <b>To manage Your requests:</b> To attend and manage Your
                    requests to Us.
                    <br />
                    <b>For business transfers:</b> We may use Your information
                    to evaluate or conduct a merger, divestiture, restructuring,
                    reorganization, dissolution, or other sale or transfer of
                    some or all of Our assets, whether as a going concern or as
                    part of bankruptcy, liquidation, or similar proceeding, in
                    which Personal Data held by Us about our Service users is
                    among the assets transferred.
                    <br />
                    <b>For other purposes:</b> We may use Your information for
                    other purposes, such as data analysis, identifying usage
                    trends, determining the effectiveness of our promotional
                    campaigns and to evaluate and improve our Service, products,
                    services, marketing and your experience.
                    <br />
                  </div>
                </p>
                <p className="mb-3">
                  We may share Your personal information in the following
                  situations:
                </p>
                <ul className="mb-4">
                  <li>
                    <b>With Service Providers:</b> We may share Your personal
                    information with Service Providers to monitor and analyze
                    the use of our Service, to contact You.
                  </li>
                  <li>
                    <b>For business transfers:</b> We may share or transfer Your
                    personal information in connection with, or during
                    negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <b>With Affiliates:</b> We may share Your information with
                    Our affiliates, in which case we will require those
                    affiliates to honor this Privacy Policy. Affiliates include
                    Our parent company and any other subsidiaries, joint venture
                    partners or other companies that We control or that are
                    under common control with Us.
                  </li>
                  <li>
                    <b>With business partners:</b> We may share Your information
                    with Our business partners to offer You certain products,
                    services or promotions.
                  </li>
                  <li>
                    <b>With other users:</b> when You share personal information
                    or otherwise interact in the public areas with other users,
                    such information may be viewed by all users and may be
                    publicly distributed outside.
                  </li>
                  <li>
                    <b>With Your consent:</b> We may disclose Your personal
                    information for any other purpose with Your consent.
                  </li>
                </ul>
                <p className="mb-3">
                  <b className="" style={{ color: "#fe7c22" }}>
                    Retention of Your Personal Data
                  </b>
                  <br />
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                  <br />
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
                <p className="mb-3">
                  <b className="" style={{ color: "#fe7c22" }}>
                    Transfer of Your Personal Data
                  </b>
                  <br />
                  Your information, including Personal Data, is processed at the
                  Company&#39;s operating offices and in any other places where
                  the parties involved in the processing are located. It means
                  that this information may be transferred to — and maintained
                  on — computers located outside of Your state, province,
                  country or other governmental jurisdiction where the data
                  protection laws may differ than those from Your jurisdiction.
                  <br />
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                  <br />
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </p>
                <p className="mb-3">
                  <b className="" style={{ color: "#fe7c22" }}>
                    Delete Your Personal Data
                  </b>
                  <br />
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                  <br />
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                  <br />
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                  <br />
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
                <div>
                  <h6 className="" style={{ color: "#fe7c22" }}>
                    <b>Disclosure of Your Personal Data</b>
                  </h6>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i>Business Transactions </i>
                    </b>
                    <br />
                    If the Company is involved in a merger, acquisition or asset
                    sale, Your Personal Data may be transferred. We will provide
                    notice before Your Personal Data is transferred and becomes
                    subject to a different Privacy Policy.
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i> Law enforcement</i>
                    </b>
                    <br />
                    Under certain circumstances, the Company may be required to
                    disclose Your Personal Data if required to do so by law or
                    in response to valid requests by public authorities (e.g. a
                    court or a government agency).
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i> Other legal requirements</i>
                    </b>
                    <br />
                    The Company may disclose Your Personal Data in the good
                    faith belief that such action is necessary to:
                    <ul>
                      <li>Comply with a legal obligation</li>
                      <li>
                        Protect and defend the rights or property of the Company
                      </li>
                      <li>
                        Prevent or investigate possible wrongdoing in connection
                        with the Service
                      </li>
                      <li>
                        Protect the personal safety of Users of the Service or
                        the public
                      </li>
                      <li>Protect against legal liability</li>
                    </ul>
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i>Security of Your Personal Data </i>
                    </b>
                    <br />
                    The security of Your Personal Data is important to Us, but
                    remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure. While We
                    strive to use commercially acceptable means to protect Your
                    Personal Data, We cannot guarantee its absolute security.
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i> Children&rsquo;s Privacy</i>
                    </b>
                    <br />
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware
                    that We have collected Personal Data from anyone under the
                    age of 13 without verification of parental consent, We take
                    steps to remove that information from Our servers.
                    <br />
                    If We need to rely on consent as a legal basis for
                    processing Your information and Your country requires
                    consent from a parent, We may require Your parent&#39;s
                    consent before We collect and use that information.
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i>Links to Other Websites </i>
                    </b>
                    <br />
                    Our Service may contain links to other websites that are not
                    operated by Us. If You click on a third party link, You will
                    be directed to that third party&#39;s site. We strongly
                    advise You to review the Privacy Policy of every site You
                    visit.
                    <br />
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      <i>Changes to this Privacy Policy</i>
                    </b>
                    <br />
                    We may update Our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page.
                    <br />
                    We will let You know via email and/or a prominent notice on
                    Our Service, prior to the change becoming effective and
                    update the "Last updated" date at the top of this Privacy
                    Policy. <br />
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                  <p className="mb-3 mt-2">
                    <b className="" style={{ color: "#fe7c22" }}>
                      Contact Us
                    </b>
                    <br />
                    If you have any questions about this Privacy Policy, You can
                    contact us:{" "}
                  </p>
                  • By email: onezetaassociate@gmail.com
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                I Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* privacy modal end*/}

      {/* T&C modal */}
      <div
        className="modal fade "
        style={{ backgroundColor: "#02255d5e" }}
        id="staticBackdropTC"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl ">
          <div className="modal-content">
            <div className="modal-header  p-4">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Terms & Conditions
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body  p-4">
              <div className="">
                <h5>Last updated: November 27, 2024</h5>
                <p className="mt-4 ">
                  Please read these terms and conditions carefully before using
                  Our Service.
                </p>

                <h6 className="mt-3 mb-3">
                  <b>Interpretation and Definitions</b>
                </h6>

                <h6>
                  <b>Interpretation</b>
                </h6>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>

                <h6 className="mt-3">
                  <b>Definitions</b>
                </h6>
                <p>For the purposes of these Terms and Conditions:</p>

                <ul className="mt-3 ms-4">
                  <li>
                    <b>Affiliate</b> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    &rdquo;control&rdquo; means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </li>
                  <li className="mt-3">
                    <b>Country</b> refers to: Uttarakhand, India
                  </li>
                  <li className="mt-3">
                    <b>Company</b> (referred to as either &rdquo;the Company
                    &rdquo;, &rdquo;We &rdquo;, &rdquo;Us &rdquo; or &rdquo;Our
                    &rdquo; in this Agreement) refers to ONEZETA ASSOCIATE
                    PRIVATE LIMITED, Bhanot Market, 1 Turner Road,Majra,
                    Dehradun,Uttarakhand - 248002.
                  </li>
                  <li className="mt-3">
                    <b>Device</b> means any device that can access the Service
                    such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li className="mt-3">
                    <b>Service</b> refers to the Website.
                  </li>
                  <li className="mt-3">
                    <b>Terms and Conditions</b> (also referred as
                    &rdquo;Terms&rdquo;) mean these Terms and Conditions that
                    form the entire agreement between You and the Company
                    regarding the use of the Service. This Terms and Conditions
                    agreement has been created with the help of the Free Terms
                    and Conditions Generator.
                  </li>
                  <li className="mt-3">
                    <b>Third-party Social Media Service</b> means any services
                    or content (including data, information, products or
                    services) provided by a third-party that may be displayed,
                    included or made available by the Service.
                  </li>
                  <li className="mt-3">
                    <b>Website</b> refers to 1 Zeta Fiber, accessible from{" "}
                    <a>https://1zeta.com/</a>{" "}
                  </li>
                  <li className="mt-3">
                    <b>You</b> means the individual accessing or using the
                    Service, or the company, or other legal entity on behalf of
                    which such individual is accessing or using the Service, as
                    applicable.
                  </li>
                </ul>

                <h6 className="mt-4 mb-2">
                  <b>Acknowledgment</b>
                </h6>
                <p>
                  These are the Terms and Conditions governing the use of this
                  Service and the agreement that operates between You and the
                  Company. These Terms and Conditions set out the rights and
                  obligations of all users regarding the use of the Service.
                </p>

                <p className="mb-4">
                  Your access to and use of the Service is conditioned on Your
                  acceptance of and compliance with these Terms and Conditions.
                  These Terms and Conditions apply to all visitors, users and
                  others who access or use the Service.
                </p>
                <p className="mb-4">
                  By accessing or using the Service You agree to be bound by
                  these Terms and Conditions. If You disagree with any part of
                  these Terms and Conditions then You may not access the
                  Service.
                </p>
                <p className="mb-4">
                  You represent that you are over the age of 18. The Company
                  does not permit those under 18 to use the Service.
                </p>
                <p className="mb-4">
                  Your access to and use of the Service is also conditioned on
                  Your acceptance of and compliance with the Privacy Policy of
                  the Company. Our Privacy Policy describes Our policies and
                  procedures on the collection, use and disclosure of Your
                  personal information when You use the Application or the
                  Website and tells You about Your privacy rights and how the
                  law protects You. Please read Our Privacy Policy carefully
                  before using Our Service.
                </p>

                <h6 className="mt-4">
                  <b>Links to Other Websites</b>
                </h6>
                <p className="mb-3">
                  Our Service may contain links to third-party web sites or
                  services that are not owned or controlled by the Company.
                </p>
                <p className="mb-3">
                  The Company has no control over, and assumes no responsibility
                  for, the content, privacy policies, or practices of any third
                  party web sites or services. You further acknowledge and agree
                  that the Company shall not be responsible or liable, directly
                  or indirectly, for any damage or loss caused or alleged to be
                  caused by or in connection with the use of or reliance on any
                  such content, goods or services available on or through any
                  such web sites or services.
                </p>
                <p className="mb-3">
                  We strongly advise You to read the terms and conditions and
                  privacy policies of any third-party web sites or services that
                  You visit.
                </p>

                <h6 className="mt-4">
                  <b>Termination</b>
                </h6>
                <p className="mb-3">
                  We may terminate or suspend Your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if You breach these Terms and
                  Conditions.
                </p>
                <p className="mb-3">
                  Upon termination, Your right to use the Service will cease
                  immediately.
                </p>

                <h6 className="mt-4">
                  <b>Limitation of Liability</b>
                </h6>
                <p className="mb-3">
                  Notwithstanding any damages that You might incur, the entire
                  liability of the Company and any of its suppliers under any
                  provision of this Terms and Your exclusive remedy for all of
                  the foregoing shall be limited to the amount actually paid by
                  You through the Service or 100 USD if You haven&rsquo;t
                  purchased anything through the Service.
                </p>
                <p className="mb-3">
                  To the maximum extent permitted by applicable law, in no event
                  shall the Company or its suppliers be liable for any special,
                  incidental, indirect, or consequential damages{" "}
                </p>
                <p className="mb-3">
                  whatsoever (including, but not limited to, damages for loss of
                  profits, loss of data or other information, for business
                  interruption, for personal injury, loss of privacy arising out
                  of or in any way related to the use of or inability to use the
                  Service, third-party software and/or third-party hardware used
                  with the Service, or otherwise in connection with any
                  provision of this Terms), even if the Company or any supplier
                  has been advised of the possibility of such damages and even
                  if the remedy fails of its essential purpose.
                </p>
                <p className="mb-3">
                  Some states do not allow the exclusion of implied warranties
                  or limitation of liability for incidental or consequential
                  damages, which means that some of the above limitations may
                  not apply. In these states, each party&rsquo;s liability will
                  be limited to the greatest extent permitted by law.{" "}
                </p>

                <h6 className="mt-4">
                  <b>
                    &rdquo;AS IS&rdquo; and &rdquo;AS AVAILABLE&rdquo;
                    Disclaimer
                  </b>
                </h6>
                <p className="mb-3">
                  The Service is provided to You &rdquo;AS IS&rdquo; and
                  &rdquo;AS AVAILABLE&rdquo; and with all faults and defects
                  without warranty of any kind. To the maximum extent permitted
                  under applicable law, the Company, on its own behalf and on
                  behalf of its Affiliates and its and their respective
                  licensors and service providers, expressly disclaims all
                  warranties, whether express, implied, statutory or otherwise,
                  with respect to the Service, including all implied warranties
                  of merchantability, fitness for a particular purpose, title
                  and non-infringement, and warranties that may arise out of
                  course of dealing, course of performance, usage or trade
                  practice. Without limitation to the foregoing, the Company
                  provides no warranty or undertaking, and makes no
                  representation of any kind that the Service will meet Your
                  requirements, achieve any intended results, be compatible or
                  work with any other software, applications, systems or
                  services, operate without interruption, meet any performance
                  or reliability standards or be error free or that any errors
                  or defects can or will be corrected.
                </p>
                <p className="mb-3">
                  Without limiting the foregoing, neither the Company nor any of
                  the company&rsquo;s provider makes any representation or
                  warranty of any kind, express or implied: (i) as to the
                  operation or availability of the Service, or the information,
                  content, and materials or products included thereon; (ii) that
                  the Service will be uninterrupted or error-free; (iii) as to
                  the accuracy, reliability, or currency of any information or
                  content provided through the Service; or (iv) that the
                  Service, its servers, the content, or e-mails sent from or on
                  behalf of the Company are free of viruses, scripts, trojan
                  horses, worms, malware, timebombs or other harmful components.
                </p>
                <p className="mb-3">
                  Some jurisdictions do not allow the exclusion of certain types
                  of warranties or limitations on applicable statutory rights of
                  a consumer, so some or all of the above exclusions and
                  limitations may not apply to You. But in such a case the
                  exclusions and limitations set forth in this section shall be
                  applied to the greatest extent enforceable under applicable
                  law.
                </p>

                <h6 className="mt-4">
                  <b>Governing Law</b>
                </h6>
                <p className="mb-3">
                  The laws of the Country, excluding its conflicts of law rules,
                  shall govern this Terms and Your use of the Service. Your use
                  of the Application may also be subject to other local, state,
                  national, or international laws.
                </p>

                <h6 className="mt-4">
                  <b>Disputes Resolution </b>
                </h6>
                <p className="mb-3">
                  If You have any concern or dispute about the Service, You
                  agree to first try to resolve the dispute informally by
                  contacting the Company.
                </p>

                <h6 className="mt-4">
                  <b>For European Union (EU) Users </b>
                </h6>
                <p className="mb-3">
                  If You are a European Union consumer, you will benefit from
                  any mandatory provisions of the law of the country in which
                  You are resident.
                </p>

                <h6 className="mt-4">
                  <b>United States Legal Compliance </b>
                </h6>
                <p className="mb-3">
                  You represent and warrant that (i) You are not located in a
                  country that is subject to the United States government
                  embargo, or that has been designated by the United States
                  government as a &rdquo;terrorist supporting&rdquo; country,
                  and (ii) You are not listed on any United States government
                  list of prohibited or restricted parties.
                </p>

                <h6 className="mt-5 mb-4">
                  <b>Severability and Waiver</b>
                </h6>

                <p className="mt-4">
                  <b>Severability</b>
                </p>
                <p className="mb-3">
                  If any provision of these Terms is held to be unenforceable or
                  invalid, such provision will be changed and interpreted to
                  accomplish the objectives of such provision to the greatest
                  extent possible under applicable law and the remaining
                  provisions will continue in full force and effect.
                </p>

                <p className="mt-4">
                  <b> Waiver </b>
                </p>
                <p className="mb-3">
                  {" "}
                  Except as provided herein, the failure to exercise a right or
                  to require performance of an obligation under these Terms
                  shall not affect a party's ability to exercise such right or
                  require such performance at any time thereafter nor shall the
                  waiver of a breach constitute a waiver of any subsequent
                  breach.{" "}
                </p>

                <p className="mt-4">
                  <b>Translation Interpretation </b>
                </p>
                <p className="mb-3">
                  {" "}
                  These Terms and Conditions may have been translated if We have
                  made them available to You on our Service. You agree that the
                  original English text shall prevail in the case of a dispute.{" "}
                </p>

                <p className="mt-4">
                  <b>Changes to These Terms and Conditions</b>
                </p>
                <p className="mb-3">
                  {" "}
                  We reserve the right, at Our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material We
                  will make reasonable efforts to provide at least 30 days'
                  notice prior to any new terms taking effect. What constitutes
                  a material change will be determined at Our sole discretion.{" "}
                </p>
                <p className="mb-3">
                  {" "}
                  By continuing to access or use Our Service after those
                  revisions become effective, You agree to be bound by the
                  revised terms. If You do not agree to the new terms, in whole
                  or in part, please stop using the website and the Service.{" "}
                </p>
                <p className="mt-4">
                  <b>Contact Us</b>
                </p>
                <p className="mb-3">
                  If you have any questions about these Terms and Conditions,
                  You can contact us:
                </p>
                <p className="mt-3">• By email: onezetaassociate@gmail.com</p>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                I Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* T&C modal end*/}

      {/* Disclaimer modal */}

      <div
        className="modal fade "
        style={{ backgroundColor: "#02255d5e" }}
        id="staticBackdropDIS"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl ">
          <div className="modal-content">
            <div className="modal-header  p-4">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Disclaimer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body  p-4">
             <div className="">
             <h5>Last updated: November 27, 2024</h5>

                <p className="mt-4 mb-3">
                  <b>Interpretation and Definitions</b>
                </p>

                <p className="mt-3"><b>Interpretation</b></p>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <p className="mt-4"><b>Definitions</b></p>
                <p className="mb-4">For the purposes of this Disclaimer:</p>

                <ul className="ms-4">
                  <li> <b>•	Company </b> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to ONEZETA ASSOCIATE PRIVATE LIMITED, Bhanot Market, 1 Turner Road,Majra, Dehradun,Uttarakhand - 248002 Email.</li>
                  <li> <b>•	Service </b> refers to the Website. </li>
                  <li> <b>•	You </b> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  <li> <b>•	Website </b> refers to 1 Zeta Fiber, accessible from https://1zeta.com/</li>
                </ul>

                <p className="mt-4"><b>Disclaimer</b></p>
                <p className="mb-3">The information contained on the Service is for general information purposes only.</p>
                <p className="mb-3">The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
                <p className="mb-3">In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the Disclaimer Generator.</p>
                <p className="mb-3">The Company does not warrant that the Service is free of viruses or other harmful components.</p>

                <p  className="mt-4"><b>External Links Disclaimer</b></p>
                <p className="mb-3">The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
</p>
                <p className="mb-3">Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>


                <p className="mt-4"><b>Errors and Omissions Disclaimer</b></p>
                <p className="mb-3"> The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service. </p>
                <p className="mb-3">The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>


                <p className="mt-4"><b>Fair Use Disclaimer</b></p>
                <p className="mb-3">The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
                 <p className="mb-3">The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p>
                    <p className="mb-3">If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p>

              
              
                    <p className="mt-4"><b>Views Expressed Disclaimer </b></p>
                <p className="mb-3">The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company. </p>
                <p className="mb-3">Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever. </p>


                <p className="mt-4"><b>No Responsibility Disclaimer </b></p>
                <p className="mb-3">The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</p>
                <p className="mb-3">In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</p>

                
                <p className="mt-4"><b>"Use at Your Own Risk" Disclaimer</b></p>
                <p className="mb-3">All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>
                <p className="mb-3">The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>

                <p className="mt-4"><b>Contact Us</b></p>
                <p className="mb-3">If you have any questions about this Disclaimer, You can contact Us:</p>
                <p className="mb-3">•	By email: onezetaassociate@gmail.com</p>
             </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
               I Understood
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer modal end*/}
    </div>
  );
}

export default Footer;
