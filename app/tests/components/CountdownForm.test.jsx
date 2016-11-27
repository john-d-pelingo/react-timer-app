let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
// Makes tests for React components easier
let TestUtils = require('react-addons-test-utils');

let CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        // Track the calls that are made to other functions and make various assertions
        // based on the arguments and context that were used
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        // Create the seconds input for the form
        countdownForm.refs.seconds.value = '109';

        // Simulate a submit
        // Access the first element of the form class
        TestUtils.Simulate.submit($el.find('form')[0]);

        // Make sure the spy was called at least once
        // Activate the form submit
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds entered', () => {
        // Track the calls that are made to other functions and make various assertions
        // based on the arguments and context that were used
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        // Create the seconds input for the form
        countdownForm.refs.seconds.value = 'abcdef';

        // Simulate a submit
        // Access the first element of the form class
        TestUtils.Simulate.submit($el.find('form')[0]);

        // Make sure the spy was not called at all
        expect(spy).toNotHaveBeenCalled();
    });
});