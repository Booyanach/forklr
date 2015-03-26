var Ingredient = require('../models/ingredient'),
    handler = require('../jsonJandler');

exports.getIngredients = function (req, res) {
    Ingredient.find(function (err, ingredients) {
        if (err) res.json(handler.onerror("Couldn't load ingredients", err));
        res.json(handler.onreturn(ingredients));
    });
};