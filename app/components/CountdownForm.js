'use strict';

var React = require('react');

var CountdownForm = React.createClass({
    displayName: 'CountdownForm',

    onSubmit: function onSubmit(e) {
        e.preventDefault();

        var strSeconds = this.refs.seconds.value || 0;

        if (strSeconds.trim().length > 0 && strSeconds.match(/^[0-9][0-9]*$/)) {
            this.refs.seconds.value = '';
            // 10 specifies the base
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.onSubmit, ref: 'form', className: 'countdown-form' },
                React.createElement('input', { type: 'text', ref: 'seconds', placeholder: 'Enter time in seconds' }),
                React.createElement(
                    'button',
                    { className: 'button expanded' },
                    'Start'
                )
            )
        );
    }
});

module.exports = CountdownForm;

//# sourceMappingURL=CountdownForm.js.map