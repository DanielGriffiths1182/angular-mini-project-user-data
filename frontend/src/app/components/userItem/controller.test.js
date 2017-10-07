import UserItem from './controller';

describe('UserItem controller', () => {
    let ctrl;

    beforeEach(() => {
       ctrl = new UserItem();
    });

    describe('constructor', () => {
        it('should have default properties set', () => {
            expect(ctrl.usersService).toBe(userService);
        });
    });

    describe('$onInit', () => {
      it('should call function fetchUsers', () => {
          ctrl.fetchUsers()
          expect(ctrl.users.length).toBe(10);
      });
    });

    describe('sendButton', () => {
      it('should return selected user information as chosen', () => {
          ctrl.sendButton()
          expect(ctrl.chosen).toBeDefined();
      });
    });
});
