const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");

dotenv.config();

// Create a transporter
const transporter = nodemailer.createTransport(
  {
    service: "gmail",
    host: "mail.1zeta.com",
    port: 465,
    secure: true,
    auth: {
      user: "kunalshivhare200@gmail.com",
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
  theme: "default", // Choose the theme, e.g., "default", "cerberus"
  product: {
    name: "1zeta",
    link: "https://1zeta.com", // Company link
  },
});

exports.registerMail = async ({ name, adminEmail, email, otp }) => {
  try {
    const emails = adminEmail || email;
    let emailTemplate = {
      body: {
        name:"Dear " + name || "User",
        intro: otp
          ? `Your OTP is ${otp}. Please use this to complete your verification.`
          : name === "Admin" ? "Password Change Successfully" :"Welcome to 1Zeta! We're very excited to have you on board.",
        outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };

    const emailBody = MailGenerator.generate(emailTemplate);

    const message = {
      from: `"1zeta" <kunalshivhare200@gmail.com>`,
      to: emails,
      subject: otp ? `Your 1zeta OTP Code is ${otp}` : "Welcome to 1zeta!",
      html: emailBody,
    };

    // Retry mechanism for email sending
    const sendEmailWithRetry = async (message) => {
        try {
          await transporter.sendMail(message);
          return { success: true, message: "Email sent successfully" };
        } catch (error) {
          return { success: false, message: "Sent Error" };
        }
    };

    // Call the retry function to send the email
    const result = await sendEmailWithRetry(message);
    return result;
  } catch (error) {
    console.error("Error in registerMail: ", error.message);
    throw new Error("Failed to send email. Please try again.");
  }
};
