var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    UserSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

UserSchema.pre('save', function (cb) {
    var user = this;

    if (!user.isModified('password')) return cb;

    bcrypt.genSalt(5, saltCb);

    function saltCb(err, salt) {
        if (err) return cb(err);
        bcrypt.hash(user.password, salt, null, hashCb);
    }

    function hashCb(err, hash) {
        if (err) return cb(err);
        user.password = hash;
        cb();
    }
});

UserSchema.methods.verifyPassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);