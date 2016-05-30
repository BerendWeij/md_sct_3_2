(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController($http) {

        var vm = this;

        vm.newStudent = {};

        vm.setStudent = function(currentStudent){
            if(vm.currentStudent != currentStudent)
                vm.currentStudent = currentStudent;
            else
                vm.currentStudent = undefined;

        };

        vm.createStudent = function(){
            var newStudent = {
                name: vm.newStudent.name,
                age: vm.newStudent.age
            };

            //vm.allStudents.push(newStudent);
            vm.allStudents.splice(0, 0, newStudent);

            vm.newStudent = {};
        }

        vm.allStudents = [
            {name:"Anton", age:18},
            {name:"Joris", age:29},
            {name:"Cees", age:19},
            {name:"Ryan", age:18},
            {name:"Jesse", age:18},
            {name:"Idris", age:20},
            {name:"Donovan", age:18}
        ];


        // $http.get() -> returned een object {then:function(){}}
        // dit object noemen we een promise
        // met then() geven we aan welke functie we willen uitvoeren als $http klaar is met laden
        $http.get('data/trainstations.json').then(function(trainstations){
            vm.allStudents = trainstations.data;
        });

    }


})();