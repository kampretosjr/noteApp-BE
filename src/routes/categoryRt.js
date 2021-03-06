const app = require('express')
const Routes = app.Router()
const multer = require('multer')
const path = require('path')
const categoryController = require('../controllers/categoryCt')
const auth = require('../helpers/auth')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const upload = multer({ storage: storage })

Routes
    .get    ('/',                   categoryController.CgetAllCategory)
    .get    ('/color',              categoryController.CgetAllColor  )
    .get    ('/:idCategory',        categoryController.CgetByidNote )
    // .post   ('/',                   upload.single('icon'),categoryController.CpostCategory )
    .post   ('/',                   categoryController.CpostCategory )
    .patch  ('/edit/:idCategory',   categoryController.CeditCategory)
    .delete ('/delete/:idCategory', categoryController.CeraseCategory)

module.exports = Routes