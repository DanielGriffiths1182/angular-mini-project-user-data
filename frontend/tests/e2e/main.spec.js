import { browser, element, by } from 'protractor';

import Main from './page-objects/main.page';

describe('When the user enters Main page', () => {
    const page = new Main();

    beforeAll(() => {
        page.go();
    });

    it('should display proper app title', () => {
        expect(browser.getTitle()).toEqual('SMST Quiz');
    });
});
