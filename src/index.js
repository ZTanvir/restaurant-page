import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    const head1 = document.createElement('h1');
    element.appendChild(head1);
    head1.textContent = "Hi";

    return element;
}

document.body.appendChild(component());