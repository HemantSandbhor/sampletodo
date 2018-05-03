function TodoCtrl($scope) {
  $scope.all=true;

  $scope.todos = [
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({titletext:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };

  $scope.checkAll = function()
  {
    if( $scope.all==true){
      $scope.all=false;
        for(i in  $scope.todos)
     $scope.todos[i].done=true;
    }else{
       $scope.all=true;
          for(i in  $scope.todos)
     $scope.todos[i].done=false;
    }
  
  }
}