var express = require('express');
var router = express.Router();
var noticiasModel = require('../../models/noticiasModel');
var galeriaModel = require('../../models/galeriaModel');
var galeria2Model = require('../../models/galeria2Model');
var util = require('util');
var cloudinary = require('cloudinary').v2;

var uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// Close
router.get('/close', (req, res, next) => {
  res.render('admin/login', {
    layout: 'admin/layout'
  })
});

router.post('/close', async (req, res, next) => {
  res.render('admin/login', {
    layout: 'admin/layout'
})
})

// NOTICIAS
/* Listado de noticias*/
router.get('/', async function (req, res, next) {

  var noticias = await noticiasModel.getNoticias();
  var galeria = await galeriaModel.getGaleria();
  var galeria2 = await galeria2Model.getGaleria2();

  // console.log(noticias, galeria);

  galeria = galeria.map(gal => {
    if (gal.imagen) {
      const imagen = cloudinary.image(gal.imagen, {
        width: 80,
        height: 100,
        crop: 'fill'
      });
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
      const imagen = cloudinary.image(gal2.imagen, {
        width: 80,
        height: 100,
        crop: 'fill'
      });
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

res.render('admin/admin', {
  layout: 'admin/layout',
  usuario: req.session.nombre,
  noticias,
  galeria,
  galeria2
});
});



// para eliminar noticias
router.get('/eliminarNoticias/:id', async (req, res, next) => {
  var id = req.params.id;

  await noticiasModel.deleteNoticiasById(id);

  res.redirect('/admin/admin')
});


//para agregar noticias
router.get('/agregarNoticias', (req, res, next) => {
  res.render('admin/agregarNoticias', { //agregarNoticias.hbs
    layout: 'admin/layout'
  })
});

//agregar noticias mediante boton guardar
router.post('/agregarNoticias', async (req, res, next) => {

  // console.log(req.body);
  try {
    if (req.body.titulo != "" && req.body.texto != "") {
      await noticiasModel.insertNoticias(req.body);
      res.redirect('/admin/admin')
    } else {
      res.render('admin/agregarNoticias', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos deben estar completos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregarNoticias', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la noticia'
    })
  }
})

// para modificar noticias
router.get('/modificarNoticias/:id', async (req, res, next) => {
  var id = req.params.id;
  var noticia = await noticiasModel.getNoticiasById(id);
  res.render('admin/modificarNoticias', {
    layout: 'admin/layout',
    noticia
  });
});

// update noticias
router.post('/modificarNoticias', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      texto: req.body.texto
    }
    console.log(obj)
    if (req.body.titulo != "" && req.body.texto != "") {
      await noticiasModel.modificarNoticiasById(obj, req.body.id);
      res.redirect('/admin/admin');
    } else {
      res.render('admin/modificarNoticias', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos deben estar completos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/admin', {
      layout: 'admin/layout',
      eror: true,
      message: 'No se pudo modificar la noticia'
    })
  }

})


// GALERIA

// Galeria Digitalizados
// para eliminar galeria
router.get('/eliminarImagen/:id', async (req, res, next) => {
  var id = req.params.id;

  let imagenes = await galeriaModel.getGaleriaById(id);
  if (imagenes.imagen) {
    await (destroy(imagenes.imagen));
  }

  await galeriaModel.deleteGaleriaById(id);

  res.redirect('/admin/admin')
})

//para agregar galeria
router.get('/agregarGaleria', (req, res, next) => {
  res.render('admin/agregarGaleria', { //agregargaleria.hbs
    layout: 'admin/layout'
  })
})

//agregar galeria mediante boton guardar
router.post('/agregarGaleria', async (req, res, next) => {

  console.log(req.body);
  try {
    var imagen = '';
    if (req.files && Object.keys(req.files).length > 0) {
      img = req.files.imagen;
      imagen = (await uploader(img.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.imagen != "") {
      await galeriaModel.insertGaleria({
        ...req.body, //spread
        imagen
      });
      res.redirect('/admin/admin')
    } else {
      res.render('admin/agregarGaleria', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos deben estar completos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregarGaleria', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la galería'
    })
  }
})


// para modificar galeria
router.get('/modificarImagen/:id', async (req, res, next) => {
  var id = req.params.id;
  var imagenes = await galeriaModel.getGaleriaById(id);
  res.render('admin/modificarGaleria', {
    layout: 'admin/layout',
    imagenes
  });
});

// update galeria
router.post('/modificarImagen', async (req, res, next) => {
  try {
    let imagen = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === '1') {
      imagen = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        img = req.files.imagen;
        imagen = (await uploader(img.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      imagen

    }
    console.log(obj)
    if (req.body.titulo != "" && req.body.imagen != "") {
      await galeriaModel.modificarGaleriaById(obj, req.body.id);
      res.redirect('/admin/admin');
    } else {
      res.render('admin/modificarGaleria', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos deben estar completos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/modificarGaleria', {
      layout: 'admin/layout',
      eror: true,
      message: 'No se pudo modificar la Galería'
    })
  }

})


// Galeria Otras tecnicas
// para eliminar galeria2
router.get('/eliminarImagen2/:id', async (req, res, next) => {
  var id = req.params.id;

  let imagenes = await galeria2Model.getGaleria2ById(id);
  if (imagenes.imagen) {
    await (destroy(imagenes.imagen));
  }

  await galeria2Model.deleteGaleria2ById(id);

  res.redirect('/admin/admin')
})

//para agregar galeria2
router.get('/agregarGaleria2', (req, res, next) => {
  res.render('admin/agregarGaleria2', { //agregargaleria.hbs
    layout: 'admin/layout'
  })
})

//agregar galeria2 mediante boton guardar
router.post('/agregarGaleria2', async (req, res, next) => {

  console.log(req.body);
  try {
    var imagen = '';
    if (req.files && Object.keys(req.files).length > 0) {
      img = req.files.imagen;
      imagen = (await uploader(img.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.imagen != "") {
      await galeria2Model.insertGaleria2({
        ...req.body, //spread
        imagen
      });
      res.redirect('/admin/admin')
    } else {
      res.render('admin/agregarGaleria2', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos deben estar completos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregarGaleria2', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la galería'
    })
  }
})


// para modificar galeria2
router.get('/modificarImagen2/:id', async (req, res, next) => {
  var id = req.params.id;
  var imagenes = await galeria2Model.getGaleria2ById(id);
  res.render('admin/modificarGaleria2', {
    layout: 'admin/layout',
    imagenes
  });
});

// update galeria2
router.post('/modificarImagen2', async (req, res, next) => {
  try {
    let imagen = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === '1') {
      imagen = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        img = req.files.imagen;
        imagen = (await uploader(img.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      imagen

    }
    console.log(obj)
    if (req.body.titulo != "" && req.body.imagen != "") {
      await galeria2Model.modificarGaleria2ById(obj, req.body.id);
      res.redirect('/admin/admin');
    } else {
      res.render('admin/modificarGaleria2', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos deben estar completos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/modificarGaleria2', {
      layout: 'admin/layout',
      eror: true,
      message: 'No se pudo modificar la Galería'
    })
  }

})
module.exports = router;