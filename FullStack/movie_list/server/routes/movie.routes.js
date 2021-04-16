const MovieController = require("../controllers/movie.controllers");


module.exports = function(app){
    app.get('/api/movies', MovieController.getAll);
    app.post('/api/movies', MovieController.create);
    app.get('/api/movies/:_id', MovieController.getOne);
    app.delete('/api/movies/:_id', MovieController.delete);
    app.put('/api/movies/:id', MovieController.update);
}