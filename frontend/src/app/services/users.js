import angular from 'angular';

const serviceName = 'users';
const entityEndpointUrl = 'https://jsonplaceholder.typicode.com/users';

export class UsersService {
    /* @ngInject */
    constructor($http) {
        this.$http = $http;
    }

    getData({ config = {} }) {
        return this.$http
            .get(`${entityEndpointUrl}`, config);
    }
    // 
    // setUser(user) {
    //   this.user = user.id
    // }
    //
    // getChosen({ config = {} }) {
    //     setUser()
    //     getData({}).then(response=> {
    //         this.users = response.data;
    //     });
    //
    //     for (var i = 0; i < this.allUsers.length; i++) {
    //         if (i + 1 == this.user) {
    //           this.chosen = this.allUsers[i]
    //         }
    //     }
    //     return this.chosen;
    // }
}

export default angular.module(`services.${serviceName}`, [])
    .service(`${serviceName}Service`, UsersService)
    .name;
