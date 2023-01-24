const express = require('express');

const authorApiController = require('../controllers/authorApiController');
const authorApiRouter = express.Router();

authorApiRouter.get('/', authorApiController.getAuthors)

authorApiRouter.post('/', authorApiController.createAuthor)
authorApiRouter.put('/:email', authorApiController.updateAuthor)
authorApiRouter.delete('/', authorApiController.deleteAuthor)

module.exports = authorApiRouter;