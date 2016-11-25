'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// Makes tests for React components easier
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', function () {
    it('should exist', function () {
        expect(Controls).toExist();
    });

    describe('handleSetCountdown', function () {
        it('should render pause when started', function () {
            var controls = TestUtils.renderIntoDocument(React.createElement(Controls, { countdownStatus: 'started' }));
            var $el = $(ReactDOM.findDOMNode(controls));

            // Find a button with a text of Pause
            // jQuery stuff
            var $pauseButton = $el.find('button:contains(Pause)');

            // .length is equal to the number of items it found
            expect($pauseButton.length).toBe(1);
        });

        it('should render start when started', function () {
            var controls = TestUtils.renderIntoDocument(React.createElement(Controls, { countdownStatus: 'paused' }));
            var $el = $(ReactDOM.findDOMNode(controls));

            // Find a button with a text of Pause
            // jQuery stuff
            var $startButton = $el.find('button:contains(Start)');

            // .length is equal to the number of items it found
            expect($startButton.length).toBe(1);
        });
    });
});

//# sourceMappingURL=Controls.test.js.map