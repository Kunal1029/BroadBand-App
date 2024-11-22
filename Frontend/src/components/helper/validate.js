import { toast } from "react-hot-toast";

// Validate mobile number
function mobileVerify(errors = {}, values) {
  const mobileStr = values.mobile?.toString().trim();

  if (!mobileStr) {
    errors.mobile = "Mobile number is required.";
    toast.error(errors.mobile);
  } else if (mobileStr.length !== 10) {
    errors.mobile = `Mobile number must be exactly 10 digits. You entered ${mobileStr.length} digits.`;
    toast.error(errors.mobile);
  } else if (!/^\d{10}$/.test(mobileStr)) {
    errors.mobile = "Mobile number should contain only digits.";
    toast.error(errors.mobile);
  }

  return errors;
}

// Validate name
function nameVerify(errors = {}, values) {
  if (!values.name) {
    errors.name = "Name is required.";
    toast.error(errors.name);
  } else if (/[^a-zA-Z\s]/.test(values.name)) {
    errors.name = "Name must contain only letters and spaces.";
    toast.error(errors.name);
  }

  return errors;
}

// validate email
function emailVerify(error = {}, values){
  if(!values.email){
     error.email = toast.error("please enter email")
  }else if(values.email.includes(" ")){
     error.email = toast.error("Email have white spaces.")
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
     error.email = toast.error("Invalid Email Address")
  }

  return error;
}

export async function enqueryValidation(values){
  const errors = {};
  mobileVerify(errors, values);
  nameVerify(errors, values);
  emailVerify(errors,values)

  return errors;
}

// Profile validation
export async function profileValidation(values) {
  const errors = {};
  mobileVerify(errors, values);
  nameVerify(errors, values);
  return errors;
}
