let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
// Makes tests for React components easier
let TestUtils = require('react-addons-test-utils');

let Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    // Test the formatSecond() function
    describe('formatSeconds', () => {
        it('should format seconds', () => {
            // First render the component
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 675;
            let expected = '11:15';
            // Store the actual result
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec are less than 10', () => {
            // First render the component
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let actual = clock.formatSeconds(seconds);
            let expected = '01:01';

            expect(actual).toBe(expected);
        });
    });

    // Test the render() function
    describe('render', () => {
        it('should render clock to output', () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            // Store the root of our component in terms of the DOM
            // Convert our component into the actual HTML that is rendered into the browser
            // and pass that to jQuery
            let $el = $(ReactDOM.findDOMNode(clock));
            let actualText = $el.find('.clock-text').text();
            let expected = '01:02';

            expect(actualText).toBe(expected);
        });
    });

});