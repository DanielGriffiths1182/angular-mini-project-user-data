import {UsersService as Service} from '../users';

describe('UsersService', () => {
    let service;

    const $http = {};
    const entityEndpointUrl = 'https://jsonplaceholder.typicode.com/users';

    beforeEach(() => {
        service = new Service($http);
    });

    describe('constructor', () => {
        it('should have default properties set', () => {
            expect(service.$http).toBe($http);
        });
    });

    describe('getData', () => {
      it('should return an observable array', () => {
          var config = {}
          var data = service.$http.get(`${entityEndpointUrl}`, config);
          data.then(response=> {
              service.users = response.data;
          });
          expect(users.length).toBe(10);
      });
    });
});
