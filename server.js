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
    .get(recipeController.getRecipes);

app.route('recipe/:recipe_id')
    .post(authController.isAuthenticated, recipeController.postRecipe)
    .get(authController.isAuthenticated, recipeController.getRecipe)
    .delete(authController.isAuthenticated, recipeController.deleteRecipe);

app.route('/users')
    .post(userController.postUsers)
    .get(userController.getUsers);

    app.route('/user/:user_id')
        .get(userController.getUser);

app.listen(8087);

console.log('Express listening on port 80');
