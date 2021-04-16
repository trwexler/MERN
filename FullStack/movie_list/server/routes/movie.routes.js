const MovieController = require("../controllers/movie.controllers");


module.exports = function(app){
    app.get('/api/movies', MovieController.getAll);
    app.post('/api/movies', MovieController.create);
    app.get('/api/movies/:id', MovieController.getOne);
    app.delete('/api/movies/:id', MovieController.delete);
    app.put('/api/movies/:id', MovieController.update);
}