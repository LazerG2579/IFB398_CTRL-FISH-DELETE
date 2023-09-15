const express = require("express");
const path = require('path');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "envirofish email goes here",
        pass: "apps password goes here",
    },
});
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const selectedOption = req.body.selectedOption;

    let toEmail = "";
    let subject = "";

    // Determine the appropriate email address based on the selected option
    switch (selectedOption) {
        case "individual":
            //toEmail = "envirofishinc@gmail.com";
            subject = "Individual with an enquiry";
            break;
        case "business":
            //toEmail = "envirofishinc@gmail.com";
            subject = "business/organization enquiry";
            break;
        case "volunteer":
            toEmail = "volunteer email goes here";
            subject = "volunteering enquiry";
            break;
        default:
            //toEmail = "envirofishinc@gmail.com";
            break;
    }

    const mail = {
        from: name,
        to: toEmail,
        subject: subject,
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});


// API routes
app.get('/api/data', (req, res) => {
    // Handle API requests here
    res.json({ message: 'API response' });
});

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
