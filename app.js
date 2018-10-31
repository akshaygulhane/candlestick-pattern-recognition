const { initialize_app } = require('./src/index');

const INPUT_CSV_PATH = "data.csv";
const OUTPUT_CSV_PATH = "output.csv";

initialize_app(INPUT_CSV_PATH, OUTPUT_CSV_PATH);