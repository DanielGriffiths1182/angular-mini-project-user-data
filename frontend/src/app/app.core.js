import angular from 'angular';
import uirouter from 'angular-ui-router';

import {
    pagesNames,
    serviceNames,
    componentNames
} from './autoloader';


const MODULE_NAME = 'app.core';

angular.module(MODULE_NAME, [
    // 3rd party
    uirouter,

    // local
    ...componentNames,
    ...pagesNames,
    ...serviceNames,
]);

export default MODULE_NAME;
