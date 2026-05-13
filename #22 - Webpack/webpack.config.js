const path = require("path");

module.exports = {
    mode: "production",
    entry: ["./src/script.js", "./src/functions.js"] , // UCitava script.js
    output: { // poslednji fajl koji ce se kreirati
        filename: "script.min.js", // I nalazi se u dist folderu
        path: path.resolve(__dirname, "dist"), // Nadji mi dist folder u projektu
    }
};