const userModels = require("./user.models")

const createUserQuery = async (data) => {
    const user = await userModels(data);
    await user.save();
};

module.exports = {
    createUserQuery
};