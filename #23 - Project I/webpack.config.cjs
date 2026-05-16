const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production",
    entry: './src/script.js', // UCitava script.js
    output: { // poslednji fajl koji ce se kreirati
        filename: "script.min.js", // I nalazi se u dist folderu
        path: path.resolve(__dirname, "dist"), // Nadji mi dist folder u projektu
    },
    plugins: [
        new Dotenv()
    ]
};