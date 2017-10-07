import usersListCtrl from './usersList/controller';
import usersListView from './usersList/view.html';


export default function indexRoutes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('index', {
            url: '/',
            views: {
                '': {
                    controller: usersListCtrl,
                    controllerAs: '$ctrl',
                    template: usersListView
                }
            }
        });
}
