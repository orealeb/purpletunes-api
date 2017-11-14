/**
 * PlaylistSubmissionController
 *
 * @description :: Server-side logic for managing PlaylistSubmissions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* global _, PlaylistSubmission */

// var Promise = require('bluebird');

module.exports = {
    
    /**
   * `CatalogFeedbackController.create()`
   */
  create: function createFn(req, res) {
    var playlistSubmissionBody = req.body.playlistSubmission;
    var playlistSubmission = {
      name: playlistSubmissionBody.details,
      email: playlistSubmissionBody.email,
      url: playlistSubmissionBody.url,
      playlists: playlistSubmissionBody.playlists,
    };
    sails.log.info(req.body.playlistSubmission);


    PlaylistSubmission
      .create(playlistSubmission)
      .then(results => res.json(200, results))
      .catch((err) => {
        sails.log.error('PlaylistSubmissionController.create', err);
        return res.json(500, err);
      });
  },

  find: function findFn(req, res) {
    console.log('in find');
    PlaylistSubmission.find()
      .then(playlists => res.json(200, playlists))
      .catch((error) => {
        sails.log.error('PlaylistSubmissionController.find', error);
        return res.json(500, error);
      });
  },

  findOne: function findOneFn(req, res) {
    var id = req.params.id;
    PlaylistSubmission.findOne({ id }, req.body)
      .then(playlistSubmission => res.json(200, { playlistSubmission: playlistSubmission }))
      .catch((findError) => {
        sails.log.error('PlaylistSubmissionController.findOne.error', findError);
        return res.json(500, findError);
      });
  },

  update: (req, res) => {
    sails.log.error('PlaylistSubmissionController.update.error', 'Not Implemeneted');
    return res.json(501, 'Not Implemented');
  },

  destroy: (req, res) => {
    sails.log.error('PlaylistSubmissionController.destroy.error', 'Not Implemeneted');
    return res.json(501, 'Not Implemented');
  },


};
