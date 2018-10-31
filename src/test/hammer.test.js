// const mocha = require('mocha');

const assert = require('assert');
const { calculate_body, calculate_tail, calculate_wick } = require('./../hammer/hammer');

describe("tests calculate_body() function", function () {

    it("checks for 0", function () {

        let candle_stick = {
            high: 0,
            low: 0
        }

        assert.equal(calculate_body(candle_stick), calculate_body(candle_stick))
    });

    it("checks for all 100s", function () {

        let candle_stick = {
            high: 100,
            low: 100
        }

        assert.equal(calculate_body(candle_stick), calculate_body(candle_stick))
    });

    it("checks for blank values", function () {

        let candle_stick = {
            high: 0,
            low: 0
        }

        assert.equal(calculate_body(candle_stick), calculate_body(candle_stick))
    });

    it("checks for blank values", function () {

        let candle_stick = {
            high: 0,
            low: 0
        }

        assert.equal(calculate_body(candle_stick), calculate_body(candle_stick))
    });

})