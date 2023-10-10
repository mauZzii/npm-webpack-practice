import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

import myName from './myName';

function component2() {
    const element = document.createElement('div');

    element.textContent = myName('Austin');
    return element;
}

document.body.appendChild(component2());