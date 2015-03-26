var User = require('../models/user');

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) res.json({message: 'error creating user.', error: err, status: 'ERROR'});
        res.json({mssage: 'user has been created', status: 'OK'});
    });

    console.log(user);
};

exports.getUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) res.json({message: 'failed to list users!', status: 'ERROR'});
        res.json({data: users, status: 'OK'});
    });
};

exports.getUser = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      if (err) res.json({message: 'failed to find user!', status: 'ERROR'});
      res.json({data: user, status: 'OK'});
    })
}
