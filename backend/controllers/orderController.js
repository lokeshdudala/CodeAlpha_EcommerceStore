const Order = require("../models/Order");

const createOrder = async (req, res) => {
    try {

        const { user, products, totalAmount } = req.body;

        const order = await Order.create({
            user,
            products,
            totalAmount
        });

        res.status(201).json({
            message: "Order Placed Successfully",
            order
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getOrders = async (req, res) => {
    try {

        const { userId } = req.params;

        const orders = await Order.find({
            user: userId
        });

        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createOrder,
    getOrders
};