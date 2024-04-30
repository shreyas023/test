const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const nodemailer = require('nodemailer');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail's SMTP server
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const sendEmail = async (formData, subject) => {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: `
          ${subject === 'Email Form Submission' ? 'shrushti.samant@gmail.com' : 'chunamariom@gmail.com'}`, // Replace with recipient emails
        subject: subject, // Set subject based on form
        text: `
          ${subject === 'Email Form Submission' ? `
            Form details:
  
            Name: ${formData.name}
            Email: ${formData.email}
            Contact: ${formData.contact}
          ` : `
            Warranty Form Submission:
  
            Customer Details:
  
            Name: ${formData.fname} ${formData.lname}
            Email: ${formData.wemail}
            Address: ${formData.saddress}
            City: ${formData.city}
            State: ${formData.state}
            ZIP Code: ${formData.zip}
  
            Vehicle Details:
  
            Vehicle Model: ${formData.vmodel}
            Vehicle Make: ${formData.vmake}
            Service Date: ${formData.date}
  
            Product Type: ${formData.opt1}
          `}
        `
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get('/warranty', (req, res) => {    
    res.sendFile(__dirname + "/public/warranty.html");
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/public/blog.html");
});

app.get('/matteppf', (req, res) => {
    res.sendFile(__dirname + "/public/matteppf.html");
});

app.get('/clearppf', (req, res) => {
    res.sendFile(__dirname + "/public/clearppf.html");
});

app.post('/submit',(req,res)=>{
    const formData = req.body;
    sendEmail(formData, 'Email Form Submission');
    res.sendFile(__dirname + "/public/thankyou.html");
});

app.post('/claim',(req,res)=>{
    const formData = req.body;
    sendEmail(formData, 'Warranty Form Submission');
    res.sendFile(__dirname + "/public/thankyou.html");
})

app.listen(process.env.PORT, () => console.log("Server listening on http://localhost:" + process.env.PORT));