(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController() {

        var vm = this;

        vm.studentName = "Gianni";

        vm.allStudents = [
            "Anton",
            "Joris",
            "Cees",
            "Ryan",
            "Jesse",
            "Idris",
            "Donovan"
        ];


    }


})();