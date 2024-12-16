const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");

dotenv.config();

// Debugging log for environment variables
// console.log("Email: ", process.env.EMAIL, "Password: ", process.env.PASSWORD);

// Create a transporter
const transporter = nodemailer.createTransport(
  {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "kunalshivhare200@gmail.com", // Gmail address
      pass: "pzegisnuxruxpini"
    },
  },
  {
    logger: true, // Enable detailed logs for SMTP
    debug: true,  // Debug output to console
  }
);

// Initialize Mailgen
const MailGenerator = new Mailgen({
  theme: "cerberus", // Choose the theme, e.g., "default", "cerberus"
  product: {
    name: "1zeta",
    link: "https://1zeta.com", // Company link
  },
});

exports.registerMail = async ({ name, email, otp }) => {
  try {
    // Generate the email content using Mailgen
    let emailTemplate = {
      body: {
        name: name || "User",
        intro: otp
          ? `Your OTP is ${otp}. Please use this to complete your verification.`
          : "Welcome to 1Zeta! We're very excited to have you on board.",
        outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };

    const emailBody = MailGenerator.generate(emailTemplate);

    // Message object
    console.log("email ",email)
    
    const message = {
      from: `"1zeta" <kunalshivhare200@gmail.com>`,
      to: email,
      subject: otp ? `Your 1zeta OTP Code is ${otp}` : "Welcome to 1zeta!",
      html: emailBody,
    };

    // Retry mechanism for email sending
    const sendEmailWithRetry = async (message, retries = 3) => {
      // for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          await transporter.sendMail(message);
          console.log("Email sent successfully on attempt", attempt);
          return { success: true, message: "Email sent successfully" };
        } catch (error) {
          return { success: false, message: "Sent Error" };

          // console.error(
          //   `Attempt ${attempt} failed. Error:`,
          //   error.message
          // );
          // if (attempt === retries) {
          //   throw new Error("Failed to send email after retries.");
          // }
        }
      // }
    };

    // Call the retry function to send the email
    const result = await sendEmailWithRetry(message);

    return result;
  } catch (error) {
    console.error("Error in registerMail: ", error.message);
    throw new Error("Failed to send email. Please try again.");
  }
};
