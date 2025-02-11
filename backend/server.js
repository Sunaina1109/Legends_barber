const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000; // Match the frontend server port for simplicity

// Middleware
app.use(bodyParser.json());

// Allow CORS from the frontend
app.use(cors({ origin: "http://localhost:5173" })); // Replace with your frontend URL

// Route to handle form submission
app.post("/send-email", async (req, res) => {
  const { name, number, email, store, gender, services } = req.body; // Added 'gender' here

  if (!name || !email || !store || !gender) { // Ensure gender is also required
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cosmicdatasystems@gmail.com", // Replace with your email
        pass: "znat fxmr tkyb jflj", // Replace with your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: "Gmail", // Sender's email
      to: "cosmicdatasystems@gmail.com", // Recipient's email
      subject: "Appointment Request",
      html: `
        <h2>Hello Team,</h2>
        <p>We have a new appointment request. Please see the customer details below:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Store:</strong> ${store}</p>
        <p><strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1)}</p> <!-- Capitalize gender -->
        <p><strong>date:</strong> ${date}</p>
        <p><strong>Services:</strong> ${services.length > 0 ? services.join(", ") : "No services selected"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
