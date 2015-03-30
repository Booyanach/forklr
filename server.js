var express = require('express'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    app = express(),
    bodyParser = require('body-parser'),
    fs=require('fs'),
    router = express.Router(),
    authController = require('./modules/api/auth'),
    userController = require('./modules/api/user'),
    recipeController = require('./modules/api/recipe');

mongoose.connect('mongodb://localhost:27017/forklr');

app.use(express.static(__dirname + '/www', '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());

app.route('/recipes')
    .get(recipeController.list);

app.route('recipe/:recipe_id')
    .post(authController.isAuthenticated, recipeController.post)
    .get(authController.isAuthenticated, recipeController.get)
    .delete(authController.isAuthenticated, recipeController.delete);

app.route('ingredient/:ingredient_id')
    .post(authController.isAuthenticated, ingredientController.post)
    .get(authController.isAuthenticated, ingredientController.get)
    .delete(authController.isAuthenticated, ingredientController.delete);

app.route('/users')
    .get(userController.list);

app.route('/user/:user_id')
    .post(userController.post)
    .get(userController.get);

app.listen(8087);

console.log('Express listening on port 80');
