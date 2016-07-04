var configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds011745.mlab.com:11745/nodetodosample';
    }

};
