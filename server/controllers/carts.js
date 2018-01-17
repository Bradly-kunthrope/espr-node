const Cart = require('../models').Cart;

module.exports = {
    create(req, res) {
        return Cart
            .create({
                r_date: req.body.r_date,
                cart_qty: req.body.cart_qty,
                userId: req.params.userId,
            })
            .then(cart => res.status(201).send(cart))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Cart
            .find({
                where: {
                    id: req.params.cartId,
                    userId: req.params.userId,
                },
            })
            .then(cart => {
                if (!cart) {
                    return res.status(404).send({
                        message: 'Cart Not Found',
                    });
                }

                return cart
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(updatedCart => res.status(200).send(updatedCart))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return Cart
            .find({
                where: {
                    id: req.params.cartId,
                    userId: req.params.userId,
                },
            })
            .then(cart => {
                if (!cart) {
                    return res.status(404).send({
                        message: 'Cart Not Found',
                    });
                }

                return cart
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};