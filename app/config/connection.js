//Dependencies
var Sequelize = require("sequelize");

// mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_library", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}

);

//Export connection
module.exports = sequelize;