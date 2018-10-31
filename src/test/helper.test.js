const assert = require('assert');
const { write_csv } = require('./../helper/helper');

describe("test cases for write_csv function", function () {

    let test_csv_file_path = "test_output.csv";

    it("should not create a file for empty data", function () {
        assert.equal(write_csv(test_csv_file_path, []), undefined)
    })

    it("should create a file for valid data", function () {
        let data_to_save = [

            {
                date: '2000-06-13',
                open: '240.660995',
                high: '245.156006',
                low: '232.843994',
                close: '242.826996',
                volume: '9720192'
            }

        ]
        assert.equal(write_csv(test_csv_file_path, data_to_save), undefined)
    })

})