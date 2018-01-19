const User = require('../models').User;
const Cart = require('../models').Cart;

module.exports = {
    create(req, res) {
        return User
            .create(req.body, { fields: Object.keys(req.body) })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(500).send(error));
    },
    list(req, res) {
        return User
            .all()
            .then(user => res.status(200).send(user))
            .catch(error => res.status(500).send(error));
    },
    list(req, res) {
        return User
            .findAll({
                include: [{
                    model: Cart,
                    as: 'carts',
                }],
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(500).send(error));
    },
    retrieve(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: Cart,
                    as: 'carts',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'Cart Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch(error => res.status(500).send(error));
    },
    update(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: Cart,
                    as: 'carts',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(() => res.status(200).send(user))  // Send back the updated user.
                    .catch((error) => res.status(500).send(error));
            })
            .catch((error) => res.status(500).send(error));
    },
    destroy(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send({ message: 'User deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};