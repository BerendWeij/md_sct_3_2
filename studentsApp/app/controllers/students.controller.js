(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StudentsController', StudentsController);

    function StudentsController() {

        var vm = this;

        vm.studentName = "Gianni";

        vm.allStudents = [
            "Daan",
            "Abdelkarim",
            "Stijn",
            "Jimmy",
            "Yassine",
            "Sander",
            "Remco"
        ];

    }

})();