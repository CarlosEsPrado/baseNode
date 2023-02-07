const { createUserQuery } = require("../models/user/user.query");

const createUserController = async (req, res) => {
    try {
        await createUserQuery(req.body);
        res.json('User created');
    } catch (error) {
        console.log(error);
        res.json('Internal server error');
    }
};

module.exports = {
    createUserController
};