(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController() {

        var vm = this;

        vm.newStudent = {};

        vm.setCurrentStudent = function(currentStudent){
            if(currentStudent != vm.currentStudent)
                vm.currentStudent = currentStudent;
            else
                vm.currentStudent = undefined;
        };

        vm.addStudent = function(){
            vm.allStudents.push(
                {
                    name: vm.newStudent.name,
                    age: vm.newStudent.age
                }
            );

            vm.newStudent = {};
        };

        vm.allStudents = [
            {name:"Artur", age:20},
            {name:"Mitchell", age:18},
            {name:"Remco", age:17},
            {name:"Dave", age:21},
            {name:"Sander", age:17},
            {name:"Jimmy", age:18},
            {name:"Yassine", age:19}
        ];


    }


})();