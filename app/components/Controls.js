'use strict';

var React = require('react');

var Controls = React.createClass({
    displayName: 'Controls',

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },

    render: function render() {
        var countdownStatus = this.props.countdownStatus;

        var renderStartStopButton = function renderStartStopButton() {
            if (countdownStatus === 'started') {
                return React.createElement(
                    'button',
                    { className: 'button secondary' },
                    'Pause'
                );
            } else if (countdownStatus === 'paused') {
                return React.createElement(
                    'button',
                    { className: 'button primary' },
                    'Start'
                );
            }
        };

        // Always render clear button in the beginning
        return React.createElement(
            'div',
            { className: 'controls' },
            renderStartStopButton(),
            React.createElement(
                'button',
                { className: 'button alert hollow' },
                'Clear'
            )
        );
    }

});

module.exports = Controls;

//# sourceMappingURL=Controls.js.map