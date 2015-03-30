var Recipe = require('../models/recipe'),
    handler = require('../jsonHandler');

exports.post = function (req, res) {
    var recipe = new Recipe({
        family: req.body.family,
        type: req.body.type,
        title: req.body.title,
        owner: req.body.username,
        ingredients: req.body.ingredients,
        text: req.body.text
    });

    recipe.save(function (err) {
        if (err) res.json(handler.onerror('error creating recipe.',err));
        res.json(handler.onok('recipe has been created'));
    });
};

exports.get = function (req, res) {
    Recipe.findById(req.params.recipe_id, function (err, recipe) {
        if (err) res.json(handler.onerror('failed to find recipe!', err));
        res.json(handler.onreturn(recipe));
    });
};

exports.list = function (req, res) {
    Recipe.find(function (err, recipes) {
        if (err) res.json(handler.onerror('failed to find recipes!', err));
        res.json(handler.onreturn(recipes));
    });
};

exports.delete = function (req, res) {
    Recipe.findByIdAndRemove(req.params.recipe_id, function (err, recipe) {
        if (err) res.json(handler.onerror('failed to delete recipe!', err));
        res.json(handler.onok('recipe deleted successfuly!'));
    });
};
