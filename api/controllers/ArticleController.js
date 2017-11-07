/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* global _, Article */

// var Promise = require('bluebird');

module.exports = {
    
    /**
   * `CatalogFeedbackController.create()`
   */
  create: function createFn(req, res) {
    var articleBody = req.body.article;
    var article = {
      details: articleBody.details,
      title: articleBody.title,
      type: articleBody.type,
    };
    sails.log.info(req.body.article);


    Article
      .create(article)
      .then(results => res.json(200, results))
      .catch((err) => {
        sails.log.error('ArticleController.create', err);
        return res.json(500, err);
      });
  },

  find: function findFn(req, res) {
    console.log('in find');
    Article.find()
      .then(articles => res.json(200, articles))
      .catch((error) => {
        sails.log.error('ArticleController.find', error);
        return res.json(500, error);
      });
  },

  findOne: function findOneFn(req, res) {
    var id = req.params.id;
    Article.findOne({ id }, req.body)
      .then(article => res.json(200, { reuse: article }))
      .catch((findError) => {
        sails.log.error('ArticleController.findOne.error', findError);
        return res.json(500, findError);
      });
  },

  update: (req, res) => {
    sails.log.error('ArticleController.update.error', 'Not Implemeneted');
    return res.json(501, 'Not Implemented');
  },

  destroy: (req, res) => {
    sails.log.error('ArticleController.destroy.error', 'Not Implemeneted');
    return res.json(501, 'Not Implemented');
  },


};
