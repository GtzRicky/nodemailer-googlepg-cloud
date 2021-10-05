const express = require('express');
const { urlencoded } = require('express');
const sendMail = require('./utils/nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.post("/enviar-correo", async (req, res, next) => {
    try {
        const {subject, text, to} = req.body;

        const options = {
            subject,
            text,
            to,
            from: 'Mirai <patito2123htp84@gmail.com>'
        };
    
        const response = await sendMail(options);
    
        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = app;