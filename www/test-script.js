$(function () {
    $('.getUsers').on('click', function () {
        $.get('/users', function (response) {
            $('.usersList').text(JSON.stringify(response));
        });
    });

    $('.getRecipes').on('click', function () {
        $.get('/recipes', function (response) {
            $('.recipesList').text(JSON.stringify(response));
        });
    });
});