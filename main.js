angular.module('mega_todo', []);
angular.module('mega_todo').controller('MainCtrl', function($scope) {
    $scope.myVariable = 'ciaoNico'
    $scope.todoList = [{
        text: 'Dynamic Todo 1',
        done: true,
        country: 'Nico'
    }, {
        text: 'check the checklist 2',
        done: false,
        country: 'Asino'
    }];
    var addItem = function(text) {
        if (text)
            $scope.todoList.push({
                text: text,
                done: false
            });
    }
    $scope.deleteItem = function(idx) {
        $scope.todoList.splice(idx, 1)
    }
    $scope.addItem = function() {
        addItem($scope.newItemText)
        $scope.newItemText = undefined;
    }
    $scope.modifyItem = function(itemIdx, newItem) {
        var _item = $scope.todoList[itemIdx];
        Object.keys(newItem).forEach(function(attrName) {
            _item[attrName] = newItem[attrName]
        });
    }
    $scope.getCompletedItems = function() {
        return $scope.todoList.filter(function(el) {
            return el.done
        })
    }
});