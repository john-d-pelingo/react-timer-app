'use strict';

var React = require('react');

var Timer = React.createClass({
    displayName: 'Timer',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Timer component'
            )
        );
    }
});

module.exports = Timer;

//# sourceMappingURL=Timer.js.map