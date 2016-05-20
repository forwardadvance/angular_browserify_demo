'use strict';

var controller = require('./flickr.controller');

module.exports = function() {
  var directive = {
    template: template,
    controller: controller,
    restrict: 'E',
    scope: {
      tag: '='
    }
  };
  return directive;
};

var template = `
  <ul>
    <li ng-repeat="item in feed">
      <a href="{{item.link}}">
        <img ng-src="{{item.media.m}}" />
      </a>
    </li>
  </ul>
`
