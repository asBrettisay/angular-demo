angular.module('myApp')
.controller('mainCtrl', function($scope) {

  $scope.sayHello = function() {
    console.log('Hello!!!');
  };

  $scope.toDoList = [
    {name: 'learn ng-repeat',
     status: 'In progress'
    },
    {
     name: 'learn jQuery',
     status: 'Complete'
   },
   {
     name: 'learn Angular',
     status: 'In progress'
   },
   {
      name: 'learn Node',
      status: 'incomplete'
    },
    {
      name: 'learn SQL',
      status: 'incomplete'
    }
  ];

  $scope.addToDo = function(newToDo) {
    $scope.toDoList.push({
      name: newToDo,
      status: 'incomplete'
    })

    $scope.newToDoItem = 'Successfully Added Item';
  }

  $scope.removeToDo = function(index) {
    // var target = $scope.toDoList.indexOf(item);
    $scope.toDoList.splice(index, 1);
  }

  $scope.hideToDoList = function() {
    $scope.shouldIBeInvisible = !$scope.shouldIBeInvisible;
  }


})
