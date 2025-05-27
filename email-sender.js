const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre_email@gmail.com", // Remplacez par votre email
    pass: "votre_mot_de_passe" // Remplacez par votre mot de passe
  }
});

const mailOptions = {
  from: "votre_email@gmail.com",
  to: "email_destinataire@example.com",
  subject: "Test Node.js Email",
  text: "Ceci est un test depuis Node.js!"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email envoyé : " + info.response);
  }
});
