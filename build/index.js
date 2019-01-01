const Merger = require("json-merger").Merger;
const fs = require("fs");
const path = require("path");

const origFolder = "./schemas/oxc";
const inFolder = "./schemas/oxce-merge";
const outFolder = "./schemas/oxce";

const merger = new Merger({ stringify: "pretty" });

// Clear old generation
if (fs.existsSync(outFolder)) {
    fs.readdirSync(outFolder).forEach(file => {
        fs.unlinkSync(path.join(outFolder, file));
    });
} else {
    fs.mkdirSync(outFolder);
}

// Merge files from oxce-merge into oxce
fs.readdirSync(inFolder).forEach(file => {
    var result = merger.mergeFile(path.join(inFolder, file));
    fs.writeFileSync(path.join(outFolder, file), result);
});

// Add missing files from oxc into oxce
fs.readdirSync(origFolder).forEach(file => {
    if (!fs.existsSync(path.join(outFolder, file))) {
        fs.copyFileSync(path.join(origFolder, file), path.join(outFolder, file));
    }
});