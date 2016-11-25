"use strict";

var React = require('react');

var Timer = React.createClass({
    displayName: "Timer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "timer" },
            React.createElement(
                "h1",
                { className: "page-title" },
                "Timer App"
            )
        );
    }
});

module.exports = Timer;

//# sourceMappingURL=Timer.js.map