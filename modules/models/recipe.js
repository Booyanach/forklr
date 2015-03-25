var mongoose = require('mongoose'),
    RecipeSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        family: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            unique: true,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        ingredients: {
            type: Array,
            default: []
        },
        stars: {
            type: Number,
            default: 0
        },
        comments: {
            type: Array,
            default: []
        },
        text: {
            type: String,
            default: ''
        },
        created: {
            type: Date,
            default: Date.now
        },
        modified: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model('Recipe', RecipeSchema);