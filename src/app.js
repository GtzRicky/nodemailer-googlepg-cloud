const express = require('express');
const { urlencoded } = require('express');
const sendMail = require('./utils/nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// RUTAS DESDE APP --> // ROUTES>CONTROLLERS>SERVICES...


// NODEMAILER
app.post("/enviar-correo", async (req, res, next) => {

    const {subject, to, text, email, name} = req.body;
    // const email = 'mikegutierrez@gmail.com';
    try {
        // const pathTemplate= path.resolve("src", "views/email-templates", "bienvenida.html");

        // const template = await ejs.renderFile(pathTemplate, {title: "Hola mundo"});
        
        const options = {
            subject,
            text: `${name} ${text}`,
            to,
            from: `${email} <patito2123htp84@gmail.com>`
        };
    
        const response = await sendMail(options);
    
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});

module.exports = app;

//IMPORTS

// require("dotenv").config();
// const path = require('path');
// const ejs = require('ejs');
// const multer = require('multer');
// const { Auth } = require('googleapis');
// const { createDecipheriv } = require("crypto");
// const upload = multer({dest: '../public'})
// const stripe = require('stripe')(process.env.STRIPE_SECRET);


// MULTER -> Manejo de archivos y almacenamiento en servidores -> AWS AZURE

// app.post("/subir-archivo", upload.single('file'), (req, res, next) => {
//     res.json({
//         message: "El archivo ha sido cargado en el servidor"
//     });
// });


// // STRIPE

// app.post("/customer", async (req, res, next) => {
//     //Crear cliente
//     try {
//     const { name, email, city, country, line1, line2, postal_code, state } = req.body;

//     const customer = await stripe.customers.create({
//         name,
//         email,
//         address: {
//             city,
//             country,
//             line1,
//             line2,
//             postal_code,
//             state
//         },
//     });

//     res.json(customer);
//     } catch (error) {
//         next(error);
// }
// });


// app.post("/customer/:id/payment-method", async (req,res, next) => {
//     const { id: customerId } = req.params;
//     const { number, exp_month, exp_year, cvc } = req.body;
//     //Crear método de pago
//     try {
//         const paymentMethod = await stripe.paymentMethod.create({
//             type: 'card',
//             card: {
//                 number,
//                 exp_month,
//                 exp_year,
//                 cvc
//             },
//         });

//         const attachPaymentMethod = await stripe.attachPaymentMethod({
//             cost           

//         })
//         res.json(paymentMethod);
//     } catch (error) {
//         next(error);
//     }
// });

// app.post("/customer/:id/payment-method", (req,res, next) => {
//     //Modificar método de pago
// });

