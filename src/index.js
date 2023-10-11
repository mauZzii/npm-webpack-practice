import _ from 'lodash';
import myName from './myName';
import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

function component2() {
    const element = document.createElement('div');

    element.textContent = myName('Austin');
    return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());