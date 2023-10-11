import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './header.svg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

//output TOML Example and Tom Preston-Werner to console
console.log(toml.title);
console.log(toml.owner.name);

//output YAML Example and Tom Preston-Werner to console
console.log(yaml.title);
console.log(yaml.owner.name);

//output JSON Example and Tom Preston-Werner to console
console.log(json.title);
console.log(json.owner.name);

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

function component2() {
    const element = document.createElement('div');

    element.textContent = myName('Austin');
    return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());