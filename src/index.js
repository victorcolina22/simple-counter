import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import App from './App';
import PropTypes from 'prop-types';

App.PropTypes = {
    one: PropTypes.number,
    two: PropTypes.number,
    three: PropTypes.number,
    four: PropTypes.number,
    five: PropTypes.number,
    six: PropTypes.number
}

let counter = 0
setInterval(() => {
    let digitOne = Math.floor(counter/1);
    let digitTwo = Math.floor(counter/10);
    let digitThree = Math.floor(counter/60);
    let digitFour = Math.floor(counter/600);
    let digitFive = Math.floor(counter/3600);
    let digitSix = Math.floor(counter/36000);
    ReactDOM.render(
        <App
        one = {digitOne}
        two = {digitTwo}
        three = {digitThree}
        four = {digitFour}
        five = {digitFive}
        six = {digitSix}
        />,
        document.querySelector("#root")
    );
    counter++
}, 1000);
