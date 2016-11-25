'use strict';

var React = require('react');

var Controls = React.createClass({
    displayName: 'Controls',

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    // Currying function
    // The return value of onStatusChange is a function that is going to get called
    // when the person clicks the button
    // We're using a function to generate a different function
    onStatusChange: function onStatusChange(newStatus) {
        var _this = this;

        return function () {
            // this.props.onStatusChange is what is passed from the parent component which is a function
            // and this is what is called when someone clicks a button
            _this.props.onStatusChange(newStatus);
            ;
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        // console.log('componentWillReceiveProps', newProps.countdownStatus);
    },
    render: function render() {
        var _this2 = this;

        var countdownStatus = this.props.countdownStatus;

        // Render the correct buttons according to the current status

        var renderStartStopButton = function renderStartStopButton() {
            if (countdownStatus === 'started') {
                return React.createElement(
                    'button',
                    { className: 'button secondary', onClick: _this2.onStatusChange('paused') },
                    'Pause'
                );
            } else if (countdownStatus === 'paused') {
                return React.createElement(
                    'button',
                    { className: 'button primary', onClick: _this2.onStatusChange('started') },
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
                { className: 'button alert hollow', onClick: this.onStatusChange('stopped') },
                'Clear'
            )
        );
    }

});

module.exports = Controls;

//# sourceMappingURL=Controls.js.map