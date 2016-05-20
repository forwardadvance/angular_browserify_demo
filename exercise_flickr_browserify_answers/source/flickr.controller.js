
module.exports = function Controller($scope, flickrService) {
  $scope.tag = "";
  var showSpinner = () => $scope.spinner = true;
  var hideSpinner = () => $scope.spinner = false;
  var showError = () => $scope.error = true;
  showSpinner();
  $scope.get = function() {
    if ($scope.tag) {
      flickrService.getByTag($scope.tag)
        .then(function(data) {
          $scope.feed = data;
        })
        .catch(showError)
        .then(hideSpinner);
    }
  }
  $scope.$watch('tag', $scope.get);
};
