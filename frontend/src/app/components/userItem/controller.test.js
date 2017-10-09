import UserItem from './controller';
import {UsersService as Service} from './../../services/users.js';



describe('UserItem controller', () => {
    let ctrl;
    let service;

    const $http = {};
    const entityEndpointUrl = 'https://jsonplaceholder.typicode.com/users';

    beforeEach(() => {
        service = new Service($http);
        ctrl = new UserItem(service);
    });

    describe('constructor', () => {
        it('should have default properties set', () => {
            expect(ctrl.service).toBe(service);
        });
    });

    describe('$onInit', () => {
      it('should call function fetchUsers', () => {
          ctrl.service.getData({}).then(response=> {
              ctrl.users = response.data;
          });
          expect(ctrl.users.length).toBe(10);
      });
    });

    describe('fetchUsers', () => {
      it('should return JSON object with length of 10 indeces', () => {
          ctrl.service.getData({}).then(response=> {
              ctrl.users = response.data;
          });
          expect(ctrl.users.length).toBe(10);
      });
    });

    describe('sendButton', () => {
      it('should return individual user information from original JSON object', () => {
          var user = ctrl.fetchUsers()
// NOTE since I'm having trouble getting these tests running (service undefined), I haven't figured out the format
// for calling functions in the test file, so there are 2 different processes illustrated in the attempted tests.
          ctrl.sendButton(user[1])
          expect(ctrl.chosen).toEqual(user[1]);
      });
    });
});
