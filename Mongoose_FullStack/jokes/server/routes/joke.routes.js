const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api/Jokes', JokeController.findAllJokes);
    app.get('/api/Jokes/:id', JokeController.findOneJoke);
    app.put('/api/Jokes/update/:id', JokeController.updateJoke);
    app.post('/api/Jokes/new', JokeController.createNewJoke);
    app.delete('/api/Jokes/delete/:id', JokeController.deleteJoke);
}
