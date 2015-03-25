var Recipe = require('../models/recipe');

exports.postRecipe = function (req, res) {
    var recipe = new Recipe({
        family: req.body.family,
        type: req.body.type,
        title: req.body.title,
        owner: req.body.username,
        ingredients: req.body.ingredients,
        text: req.body.text
    });

    recipe.save(function (err) {
        if (err) res.json({message: 'error creating recipe.', error: err, status: 'ERROR'});
        res.json({mssage: 'recipe has been created', status: 'OK'});
    });
};

exports.getRecipe = function (req, res) {
    Recipe.findById(req.params.recipe_id, function (err, recipe) {
        if (err) res.json({message: 'failed to find recipe!', status: 'ERROR'});
        res.json({data: recipe, status: 'OK'});
    });
};

exports.getRecipes = function (req, res) {
    Recipe.find(function (err, recipes) {
        if (err) res.json({message: 'failed to find recipe!', status: 'ERROR'});
        res.json({data: recipes, status: 'OK'});
    });
};