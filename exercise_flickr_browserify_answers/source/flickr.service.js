module.exports = function Service($http, flickrBase) {
  this.getByTag = function(tag) {
    var url = [
      flickrBase,
      '?tags=',
      tag,
      '&tagmode=any&format=json',
      '&jsoncallback=JSON_CALLBACK'
    ].join('');
    return $http.jsonp(url)
      .then(function(response) {
        return response.data.items;
      });
  };
}
