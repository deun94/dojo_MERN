const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    //finding all
    app.get('/api/authors', AuthorController.findAllAuthors);
    //find one by id
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    //update one by id
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    //create new author
    app.post('/api/authors', AuthorController.createNewAuthor);
    //delete one by id
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}
