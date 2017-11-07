/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* global _, Article */

// var Promise = require('bluebird');

module.exports = {
    
uploadFile: function (req, res) {
    req.file('avatar').upload({
      adapter: require('skipper-gridfs'),
      uri: 'mongodb://[username:password@]host1[:port1][/[database[.bucket]]'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);
      return res.ok();
    });
  },


  download: function (req, res) {
    var blobAdapter = require('skipper-gridfs')({
        uri: 'mongodb://localhost:27017/mydbname.images'
    });

    var fd = req.param('fd'); // value of fd comes here from get request
    blobAdapter.read(fd, function(error , file) {
        if(error) {
            res.json(error);
        } else {
            res.contentType('image/png');
            res.send(new Buffer(file));
        }
    });
}
}