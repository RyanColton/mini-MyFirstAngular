angular.module('myApp')
.controller('mainController', function($scope){
  $scope.message = 'Hello World!';

  var privateMessage = 'This will not show on the front page'

  $scope.friends = [
    {name: 'Bill', birthday: 'Oct 1'},
    {name: 'Bob', birthday: 'Jan 1'},
    {name: 'Barry', birthday:'Dec 1'},
    {name:'Bryan', birthday: 'Jul 1'}
 ]

  $scope.addFriend = function(){
    $scope.friends.push({name: $scope.name, birthday: $scope.birth});

    $scope.friend = null;
  }

  $scope.removeFriend = function(){
    for(var i = 0; i < $scope.friends.length; i++){
      for(var key in $scope.friends[i]){
      if($scope.friends[i][key] == $scope.name || $scope.friends[i][key] == $scope.birth)
      delete $scope.friends[i];
    }
  }
    $scope.friend = null;
  }

})
