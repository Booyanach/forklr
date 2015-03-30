var Ingredient = require('../models/ingredient'),
    handler = require('../jsonHandler');

exports.get = function (req, res) {
    Ingredient.find(function (err, ingredients) {
        if (err) res.json(handler.onerror('Unable to load ingredients', err));
        res.json(handler.onreturn(ingredients));
    });
};

exports.post = function (req, res) {
    var ingredient = new Ingredient({
        name: req.body.name,
        type: req.body.type,
        allergies: req.body.allergies
    });

    ingredient.save(function (err) {
        if (err) res.json(handler.onerror('Unable to save ingredient', err));
        res.json(handler.onok('ingredient Saved!'));
    });
};
