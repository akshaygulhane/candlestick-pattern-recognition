
const fs = require('fs');
const { parse_data } = require('./parse/parse');
const { find_hammer_data } = require('./hammer/hammer');
const { write_csv } = require('./helper/helper');

module.exports = {
    initialize_app: async function (INPUT_CSV_PATH, OUTPUT_CSV_PATH) {

        try {
            console.log("Starting the app..")
            let raw_data = fs.readFileSync(INPUT_CSV_PATH, 'utf-8');

            let parsed_data = await parse_data(raw_data);

            let hammer_data = await find_hammer_data(parsed_data)

            write_csv(OUTPUT_CSV_PATH, hammer_data);

            console.log(`CandleStick data written to the output file at : ${OUTPUT_CSV_PATH}`)

        }
        catch (err) {
            console.log(err)
        }
    }
}