var apiStart = function (app, fs) {
    console.log('API module start');

    var self = this;

    self.app = app;
    self.fs = fs;

    return self;
};

module.exports = apiStart;