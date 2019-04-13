const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controlers/BoxController');
const FileController = require('./controlers/FileController');

//GET/POST/PUT/DELETE
//get pegar 
//post criar
//put editar
//delete - deletar

routes.post('/boxes', BoxController.store   );
routes.get('/boxes/:id', BoxController.show  );
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store );

module.exports = routes;