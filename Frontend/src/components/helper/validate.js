// import { toast } from "react-hot-toast";

// Validate mobile number
function mobileVerify(errors = {}, values) {
  const mobileStr = values.mobile?.toString().trim();

  if (mobileStr.length !== 10) {
    errors.mobile = `Mobile number must be exactly 10 digits. You entered ${mobileStr.length} digits.`;

  } else if (!/^\d{10}$/.test(mobileStr)) {
    errors.mobile = "Mobile number should contain only digits.";

  }

  return errors;

}

// Validate name
function nameVerify(errors = {}, values) {
  if (!values.name) {
    errors.name = "Name is required.";
  } else if (/[^a-zA-Z\s]/.test(values.name)) {
    errors.name = "Name must contain only letters and spaces.";
  }

  return errors;
}

// validate email
function emailVerify(error = {}, values) {
  if (values.email.includes(" ")) {
    error.email = "Email cannot have white spaces.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = "Invalid email address."
  }

  return error;
}

function mobEmail(error = {}, values) {
  const errors = {};
  if (!values.email && !values.mobile) {
    errors.general = "Please enter either email, phone number, or both.";
  } else {
    if (values.mobile) mobileVerify(errors, values);
    if (values.email) emailVerify(errors, values);
  }

  return error;
}



// Profile validation
export async function profileValidation(values) {
  const errors = {};

  // Mobile and Email validation
  mobEmail(errors, values);

  // Name validation
  nameVerify(errors, values)

  return errors;
}


export async function enqueryValidation(values) {
  const errors = {};
  // Mobile and Email validation
  mobEmail(errors, values);

  // Name validation
  nameVerify(errors, values)


  return errors;
}