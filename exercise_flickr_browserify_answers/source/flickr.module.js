var flickrService = require('./flickr.service');

module.exports = angular.module('flickr', [])
  .constant('flickrBase', 'http://api.flickr.com/services/feeds/photos_public.gne')
  .directive('flickr', flickrDirective)
  .service("flickrService", flickrService)
  .name;
