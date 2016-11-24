'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
// Makes tests for React components easier
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', function () {
    it('should exist', function () {
        expect(Clock).toExist();
    });

    // Test the formatSecond() function
    describe('formatSeconds', function () {
        it('should format seconds', function () {
            // First render the component
            var clock = TestUtils.renderIntoDocument(React.createElement(Clock, null));
            var seconds = 675;
            var expected = '11:15';
            // Store the actual result
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec are less than 10', function () {
            // First render the component
            var clock = TestUtils.renderIntoDocument(React.createElement(Clock, null));
            var seconds = 61;
            var actual = clock.formatSeconds(seconds);
            var expected = '01:01';

            expect(actual).toBe(expected);
        });
    });

    // Test the render() function
    describe('render', function () {
        it('should render clock to output', function () {
            var clock = TestUtils.renderIntoDocument(React.createElement(Clock, { totalSeconds: 62 }));
            // Store the root of our component in terms of the DOM
            // Convert our component into the actual HTML that is rendered into the browser
            // and pass that to jQuery
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();
            var expected = '01:02';

            expect(actualText).toBe(expected);
        });
    });
});

//# sourceMappingURL=Clock.test.js.map