var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var noticiasModel = require('../models/noticiasModel');
var galeriaModel = require('../models/galeriaModel');
var galeria2Model = require('../models/galeria2Model');
var util = require('util');
var cloudinary = require('cloudinary').v2;

var uploader = util.promisify(cloudinary.uploader.upload);


/* GET home page. */
router.get('/', async function (req, res, next) {

  var noticias = await noticiasModel.getNoticias();
  var galeria = await galeriaModel.getGaleria();
  var galeria2 = await galeria2Model.getGaleria2();

  galeria = galeria.map(gal => {
    if (gal.imagen) {
      const imagen = cloudinary.url(gal.imagen);
      return {
        ...gal,
        imagen
      }
    } else {
      return {
        ...gal,
        imagen: '/images/PowellWaspLight.png'
      }
    }
  })

  galeria2 = galeria2.map(gal2 => {
    if (gal2.imagen) {
      const imagen = cloudinary.url(gal2.imagen);
      return {
        ...gal2,
        imagen
      }
    } else {
      return {
        ...gal2,
        imagen: '/images/PowellWaspLight.png'
      }
    }
  })

  res.render('index',{
    noticias,
    galeria,
    galeria2
  });
});



// Formulario Envio
router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

console.log(req.body)

  var obj = {
    to: 'seba.powell@gmail.com',
    subject: 'Contacto de Powell Designs',
    html: nombre + "<br> Se contactó solicitando: <br>" + mensaje + "<br> Su teléfono es: " + telefono
  } //cierra var obj

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }

  }); //cierra transporter

  var info = await transport.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente!!!'
  });
})



module.exports = router;