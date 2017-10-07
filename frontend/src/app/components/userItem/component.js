import './styles.scss';

import angular from 'angular';

import template from './view.html';
import controller from './controller';

const moduleName = 'components.userItem';
const componentName = 'userItem';

const loader = {
    template,
    controller,
    bindings: {
      chosen: '='
    }
};

angular.module(moduleName, [])
    .component(componentName, loader);

export { moduleName, componentName }
