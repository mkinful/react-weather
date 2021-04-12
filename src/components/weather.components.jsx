import React from 'react';

const Weather = () => {
    return (
        <div className="container">
            <h1>Atlanta</h1>
            <h5 className="py-4">
                <i className="wi wi-day-sunny display-1"></i>
            </h5>
            <h1 className="py-2">73&deg;</h1>

            {minmaxTemp(88, 46)}

            <h4 className="py-3">Bright Sunny Day</h4>
        </div>
    );
};

function minmaxTemp(min, max) {
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}

export default Weather;