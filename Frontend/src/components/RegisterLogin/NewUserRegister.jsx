import Gradient from "../Animation/Gradient";
import "./FormCss.css";

function NewUserRegister() {
  return (
    <section className="registerForm ">
      <div className="container">
        <div className="signupSection">
          
          <div className="info col-md-5">
            <h2 className="">Join OneZeta</h2>
            <p>The Future Is Here</p>
            <Gradient />
          </div>

          <form
            action="#"
            method="POST"
            className="signupForm col-md-5"
            name="signupform "
          >
            <h2 className="mt-5 mb-3">Sign Up</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="fullname"></label>
                <input
                  type="text"
                  className="inputFields"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  value=""
                  onInput="return userNameValidation(this.value)"
                  required
                />
              </li>

              <li>
                <label htmlFor="phone"></label>
                <input
                  type="Number"
                  className="inputFields"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value=""
                  onInput="return userNameValidation(this.value)"
                  required
                />
              </li>

              <li>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  className="inputFields"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value=""
                />
              </li>

              <li>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="inputFields"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value=""
                  onInput="return passwordValidation(this.value)"
                  required
                />
              </li>

              <li id="center-btn">
                <div className="my-3">
                  <a className="btn" href="#your-link">
                    Submit
                  </a>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewUserRegister;
