import React from 'react';

const App = (props) => {

    return (
        <div className="container">
            <div className="clock"><i className="far fa-clock"></i></div>
            <div className="six">{props.six % 10}</div>
            <div className="five">{props.five % 10}:</div>
            <div className="four">{props.four % 6}</div>
            <div className="three">{props.three % 10}:</div>
            <div className="two">{props.two % 6}</div>
            <div className="one">{props.one % 10}</div>
        </div>
    )
}

export default App;