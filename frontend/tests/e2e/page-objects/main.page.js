import {browser, element, by} from 'protractor';

export default class Main {
    constructor() {
        this.route = '/';
    }

    go() {
        browser.setLocation(this.route);
    }
}