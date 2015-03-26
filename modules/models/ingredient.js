var mongoose = require('mongoose'),
    IngredientSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        allergies: {
            type: Array,
            default: []
        }
    });

module.exports = mongoose.model('Ingredient', IngredientSchema);