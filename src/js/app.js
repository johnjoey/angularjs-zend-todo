import angular from 'angular';

angular
  .module('Todo', [])
  .controller('todoController', ['$scope', function($scope) {
    $scope.todos = [
      {
        title: 'build a dumb todo app',
        completed: true,
      },
      {
        title: 'dockerize',
        completed: true,
      },
      {
        title: 'add zend framework',
        completed: true,
      },
      {
        title: 'add webpack',
        completed: true,
      },
      {
        title: 'make form and list directives',
        completed: false,
      },
      {
        title: 'add basic layout',
        completed: false,
      },
    ];

    $scope.addTodo = addTodo;
    $scope.getTodos = getTodos;

    function addTodo() {
      $scope.todos.push(
        {
          title: $scope.newTodo,
          done: false,
        }
      );

      $scope.newTodo = '';
    }

    function getTodos(status = false) {
      return $scope.todos.filter(todo => todo.completed === status);
    }
  }]);