(function() {
    'use strict';

    angular
        .module('e2RApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('finishReset', {
            parent: 'account',
            url: '/reset/finish?key',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/reset/finish/reset.finish.html',
                    controller: 'ResetFinishController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
