'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// Makes tests for React components easier
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', function () {
    it('should exist', function () {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', function () {
        // Track the calls that are made to other functions and make various assertions
        // based on the arguments and context that were used
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(React.createElement(CountdownForm, { onSetCountdown: spy }));
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        // Create the seconds input for the form
        countdownForm.refs.seconds.value = '109';

        // Simulate a submit
        // Access the first element of the form class
        TestUtils.Simulate.submit($el.find('form')[0]);

        // Make sure the spy was called at least once
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds entered', function () {
        // Track the calls that are made to other functions and make various assertions
        // based on the arguments and context that were used
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(React.createElement(CountdownForm, { onSetCountdown: spy }));
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        // Create the seconds input for the form
        countdownForm.refs.seconds.value = 'abcdef';

        // Simulate a submit
        // Access the first element of the form class
        TestUtils.Simulate.submit($el.find('form')[0]);

        // Make sure the spy was not called at all
        expect(spy).toNotHaveBeenCalled();
    });
});

//# sourceMappingURL=CountdownForm.test.js.map