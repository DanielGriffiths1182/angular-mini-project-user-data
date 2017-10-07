/* @ngInject */
export default class UserItem {
    constructor(usersService) {
        this.usersService = usersService;
    }

    $onInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.usersService.getData({}).then(response=> {
            this.users = response.data;
        });
    }

    sendButton(user) {
        this.fetchUsers()
        for (var i = 0; i < this.users.length; i++) {
            if (i + 1 == user.id) {
              this.chosen = this.users[i]
            }
        }
    }
}
