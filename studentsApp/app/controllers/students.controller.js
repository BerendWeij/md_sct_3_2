(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController() {

        var vm = this;

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