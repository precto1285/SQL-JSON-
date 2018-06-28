//Dependencies
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

//Creates a "Book" model that matches up with DB
var Book = sequelize.define("book", {
    title:{
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    pages: {
        type: Sequelize.INTERGER
    },
    timestamps: false
});

//Syngs DB
Book.sync();

//Makes the Book Model available

module.exports = Book;