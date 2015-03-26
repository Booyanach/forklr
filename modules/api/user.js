var User = require('../models/user'),
    handler = require('../jsonJandler');

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) res.json(handler.onerror('error creating user.', err));
        res.json(handler.onok('user has been created'));
    });

    console.log(user);
};

exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) res.json(handler.onerror('failed to list users!', err));
        res.json(handler.onreturn(users));
    });
};

exports.getUser = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      if (err) res.json(handler.onerror('failed to find user!', err));
      res.json(handler.onreturn(user));
    });
};
