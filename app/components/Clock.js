'use strict';

var React = require('react');

var Clock = React.createClass({
    displayName: 'Clock',

    getDefaultProps: function getDefaultProps() {
        return {
            totalSeconds: 0
        };
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function formatSeconds() {
        var totalSeconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;

        return minutes + ':' + seconds;
    },
    render: function render() {
        var totalSeconds = this.props.totalSeconds;

        return React.createElement(
            'div',
            { className: 'clock' },
            React.createElement(
                'span',
                { className: 'clock-text' },
                this.formatSeconds(totalSeconds)
            )
        );
    }
});

module.exports = Clock;

//# sourceMappingURL=Clock.js.map