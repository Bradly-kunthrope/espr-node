const usersController = require('../controllers').users;
const cartsController = require('../controllers').carts;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the users API!',
    }));
    function createUser (last_name, first_name, email, password) 
       { 
           return app.post('/api/users', usersController.create)      
        };
    
    app.get('/api/users', usersController.list);
    
    app.post('/api/users/:userId/carts', cartsController.create);
    
    app.get('/api/users/:userId', usersController.retrieve);
    
    app.put('/api/users/:userId', usersController.update);
    
    app.delete('/api/users/:userId', usersController.destroy);
};